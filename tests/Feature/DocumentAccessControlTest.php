<?php

use App\Enums\Document\DocumentAuthorityRole;
use App\Models\Department;
use App\Models\Document\Document;
use App\Models\Document\DistributionPoint;
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

test('the creator can view their own document without any explicit authority', function () {
    $this->actingAs($this->creator)->get(route('document.show', $this->document))->assertOk();
});

test('a user with any authority on the document type can view it', function () {
    $viewer = User::factory()->create();
    DocumentTypeAuthority::create([
        'document_type_id' => $this->documentType->id,
        'user_id' => $viewer->id,
        'role' => DocumentAuthorityRole::Viewer,
        'granted_by' => $this->creator->id,
    ]);

    $this->actingAs($viewer)->get(route('document.show', $this->document))->assertOk();
});

test('a member of one of the document distribution points can view it', function () {
    $member = User::factory()->create();
    $distributionPoint = DistributionPoint::create(['name' => 'Head Office', 'department_id' => $this->department->id]);
    $distributionPoint->users()->attach($member->id);
    $this->document->distributionPoints()->attach($distributionPoint->id);

    $this->actingAs($member)->get(route('document.show', $this->document))->assertOk();
});

test('a global admin can view any document', function () {
    \Spatie\Permission\Models\Role::findOrCreate('Kalite Yöneticisi');
    $admin = User::factory()->create();
    $admin->assignRole('Kalite Yöneticisi');

    $this->actingAs($admin)->get(route('document.show', $this->document))->assertOk();
});

test('an unrelated user cannot view the document', function () {
    $stranger = User::factory()->create();

    $this->actingAs($stranger)->get(route('document.show', $this->document))->assertForbidden();
});

test('a user without author authority cannot create a document of that type', function () {
    $stranger = User::factory()->create();

    $this->actingAs($stranger)->post(route('document.store'), [
        'name' => 'New Manual',
        'department_id' => $this->department->id,
        'document_type_id' => $this->documentType->id,
        'publishing_status' => 'draft',
        'distribution_points' => [],
    ])->assertForbidden();
});

test('a user with author authority can create a document of that type', function () {
    $author = User::factory()->create();
    DocumentTypeAuthority::create([
        'document_type_id' => $this->documentType->id,
        'user_id' => $author->id,
        'role' => DocumentAuthorityRole::Author,
        'granted_by' => $this->creator->id,
    ]);

    $this->actingAs($author)->post(route('document.store'), [
        'name' => 'New Manual',
        'department_id' => $this->department->id,
        'document_type_id' => $this->documentType->id,
        'publishing_status' => 'draft',
        'distribution_points' => [],
    ])->assertSessionHasNoErrors()->assertRedirect();

    $document = Document::where('name', 'New Manual')->firstOrFail();
    expect($document->versions()->count())->toBe(1);

    $this->actingAs($author)->get(route('document.show', $document))->assertOk();
});

test('the document detail response includes the creator relation', function () {
    $response = $this->actingAs($this->creator)->get(route('document.show', $this->document));

    $response->assertOk()->assertJsonPath('creator.id', $this->creator->id);
});

test('the document list flags whether the viewer may delete each row', function () {
    $author = User::factory()->create();
    DocumentTypeAuthority::create([
        'document_type_id' => $this->documentType->id,
        'user_id' => $author->id,
        'role' => DocumentAuthorityRole::Viewer,
        'granted_by' => $this->creator->id,
    ]);

    $asCreator = $this->actingAs($this->creator)->get(route('document.index'));
    $asCreator->assertOk();
    expect($asCreator->getOriginalContent()->getData()['page']['props']['tableData']['data'][0]['can_delete'])->toBeFalse();

    DocumentTypeAuthority::create([
        'document_type_id' => $this->documentType->id,
        'user_id' => $this->creator->id,
        'role' => DocumentAuthorityRole::Approver,
        'granted_by' => $this->creator->id,
    ]);

    $asApprover = $this->actingAs($this->creator)->get(route('document.index'));
    $asApprover->assertOk();
    expect($asApprover->getOriginalContent()->getData()['page']['props']['tableData']['data'][0]['can_delete'])->toBeTrue();
});

test('deleting a document requires approver authority, not just author', function () {
    $author = User::factory()->create();
    DocumentTypeAuthority::create([
        'document_type_id' => $this->documentType->id,
        'user_id' => $author->id,
        'role' => DocumentAuthorityRole::Author,
        'granted_by' => $this->creator->id,
    ]);

    $this->actingAs($author)->delete(route('document.destroy', $this->document))->assertForbidden();

    $approver = User::factory()->create();
    DocumentTypeAuthority::create([
        'document_type_id' => $this->documentType->id,
        'user_id' => $approver->id,
        'role' => DocumentAuthorityRole::Approver,
        'granted_by' => $this->creator->id,
    ]);

    $this->actingAs($approver)->delete(route('document.destroy', $this->document))->assertRedirect();

    expect(Document::find($this->document->id))->toBeNull();
});
