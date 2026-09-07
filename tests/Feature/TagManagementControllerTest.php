<?php

use App\Models\Tag\Tag;
use App\Models\Tag\TagType;
use App\Models\User;

function actingAsGlobalAdmin(): User
{
    \Spatie\Permission\Models\Role::findOrCreate('Sistem Yöneticisi');
    $admin = User::factory()->create();
    $admin->assignRole('Sistem Yöneticisi');

    return $admin;
}

test('a global admin can create, update and delete a tag type', function () {
    $admin = actingAsGlobalAdmin();

    $this->actingAs($admin)->post(route('tag-type.store'), [
        'key' => 'standard',
        'name' => 'Standart',
    ])->assertSessionHasNoErrors();

    $type = TagType::where('key', 'standard')->firstOrFail();

    $this->actingAs($admin)->put(route('tag-type.update', $type), [
        'key' => 'standard',
        'name' => 'Standart (güncel)',
    ])->assertSessionHasNoErrors();

    expect($type->fresh()->name)->toBe('Standart (güncel)');

    $this->actingAs($admin)->delete(route('tag-type.destroy', $type))->assertSessionHasNoErrors();

    expect(TagType::find($type->id))->toBeNull();
});

test('a non-admin cannot manage tag types', function () {
    $user = User::factory()->create();

    $this->actingAs($user)->post(route('tag-type.store'), [
        'key' => 'standard',
        'name' => 'Standart',
    ])->assertForbidden();

    expect(TagType::count())->toBe(0);
});

test('a global admin can create and delete a tag under a type', function () {
    $admin = actingAsGlobalAdmin();
    $type = TagType::create(['key' => 'standard', 'name' => 'Standart']);

    $this->actingAs($admin)->post(route('tag.store'), [
        'tag_type_id' => $type->id,
        'name' => 'ISO 9001:2015',
    ])->assertSessionHasNoErrors();

    $tag = Tag::where('tag_type_id', $type->id)->firstOrFail();
    expect($tag->slug)->toBe('iso-9001-2015');

    $this->actingAs($admin)->delete(route('tag.destroy', $tag))->assertSessionHasNoErrors();

    expect(Tag::find($tag->id))->toBeNull();
});

test('deleting a tag type cascades to its tags', function () {
    $admin = actingAsGlobalAdmin();
    $type = TagType::create(['key' => 'standard', 'name' => 'Standart']);
    $tag = Tag::create(['tag_type_id' => $type->id, 'name' => 'ISO 9001', 'slug' => 'iso-9001']);

    $this->actingAs($admin)->delete(route('tag-type.destroy', $type));

    expect(Tag::find($tag->id))->toBeNull();
});
