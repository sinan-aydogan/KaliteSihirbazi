<?php

use App\Enums\Document\DocumentAuthorityRole;
use App\Enums\Document\DocumentVersionStatus;
use App\Models\Department;
use App\Models\Document\Document;
use App\Models\Document\DocumentType;
use App\Models\Document\DocumentTypeAuthority;
use App\Models\User;

function grantDocumentAuthority(App\Models\Document\DocumentType $documentType, App\Models\User $user, DocumentAuthorityRole $role): void
{
    DocumentTypeAuthority::create([
        'document_type_id' => $documentType->id,
        'user_id' => $user->id,
        'role' => $role,
        'granted_by' => $user->id,
    ]);
}

function versionInStatus(string $status): App\Models\Document\DocumentVersion
{
    $department = Department::create(['code' => 'QA-'.uniqid(), 'name' => 'Quality', 'type' => 'main']);
    $documentType = DocumentType::create(['code' => 'PR-'.uniqid(), 'name' => 'Procedure']);
    $creator = User::factory()->create();

    $document = Document::create([
        'code' => 'DOC-'.uniqid(),
        'name' => 'Quality Manual',
        'department_id' => $department->id,
        'document_type_id' => $documentType->id,
        'creator_id' => $creator->id,
        'publishing_status' => 'draft',
    ]);

    return $document->versions()->create([
        'revised_by' => $creator->id,
        'version' => 1,
        'status' => $status,
    ]);
}

test('an author can submit their draft version for review', function () {
    $version = versionInStatus(DocumentVersionStatus::Draft->value);
    $author = User::factory()->create();
    grantDocumentAuthority($version->document->documentType, $author, DocumentAuthorityRole::Author);

    $this->actingAs($author)->post(route('document-version.submit', $version))->assertSessionHasNoErrors();

    expect($version->fresh()->status)->toBe(DocumentVersionStatus::InReview);
});

test('a non-author cannot submit a version for review', function () {
    $version = versionInStatus(DocumentVersionStatus::Draft->value);
    $stranger = User::factory()->create();

    $this->actingAs($stranger)->post(route('document-version.submit', $version))->assertForbidden();

    expect($version->fresh()->status)->toBe(DocumentVersionStatus::Draft);
});

test('a reviewer can approve the review, moving the version to pending approval', function () {
    $version = versionInStatus(DocumentVersionStatus::InReview->value);
    $reviewer = User::factory()->create();
    grantDocumentAuthority($version->document->documentType, $reviewer, DocumentAuthorityRole::Reviewer);

    $this->actingAs($reviewer)->post(route('document-version.review', $version), [
        'approved' => true,
    ])->assertSessionHasNoErrors();

    expect($version->fresh()->status)->toBe(DocumentVersionStatus::PendingApproval);
});

test('reviewing requires the approved field', function () {
    $version = versionInStatus(DocumentVersionStatus::InReview->value);
    $reviewer = User::factory()->create();
    grantDocumentAuthority($version->document->documentType, $reviewer, DocumentAuthorityRole::Reviewer);

    $this->actingAs($reviewer)->post(route('document-version.review', $version), [])
        ->assertSessionHasErrors('approved');
});

test('an approver can approve a pending version', function () {
    $version = versionInStatus(DocumentVersionStatus::PendingApproval->value);
    $approver = User::factory()->create();
    grantDocumentAuthority($version->document->documentType, $approver, DocumentAuthorityRole::Approver);

    $this->actingAs($approver)->post(route('document-version.approve', $version))->assertSessionHasNoErrors();

    expect($version->fresh()->status)->toBe(DocumentVersionStatus::Approved);
});

test('a reviewer cannot approve (only an approver may)', function () {
    $version = versionInStatus(DocumentVersionStatus::PendingApproval->value);
    $reviewer = User::factory()->create();
    grantDocumentAuthority($version->document->documentType, $reviewer, DocumentAuthorityRole::Reviewer);

    $this->actingAs($reviewer)->post(route('document-version.approve', $version))->assertForbidden();
});

test('rejecting requires a reason', function () {
    $version = versionInStatus(DocumentVersionStatus::InReview->value);
    $reviewer = User::factory()->create();
    grantDocumentAuthority($version->document->documentType, $reviewer, DocumentAuthorityRole::Reviewer);

    $this->actingAs($reviewer)->post(route('document-version.reject', $version), [])
        ->assertSessionHasErrors('reason');
});

test('a reviewer can reject an in-review version with a reason', function () {
    $version = versionInStatus(DocumentVersionStatus::InReview->value);
    $reviewer = User::factory()->create();
    grantDocumentAuthority($version->document->documentType, $reviewer, DocumentAuthorityRole::Reviewer);

    $this->actingAs($reviewer)->post(route('document-version.reject', $version), [
        'reason' => 'incomplete',
    ])->assertSessionHasNoErrors();

    expect($version->fresh()->status)->toBe(DocumentVersionStatus::Rejected);
});

test('a user with a pending read acknowledgment can acknowledge it', function () {
    $version = versionInStatus(DocumentVersionStatus::Approved->value);
    $reader = User::factory()->create();
    $version->readAcknowledgments()->create(['user_id' => $reader->id]);

    $this->actingAs($reader)->post(route('document-version.acknowledge', $version))->assertSessionHasNoErrors();

    expect($version->readAcknowledgments()->where('user_id', $reader->id)->first()->acknowledged_at)->not->toBeNull();
});

test('a user with no assigned read acknowledgment cannot acknowledge', function () {
    $version = versionInStatus(DocumentVersionStatus::Approved->value);
    $stranger = User::factory()->create();

    $this->actingAs($stranger)->post(route('document-version.acknowledge', $version))->assertForbidden();
});

test('a global admin attempting an invalid transition gets a graceful error instead of a crash', function () {
    \Spatie\Permission\Models\Role::findOrCreate('Sistem Yöneticisi');
    $admin = User::factory()->create();
    $admin->assignRole('Sistem Yöneticisi');

    // The policy's admin bypass skips the per-ability state check, but the
    // workflow service still refuses an already-approved version's submit.
    $version = versionInStatus(DocumentVersionStatus::Approved->value);

    $this->actingAs($admin)->post(route('document-version.submit', $version))
        ->assertRedirect()
        ->assertSessionHas('message.type', 'danger');

    expect($version->fresh()->status)->toBe(DocumentVersionStatus::Approved);
});
