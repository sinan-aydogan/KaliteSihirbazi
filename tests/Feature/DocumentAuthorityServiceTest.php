<?php

use App\Enums\Document\DocumentAuthorityRole;
use App\Models\Department;
use App\Models\Document\DocumentType;
use App\Models\Document\DocumentTypeAuthority;
use App\Models\HumanResources\Employee\Employee;
use App\Models\User;
use App\Services\Document\DocumentAuthorityService;

beforeEach(function () {
    $this->service = app(DocumentAuthorityService::class);
    $this->documentType = DocumentType::create(['code' => 'PROC', 'name' => 'Procedure']);
    $this->grantedBy = User::factory()->create();
});

test('it grants a role to a concrete user', function () {
    $user = User::factory()->create();

    $authority = $this->service->grantToUser($this->documentType, $user, DocumentAuthorityRole::Author, $this->grantedBy);

    expect($authority->user_id)->toBe($user->id)
        ->and($authority->role)->toBe(DocumentAuthorityRole::Author)
        ->and($authority->granted_by)->toBe($this->grantedBy->id)
        ->and($authority->source_department_id)->toBeNull();

    expect(DocumentTypeAuthority::count())->toBe(1);
});

test('granting the same role to the same user twice is idempotent', function () {
    $user = User::factory()->create();

    $this->service->grantToUser($this->documentType, $user, DocumentAuthorityRole::Reviewer, $this->grantedBy);
    $this->service->grantToUser($this->documentType, $user, DocumentAuthorityRole::Reviewer, $this->grantedBy);

    expect(DocumentTypeAuthority::count())->toBe(1);
});

test('a user can hold two different roles on the same document type', function () {
    $user = User::factory()->create();

    $this->service->grantToUser($this->documentType, $user, DocumentAuthorityRole::Author, $this->grantedBy);
    $this->service->grantToUser($this->documentType, $user, DocumentAuthorityRole::Reviewer, $this->grantedBy);

    expect(DocumentTypeAuthority::count())->toBe(2);
});

test('granting to a department resolves current employees to individual, concrete grants', function () {
    $department = Department::create(['code' => 'QA', 'name' => 'Quality', 'type' => 'main']);

    $withAccount1 = User::factory()->create();
    $withAccount2 = User::factory()->create();

    $employee1 = Employee::create(['code' => 'E-1', 'department_id' => $department->id]);
    $employee1->account()->save($withAccount1);

    $employee2 = Employee::create(['code' => 'E-2', 'department_id' => $department->id]);
    $employee2->account()->save($withAccount2);

    // An employee with no linked user account must be skipped, not crash the grant.
    Employee::create(['code' => 'E-3', 'department_id' => $department->id]);

    $granted = $this->service->grantToDepartment($this->documentType, $department, DocumentAuthorityRole::Viewer, $this->grantedBy);

    expect($granted)->toHaveCount(2);
    expect(DocumentTypeAuthority::count())->toBe(2);

    $rows = DocumentTypeAuthority::all();
    expect($rows->pluck('user_id')->sort()->values()->all())->toBe(collect([$withAccount1->id, $withAccount2->id])->sort()->values()->all());
    expect($rows->pluck('source_department_id')->unique()->all())->toBe([$department->id]);
});

test('a department grant is a one-time copy, not a live sync', function () {
    $department = Department::create(['code' => 'QA', 'name' => 'Quality', 'type' => 'main']);

    $existingUser = User::factory()->create();
    $existingEmployee = Employee::create(['code' => 'E-1', 'department_id' => $department->id]);
    $existingEmployee->account()->save($existingUser);

    $this->service->grantToDepartment($this->documentType, $department, DocumentAuthorityRole::Viewer, $this->grantedBy);

    // A new hire joins the department after the bulk grant ran.
    $newUser = User::factory()->create();
    $newEmployee = Employee::create(['code' => 'E-2', 'department_id' => $department->id]);
    $newEmployee->account()->save($newUser);

    expect(DocumentTypeAuthority::count())->toBe(1);
    expect($newUser->fresh()->hasDocumentAuthority($this->documentType, DocumentAuthorityRole::Viewer))->toBeFalse();
});

test('revoking soft-deletes the authority and records who revoked it', function () {
    $user = User::factory()->create();
    $revokedBy = User::factory()->create();

    $authority = $this->service->grantToUser($this->documentType, $user, DocumentAuthorityRole::Approver, $this->grantedBy);

    $this->service->revoke($authority, $revokedBy);

    expect(DocumentTypeAuthority::count())->toBe(0)
        ->and(DocumentTypeAuthority::withTrashed()->count())->toBe(1);

    $trashed = DocumentTypeAuthority::withTrashed()->first();
    expect($trashed->revoked_by)->toBe($revokedBy->id)
        ->and($trashed->deleted_at)->not->toBeNull();

    expect($user->fresh()->hasDocumentAuthority($this->documentType, DocumentAuthorityRole::Approver))->toBeFalse();
});
