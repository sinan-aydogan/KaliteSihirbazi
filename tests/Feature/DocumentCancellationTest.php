<?php

use App\Enums\Document\DocumentAuthorityRole;
use App\Enums\Document\DocumentVersionStatus;
use App\Models\Department;
use App\Models\Document\Document;
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
        'name' => 'Old Manual',
        'department_id' => $this->department->id,
        'document_type_id' => $this->documentType->id,
        'creator_id' => $this->creator->id,
        'publishing_status' => 'published',
    ]);
    $this->document->addMediaFromString('dummy contents')->usingFileName('manual.pdf')->toMediaCollection('document');
    $this->approvedVersion = $this->document->versions()->create([
        'revised_by' => $this->creator->id,
        'version' => 1,
        'status' => DocumentVersionStatus::Approved,
    ]);

    $this->approver = User::factory()->create();
    DocumentTypeAuthority::create([
        'document_type_id' => $this->documentType->id,
        'user_id' => $this->approver->id,
        'role' => DocumentAuthorityRole::Approver,
        'granted_by' => $this->creator->id,
    ]);
});

test('an approver can cancel a document without a replacement', function () {
    $this->actingAs($this->approver)->post(route('document.cancel', $this->document), [
        'reason' => 'Süreç kaldırıldı.',
    ])->assertSessionHasNoErrors()->assertRedirect();

    $this->document->refresh();
    expect($this->document->isCancelled())->toBeTrue();
    expect($this->document->cancelled_by)->toBe($this->approver->id);
    expect($this->document->publishing_status)->toBe('cancelled');
    expect($this->document->superseded_by_document_id)->toBeNull();
    expect($this->approvedVersion->fresh()->status)->toBe(DocumentVersionStatus::Obsolete);
});

test('an approver can cancel a document in favor of a replacement document', function () {
    $replacement = Document::create([
        'code' => 'QA.PROC.2',
        'name' => 'New Merged Manual',
        'department_id' => $this->department->id,
        'document_type_id' => $this->documentType->id,
        'creator_id' => $this->creator->id,
        'publishing_status' => 'draft',
    ]);

    $this->actingAs($this->approver)->post(route('document.cancel', $this->document), [
        'reason' => 'Yeni birleşik prosedürle değiştirildi.',
        'superseded_by_document_id' => $replacement->id,
    ])->assertSessionHasNoErrors();

    expect($this->document->fresh()->superseded_by_document_id)->toBe($replacement->id);
    expect($replacement->fresh()->supersedes()->pluck('id')->all())->toEqual([$this->document->id]);
});

test('a document cannot be marked as superseded by itself', function () {
    $this->actingAs($this->approver)->post(route('document.cancel', $this->document), [
        'reason' => 'invalid',
        'superseded_by_document_id' => $this->document->id,
    ])->assertSessionHasErrors('superseded_by_document_id');
});

test('an author without approver rights cannot cancel a document', function () {
    $author = User::factory()->create();
    DocumentTypeAuthority::create([
        'document_type_id' => $this->documentType->id,
        'user_id' => $author->id,
        'role' => DocumentAuthorityRole::Author,
        'granted_by' => $this->creator->id,
    ]);

    $this->actingAs($author)->post(route('document.cancel', $this->document), [
        'reason' => 'irrelevant',
    ])->assertForbidden();

    expect($this->document->fresh()->isCancelled())->toBeFalse();
});

test('an already-cancelled document cannot be cancelled again', function () {
    $this->document->update(['cancelled_at' => now(), 'cancelled_by' => $this->approver->id, 'publishing_status' => 'cancelled']);

    $this->actingAs($this->approver)->post(route('document.cancel', $this->document), [
        'reason' => 'ikinci deneme',
    ])->assertForbidden();
});

test('the document detail response exposes cancellation and supersession info', function () {
    $replacement = Document::create([
        'code' => 'QA.PROC.2',
        'name' => 'New Merged Manual',
        'department_id' => $this->department->id,
        'document_type_id' => $this->documentType->id,
        'creator_id' => $this->creator->id,
        'publishing_status' => 'draft',
    ]);

    $this->actingAs($this->approver)->post(route('document.cancel', $this->document), [
        'reason' => 'Yeni birleşik prosedürle değiştirildi.',
        'superseded_by_document_id' => $replacement->id,
    ]);

    $response = $this->actingAs($this->approver)->get(route('document.show', $this->document));

    $response->assertOk()
        ->assertJsonPath('cancellation_reason', 'Yeni birleşik prosedürle değiştirildi.')
        ->assertJsonPath('superseded_by_document.name', 'New Merged Manual');
});
