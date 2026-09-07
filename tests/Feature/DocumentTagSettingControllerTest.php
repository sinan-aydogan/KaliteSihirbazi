<?php

use App\Models\Tag\ModuleTagType;
use App\Models\Tag\TagType;
use App\Models\User;

test('a global admin can view and update which tag types the document module shows', function () {
    \Spatie\Permission\Models\Role::findOrCreate('Kalite Yöneticisi');
    $admin = User::factory()->create();
    $admin->assignRole('Kalite Yöneticisi');

    $standard = TagType::create(['key' => 'standard', 'name' => 'Standart']);
    $topic = TagType::create(['key' => 'topic', 'name' => 'Konu']);

    $this->actingAs($admin)->get(route('document-tag-setting.index'))->assertOk();

    $this->actingAs($admin)->post(route('document-tag-setting.update'), [
        'tag_type_ids' => [$standard->id],
    ])->assertSessionHasNoErrors();

    expect(ModuleTagType::where('module_key', 'document')->pluck('tag_type_id')->all())->toEqualCanonicalizing([$standard->id]);

    $this->actingAs($admin)->post(route('document-tag-setting.update'), [
        'tag_type_ids' => [$standard->id, $topic->id],
    ]);

    expect(ModuleTagType::where('module_key', 'document')->pluck('tag_type_id')->all())->toEqualCanonicalizing([$standard->id, $topic->id]);
});

test('a non-admin cannot change the document module tag settings', function () {
    $user = User::factory()->create();
    $type = TagType::create(['key' => 'standard', 'name' => 'Standart']);

    $this->actingAs($user)->post(route('document-tag-setting.update'), [
        'tag_type_ids' => [$type->id],
    ])->assertForbidden();

    expect(ModuleTagType::count())->toBe(0);
});
