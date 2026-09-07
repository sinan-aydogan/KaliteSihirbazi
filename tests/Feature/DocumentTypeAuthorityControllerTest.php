<?php

use App\Enums\Document\DocumentAuthorityRole;
use App\Models\Department;
use App\Models\Document\DocumentType;
use App\Models\Document\DocumentTypeAuthority;
use App\Models\HumanResources\Employee\Employee;
use App\Models\User;

beforeEach(function () {
    $this->documentType = DocumentType::create(['code' => 'PROC', 'name' => 'Procedure']);
});

function actingAsApprover(App\Models\Document\DocumentType $documentType): App\Models\User
{
    $approver = User::factory()->create();

    DocumentTypeAuthority::create([
        'document_type_id' => $documentType->id,
        'user_id' => $approver->id,
        'role' => DocumentAuthorityRole::Approver,
        'granted_by' => $approver->id,
    ]);

    return $approver;
}

test('an approver can grant a role to a single user', function () {
    $approver = actingAsApprover($this->documentType);
    $target = User::factory()->create();

    $this->actingAs($approver)->post(route('document-type-authority.store', $this->documentType), [
        'user_ids' => [$target->id],
        'role' => DocumentAuthorityRole::Reviewer->value,
    ])->assertSessionHasNoErrors();

    expect(DocumentTypeAuthority::where('user_id', $target->id)->where('role', DocumentAuthorityRole::Reviewer)->exists())->toBeTrue();
});

test('an approver can grant a role to multiple users at once', function () {
    $approver = actingAsApprover($this->documentType);
    $first = User::factory()->create();
    $second = User::factory()->create();

    $this->actingAs($approver)->post(route('document-type-authority.store', $this->documentType), [
        'user_ids' => [$first->id, $second->id],
        'role' => DocumentAuthorityRole::Reviewer->value,
    ])->assertSessionHasNoErrors();

    expect(DocumentTypeAuthority::where('user_id', $first->id)->where('role', DocumentAuthorityRole::Reviewer)->exists())->toBeTrue();
    expect(DocumentTypeAuthority::where('user_id', $second->id)->where('role', DocumentAuthorityRole::Reviewer)->exists())->toBeTrue();
});

test('an approver can grant a role in bulk to a department', function () {
    $approver = actingAsApprover($this->documentType);

    $department = Department::create(['code' => 'QA', 'name' => 'Quality', 'type' => 'main']);
    $user = User::factory()->create();
    $employee = Employee::create(['code' => 'E-1', 'department_id' => $department->id]);
    $employee->account()->save($user);

    $this->actingAs($approver)->post(route('document-type-authority.store', $this->documentType), [
        'department_id' => $department->id,
        'role' => DocumentAuthorityRole::Viewer->value,
    ])->assertSessionHasNoErrors();

    expect(DocumentTypeAuthority::where('user_id', $user->id)->where('role', DocumentAuthorityRole::Viewer)->where('source_department_id', $department->id)->exists())->toBeTrue();
});

test('a user without approver authority cannot manage authorities', function () {
    $plainUser = User::factory()->create();
    $target = User::factory()->create();

    $this->actingAs($plainUser)->post(route('document-type-authority.store', $this->documentType), [
        'user_ids' => [$target->id],
        'role' => DocumentAuthorityRole::Author->value,
    ])->assertForbidden();

    expect(DocumentTypeAuthority::count())->toBe(0);
});

test('a global admin can manage authorities without a per-type grant', function () {
    \Spatie\Permission\Models\Role::findOrCreate('Sistem Yöneticisi');
    $admin = User::factory()->create();
    $admin->assignRole('Sistem Yöneticisi');
    $target = User::factory()->create();

    $this->actingAs($admin)->post(route('document-type-authority.store', $this->documentType), [
        'user_ids' => [$target->id],
        'role' => DocumentAuthorityRole::Author->value,
    ])->assertSessionHasNoErrors();

    expect(DocumentTypeAuthority::where('user_id', $target->id)->exists())->toBeTrue();
});

test('an approver can revoke an authority, which becomes provably soft-deleted', function () {
    $approver = actingAsApprover($this->documentType);
    $target = User::factory()->create();

    $authority = DocumentTypeAuthority::create([
        'document_type_id' => $this->documentType->id,
        'user_id' => $target->id,
        'role' => DocumentAuthorityRole::Viewer,
        'granted_by' => $approver->id,
    ]);

    $this->actingAs($approver)->delete(route('document-type-authority.destroy', $authority));

    expect(DocumentTypeAuthority::count())->toBe(1); // the approver's own grant remains
    expect(DocumentTypeAuthority::withTrashed()->find($authority->id)->revoked_by)->toBe($approver->id);
});
