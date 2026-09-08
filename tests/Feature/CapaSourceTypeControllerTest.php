<?php

use App\Models\CapaSourceType;
use App\Models\User;

test('an authenticated user can list capa source types', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('capa-source-type.index'))
        ->assertOk();
});

test('a user can create a custom capa source type', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('capa-source-type.store'), ['name' => 'Yönetim Gözden Geçirmesi'])
        ->assertSessionHasNoErrors();

    $type = CapaSourceType::latest('id')->first();

    expect($type->name)->toBe('Yönetim Gözden Geçirmesi')
        ->and($type->is_protected)->toBeFalse();
});

test('a protected capa source type cannot be deleted', function () {
    $user = User::factory()->create();
    $type = CapaSourceType::where('key', 'internal')->firstOrFail();

    $this->actingAs($user)->delete(route('capa-source-type.destroy', $type));

    expect(CapaSourceType::find($type->id))->not->toBeNull();
});

test('a capa source type in use cannot be deleted', function () {
    $user = User::factory()->create();
    $type = CapaSourceType::create(['key' => 'management_review', 'name' => 'Yönetim Gözden Geçirmesi', 'is_protected' => false]);
    $type->capas()->create([
        'title' => 'Test',
        'type' => 'corrective',
        'description' => 'Açıklama',
        'status' => 'open',
        'opened_by_id' => $user->id,
        'responsible_id' => $user->id,
        'due_date' => now()->addWeek(),
    ]);

    $this->actingAs($user)->delete(route('capa-source-type.destroy', $type));

    expect(CapaSourceType::find($type->id))->not->toBeNull();
});

test('an unused custom capa source type can be deleted', function () {
    $user = User::factory()->create();
    $type = CapaSourceType::create(['key' => 'management_review', 'name' => 'Yönetim Gözden Geçirmesi', 'is_protected' => false]);

    $this->actingAs($user)->delete(route('capa-source-type.destroy', $type));

    expect(CapaSourceType::find($type->id))->toBeNull();
});
