<?php

use App\Enums\Document\DocumentAuthorityRole;
use App\Enums\Document\DocumentVersionStatus;
use App\Models\Department;
use App\Models\Document\Document;
use App\Models\Document\DocumentActivityLog;
use App\Models\Document\DocumentReadAcknowledgment;
use App\Models\Document\DocumentType;
use App\Models\Document\DocumentTypeAuthority;
use App\Models\User;
use App\Services\Document\DocumentWorkflowService;

function makeDocumentVersion(string $status = 'draft'): App\Models\Document\DocumentVersion
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

beforeEach(function () {
    $this->service = app(DocumentWorkflowService::class);
    $this->actor = User::factory()->create();
});

test('it submits a draft version for review', function () {
    $version = makeDocumentVersion(DocumentVersionStatus::Draft->value);

    $this->service->submitForReview($version, $this->actor);

    expect($version->fresh()->status)->toBe(DocumentVersionStatus::InReview);
    expect(DocumentActivityLog::where('action', 'submitted_for_review')->count())->toBe(1);
});

test('submitting a version that is not in a submittable status throws', function () {
    $version = makeDocumentVersion(DocumentVersionStatus::Approved->value);

    $this->service->submitForReview($version, $this->actor);
})->throws(RuntimeException::class);

test('a review approval moves the version to pending approval', function () {
    $version = makeDocumentVersion(DocumentVersionStatus::InReview->value);

    $this->service->review($version, $this->actor, true, 'looks good');

    $version->refresh();
    expect($version->status)->toBe(DocumentVersionStatus::PendingApproval)
        ->and($version->reviewed_by)->toBe($this->actor->id)
        ->and($version->reviewed_at)->not->toBeNull();
});

test('a review rejection sends the version back to rejected', function () {
    $version = makeDocumentVersion(DocumentVersionStatus::InReview->value);

    $this->service->review($version, $this->actor, false, 'missing section 3');

    expect($version->fresh()->status)->toBe(DocumentVersionStatus::Rejected);
});

test('approving a pending version publishes it and syncs the document status', function () {
    $version = makeDocumentVersion(DocumentVersionStatus::PendingApproval->value);

    $this->service->approve($version, $this->actor);

    $version->refresh();
    expect($version->status)->toBe(DocumentVersionStatus::Approved)
        ->and($version->approved_by)->toBe($this->actor->id)
        ->and($version->published_at)->not->toBeNull();

    expect($version->document->fresh()->publishing_status)->toBe('published');
});

test('approving a new version obsoletes the previously approved version of the same document', function () {
    $firstVersion = makeDocumentVersion(DocumentVersionStatus::Approved->value);
    $firstVersion->update(['status' => DocumentVersionStatus::Approved]);

    $secondVersion = $firstVersion->document->versions()->create([
        'revised_by' => $this->actor->id,
        'version' => 2,
        'status' => DocumentVersionStatus::PendingApproval,
    ]);

    $this->service->approve($secondVersion, $this->actor);

    expect($firstVersion->fresh()->status)->toBe(DocumentVersionStatus::Obsolete);
    expect($secondVersion->fresh()->status)->toBe(DocumentVersionStatus::Approved);
});

test('approving creates read acknowledgments for every document-type authority and distribution point member', function () {
    $version = makeDocumentVersion(DocumentVersionStatus::PendingApproval->value);
    $document = $version->document;

    $viewer = User::factory()->create();
    DocumentTypeAuthority::create([
        'document_type_id' => $document->document_type_id,
        'user_id' => $viewer->id,
        'role' => DocumentAuthorityRole::Viewer,
        'granted_by' => $this->actor->id,
    ]);

    $distributionMember = User::factory()->create();
    $distributionPoint = \App\Models\Document\DistributionPoint::create(['name' => 'Head Office', 'department_id' => $document->department_id]);
    $distributionPoint->users()->attach($distributionMember->id);
    $document->distributionPoints()->attach($distributionPoint->id);

    $this->service->approve($version, $this->actor);

    expect(DocumentReadAcknowledgment::where('document_version_id', $version->id)->where('user_id', $viewer->id)->exists())->toBeTrue();
    expect(DocumentReadAcknowledgment::where('document_version_id', $version->id)->where('user_id', $distributionMember->id)->exists())->toBeTrue();
});

test('rejecting a pending-approval version marks it rejected with a reason logged', function () {
    $version = makeDocumentVersion(DocumentVersionStatus::PendingApproval->value);

    $this->service->reject($version, $this->actor, 'formatting issues');

    expect($version->fresh()->status)->toBe(DocumentVersionStatus::Rejected);
    $log = DocumentActivityLog::where('action', 'rejected')->first();
    expect($log->meta['reason'])->toBe('formatting issues');
});

test('acknowledging records who read the version and when', function () {
    $version = makeDocumentVersion(DocumentVersionStatus::Approved->value);

    $this->service->acknowledge($version, $this->actor);

    $ack = DocumentReadAcknowledgment::where('document_version_id', $version->id)->where('user_id', $this->actor->id)->first();
    expect($ack)->not->toBeNull();
    expect($ack->acknowledged_at)->not->toBeNull();
});
