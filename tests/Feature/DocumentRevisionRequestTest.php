<?php

use App\Enums\Document\DocumentAuthorityRole;
use App\Enums\Document\DocumentRevisionRequestStatus;
use App\Models\Department;
use App\Models\Document\Document;
use App\Models\Document\DocumentRevisionRequest;
use App\Models\Document\DocumentType;
use App\Models\Document\DocumentTypeAuthority;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

beforeEach(function () {
    Storage::fake('public');
    Setting::create(['code' => 'document_naming_rule', 'module' => 'document', 'type' => 'string', 'value' => 'auto']);
    $this->department = Department::create(['code' => 'QA', 'name' => 'Quality', 'type' => 'main']);
    $this->documentType = DocumentType::create(['code' => 'PROC', 'name' => 'Procedure']);
    $this->creator = User::factory()->create();
    $this->document = Document::create([
        'code' => 'QA.PROC.1',
        'name' => 'Quality Manual',
        'department_id' => $this->department->id,
        'document_type_id' => $this->documentType->id,
        'creator_id' => $this->creator->id,
        'publishing_status' => 'draft',
    ]);
    $this->document->addMediaFromString('dummy contents')->usingFileName('manual.pdf')->toMediaCollection('document');
});

test('anyone with view access can request a revision, even without author rights', function () {
    $viewer = User::factory()->create();
    DocumentTypeAuthority::create([
        'document_type_id' => $this->documentType->id,
        'user_id' => $viewer->id,
        'role' => DocumentAuthorityRole::Viewer,
        'granted_by' => $this->creator->id,
    ]);

    $this->actingAs($viewer)->post(route('document-revision-request.store', $this->document), [
        'reason' => 'Kod referansları güncel değil.',
    ])->assertSessionHasNoErrors()->assertRedirect();

    $request = DocumentRevisionRequest::where('document_id', $this->document->id)->firstOrFail();
    expect($request->status)->toBe(DocumentRevisionRequestStatus::Pending);
    expect($request->requested_by)->toBe($viewer->id);
});

test('a stranger with no access cannot request a revision', function () {
    $stranger = User::factory()->create();

    $this->actingAs($stranger)->post(route('document-revision-request.store', $this->document), [
        'reason' => 'irrelevant',
    ])->assertForbidden();
});

test('an author can accept a revision request', function () {
    $author = User::factory()->create();
    DocumentTypeAuthority::create([
        'document_type_id' => $this->documentType->id,
        'user_id' => $author->id,
        'role' => DocumentAuthorityRole::Author,
        'granted_by' => $this->creator->id,
    ]);
    $request = DocumentRevisionRequest::create([
        'document_id' => $this->document->id,
        'requested_by' => $this->creator->id,
        'reason' => 'update needed',
    ]);

    $this->actingAs($author)->post(route('document-revision-request.accept', $request))->assertSessionHasNoErrors();

    expect($request->fresh()->status)->toBe(DocumentRevisionRequestStatus::Accepted);
    expect($request->fresh()->resolved_by)->toBe($author->id);
});

test('a reviewer without author or approver rights cannot resolve a revision request', function () {
    $reviewer = User::factory()->create();
    DocumentTypeAuthority::create([
        'document_type_id' => $this->documentType->id,
        'user_id' => $reviewer->id,
        'role' => DocumentAuthorityRole::Reviewer,
        'granted_by' => $this->creator->id,
    ]);
    $request = DocumentRevisionRequest::create([
        'document_id' => $this->document->id,
        'requested_by' => $this->creator->id,
        'reason' => 'update needed',
    ]);

    $this->actingAs($reviewer)->post(route('document-revision-request.accept', $request))->assertForbidden();
});

test('rejecting a revision request requires a note', function () {
    $author = User::factory()->create();
    DocumentTypeAuthority::create([
        'document_type_id' => $this->documentType->id,
        'user_id' => $author->id,
        'role' => DocumentAuthorityRole::Author,
        'granted_by' => $this->creator->id,
    ]);
    $request = DocumentRevisionRequest::create([
        'document_id' => $this->document->id,
        'requested_by' => $this->creator->id,
        'reason' => 'update needed',
    ]);

    $this->actingAs($author)->post(route('document-revision-request.reject', $request), [])
        ->assertSessionHasErrors('note');

    $this->actingAs($author)->post(route('document-revision-request.reject', $request), [
        'note' => 'Zaten güncel.',
    ])->assertSessionHasNoErrors();

    expect($request->fresh()->status)->toBe(DocumentRevisionRequestStatus::Rejected);
});

test('accepting an already-resolved request is a graceful no-op error, not a crash', function () {
    $author = User::factory()->create();
    DocumentTypeAuthority::create([
        'document_type_id' => $this->documentType->id,
        'user_id' => $author->id,
        'role' => DocumentAuthorityRole::Author,
        'granted_by' => $this->creator->id,
    ]);
    $request = DocumentRevisionRequest::create([
        'document_id' => $this->document->id,
        'requested_by' => $this->creator->id,
        'reason' => 'update needed',
        'status' => DocumentRevisionRequestStatus::Rejected,
        'resolved_by' => $author->id,
        'resolved_at' => now(),
        'resolution_note' => 'already handled',
    ]);

    $this->actingAs($author)->post(route('document-revision-request.accept', $request))
        ->assertRedirect()
        ->assertSessionHas('message.type', 'danger');

    expect($request->fresh()->status)->toBe(DocumentRevisionRequestStatus::Rejected);
});
