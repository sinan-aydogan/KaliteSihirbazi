<?php

use App\Enums\Document\DocumentAuthorityRole;
use App\Models\Department;
use App\Models\Document\DocumentType;
use App\Models\Document\DocumentTypeAuthority;
use App\Models\Setting;
use App\Models\Tag\Tag;
use App\Models\Tag\TagType;
use App\Models\User;
use App\Services\Tag\TagService;
use Illuminate\Support\Facades\Storage;

beforeEach(function () {
    Storage::fake('public');
    Setting::create(['code' => 'document_naming_rule', 'module' => 'document', 'type' => 'string', 'value' => 'auto']);
    $this->department = Department::create(['code' => 'QA', 'name' => 'Quality', 'type' => 'main']);
    $this->documentType = DocumentType::create(['code' => 'PROC', 'name' => 'Procedure']);
    $this->author = User::factory()->create();
    DocumentTypeAuthority::create([
        'document_type_id' => $this->documentType->id,
        'user_id' => $this->author->id,
        'role' => DocumentAuthorityRole::Author,
        'granted_by' => $this->author->id,
    ]);

    $this->standardType = TagType::create(['key' => 'standard', 'name' => 'Standart']);
    $this->topicType = TagType::create(['key' => 'topic', 'name' => 'Konu']);
    app(TagService::class)->setEnabledTypesForModule('document', [$this->standardType->id]);

    $this->isoTag = Tag::create(['tag_type_id' => $this->standardType->id, 'name' => 'ISO 9001', 'slug' => 'iso-9001']);
    $this->topicTag = Tag::create(['tag_type_id' => $this->topicType->id, 'name' => 'Kalite', 'slug' => 'kalite']);
});

test('the create form only receives tag types enabled for the document module', function () {
    $response = $this->actingAs($this->author)->get(route('document.index'));

    $tagTypes = $response->getOriginalContent()->getData()['page']['props']['tagTypes'];

    expect($tagTypes)->toHaveCount(1);
    expect($tagTypes[0]['id'])->toBe($this->standardType->id);
});

test('creating a document attaches the selected tags', function () {
    $this->actingAs($this->author)->post(route('document.store'), [
        'name' => 'Quality Manual',
        'department_id' => $this->department->id,
        'document_type_id' => $this->documentType->id,
        'publishing_status' => 'draft',
        'distribution_points' => [],
        'tag_ids' => [$this->isoTag->id],
    ])->assertSessionHasNoErrors()->assertRedirect();

    $document = \App\Models\Document\Document::where('name', 'Quality Manual')->firstOrFail();

    expect($document->tags()->pluck('tags.id')->all())->toEqualCanonicalizing([$this->isoTag->id]);
});

test('the document detail response includes each tag with its type', function () {
    $document = \App\Models\Document\Document::create([
        'code' => 'QA.PROC.1',
        'name' => 'Quality Manual',
        'department_id' => $this->department->id,
        'document_type_id' => $this->documentType->id,
        'creator_id' => $this->author->id,
        'publishing_status' => 'draft',
    ]);
    $document->addMediaFromString('dummy contents')->usingFileName('manual.pdf')->toMediaCollection('document');
    $document->tags()->sync([$this->isoTag->id]);

    $response = $this->actingAs($this->author)->get(route('document.show', $document));

    $response->assertOk()
        ->assertJsonPath('tags.0.name', 'ISO 9001')
        ->assertJsonPath('tags.0.tag_type.name', 'Standart');
});
