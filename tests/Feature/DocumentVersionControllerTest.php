<?php

use App\Enums\Document\DocumentAuthorityRole;
use App\Enums\Document\DocumentRevisionRequestStatus;
use App\Enums\Document\DocumentVersionStatus;
use App\Models\Department;
use App\Models\Document\Document;
use App\Models\Document\DocumentRevisionRequest;
use App\Models\Document\DocumentType;
use App\Models\Document\DocumentTypeAuthority;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Http\UploadedFile;
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
    $this->document->versions()->create([
        'revised_by' => $this->creator->id,
        'version' => 1,
        'status' => DocumentVersionStatus::Approved,
    ]);

    $this->author = User::factory()->create();
    DocumentTypeAuthority::create([
        'document_type_id' => $this->documentType->id,
        'user_id' => $this->author->id,
        'role' => DocumentAuthorityRole::Author,
        'granted_by' => $this->creator->id,
    ]);
});

test('an author can submit a new revision for an existing document', function () {
    $file = UploadedFile::fake()->create('manual-v2.pdf', 50, 'application/pdf');

    $this->actingAs($this->author)->post(route('document-version.store', $this->document), [
        'file' => $file,
        'revision_reason' => 'Kapsam güncellendi',
    ])->assertSessionHasNoErrors()->assertRedirect();

    expect($this->document->versions()->count())->toBe(2);
    $newVersion = $this->document->versions()->latest('version')->first();
    expect($newVersion->version)->toBe(2);
    expect($newVersion->status)->toBe(DocumentVersionStatus::Draft);

    $this->actingAs($this->author)->get(route('document.show', $this->document))->assertOk();
});

test('a non-author cannot submit a new revision', function () {
    $stranger = User::factory()->create();

    $this->actingAs($stranger)->post(route('document-version.store', $this->document), [
        'revision_reason' => 'nope',
    ])->assertForbidden();

    expect($this->document->versions()->count())->toBe(1);
});

test('a new revision cannot be started while one is already in flight', function () {
    $this->document->versions()->create([
        'revised_by' => $this->author->id,
        'version' => 2,
        'status' => DocumentVersionStatus::Draft,
    ]);

    $this->actingAs($this->author)->post(route('document-version.store', $this->document), [
        'revision_reason' => 'ikinci deneme',
    ])->assertRedirect()->assertSessionHas('message.type', 'danger');

    expect($this->document->versions()->count())->toBe(2);
});

test('a new revision cannot be started on a cancelled document', function () {
    $this->document->update(['publishing_status' => 'cancelled', 'cancelled_at' => now(), 'cancelled_by' => $this->creator->id]);

    $this->actingAs($this->author)->post(route('document-version.store', $this->document), [
        'revision_reason' => 'irrelevant',
    ])->assertForbidden();
});

test('submitting a new revision completes the accepted revision request it fulfills', function () {
    $revisionRequest = DocumentRevisionRequest::create([
        'document_id' => $this->document->id,
        'requested_by' => $this->creator->id,
        'reason' => 'update needed',
        'status' => DocumentRevisionRequestStatus::Accepted,
        'resolved_by' => $this->author->id,
        'resolved_at' => now(),
    ]);

    $this->actingAs($this->author)->post(route('document-version.store', $this->document), [
        'revision_reason' => 'Talebi karşılıyorum',
        'revision_request_id' => $revisionRequest->id,
    ])->assertSessionHasNoErrors();

    $revisionRequest->refresh();
    expect($revisionRequest->status)->toBe(DocumentRevisionRequestStatus::Completed);
    expect($revisionRequest->resulting_version_id)->toBe($this->document->versions()->latest('version')->first()->id);
});
