<?php

use App\Models\Document\Document;
use App\Models\Tag\ModuleTagType;
use App\Models\Tag\Tag;
use App\Models\Tag\TagType;
use App\Services\Tag\TagService;

beforeEach(function () {
    $this->tagService = app(TagService::class);
});

test('creating a tag is idempotent by type and slug', function () {
    $type = TagType::create(['key' => 'standard', 'name' => 'Standart']);

    $first = $this->tagService->createTag($type, 'ISO 9001:2015');
    $second = $this->tagService->createTag($type, 'ISO 9001:2015');

    expect($second->id)->toBe($first->id);
    expect(Tag::count())->toBe(1);
});

test('the same tag name may exist independently under two different types', function () {
    $standard = TagType::create(['key' => 'standard', 'name' => 'Standart']);
    $topic = TagType::create(['key' => 'topic', 'name' => 'Konu']);

    $this->tagService->createTag($standard, 'Kalite');
    $this->tagService->createTag($topic, 'Kalite');

    expect(Tag::count())->toBe(2);
});

test('enabling tag types for a module is scoped to that module only', function () {
    $standard = TagType::create(['key' => 'standard', 'name' => 'Standart']);
    $topic = TagType::create(['key' => 'topic', 'name' => 'Konu']);

    $this->tagService->setEnabledTypesForModule('document', [$standard->id, $topic->id]);
    $this->tagService->setEnabledTypesForModule('capa', [$standard->id]);

    expect($this->tagService->enabledTypeIdsFor('document'))->toEqualCanonicalizing([$standard->id, $topic->id]);
    expect($this->tagService->enabledTypeIdsFor('capa'))->toEqualCanonicalizing([$standard->id]);
});

test('re-setting a module\'s enabled tag types replaces the previous selection', function () {
    $standard = TagType::create(['key' => 'standard', 'name' => 'Standart']);
    $topic = TagType::create(['key' => 'topic', 'name' => 'Konu']);

    $this->tagService->setEnabledTypesForModule('document', [$standard->id, $topic->id]);
    $this->tagService->setEnabledTypesForModule('document', [$topic->id]);

    expect($this->tagService->enabledTypeIdsFor('document'))->toEqualCanonicalizing([$topic->id]);
    expect(ModuleTagType::where('module_key', 'document')->count())->toBe(1);
});

test('syncing tags on a taggable model replaces its previous tag set', function () {
    $type = TagType::create(['key' => 'standard', 'name' => 'Standart']);
    $tagA = $this->tagService->createTag($type, 'ISO 9001');
    $tagB = $this->tagService->createTag($type, 'ISO 14001');

    $document = Document::create([
        'code' => 'DOC-1',
        'name' => 'Manual',
        'department_id' => \App\Models\Department::create(['code' => 'QA', 'name' => 'Quality', 'type' => 'main'])->id,
        'document_type_id' => \App\Models\Document\DocumentType::create(['code' => 'PROC', 'name' => 'Procedure'])->id,
        'creator_id' => \App\Models\User::factory()->create()->id,
        'publishing_status' => 'draft',
    ]);

    $this->tagService->syncTags($document, [$tagA->id, $tagB->id]);
    expect($document->tags()->pluck('tags.id')->all())->toEqualCanonicalizing([$tagA->id, $tagB->id]);

    $this->tagService->syncTags($document, [$tagA->id]);
    expect($document->fresh()->tags()->pluck('tags.id')->all())->toEqualCanonicalizing([$tagA->id]);
});
