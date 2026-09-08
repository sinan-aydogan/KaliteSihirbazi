<?php

use App\Models\AuditType;
use App\Models\User;

test('an authenticated user can list audit types', function () {
    $user = User::factory()->create();
    AuditType::create(['key' => 'internal', 'name' => 'İç Denetim', 'direction' => 'internal', 'is_protected' => true]);

    $this->actingAs($user)
        ->get(route('audit-type.index'))
        ->assertOk();
});

test('a user can create a custom audit type', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('audit-type.store'), [
            'name' => 'Gümrük Denetimi',
            'direction' => 'external',
        ])
        ->assertSessionHasNoErrors();

    $type = AuditType::first();

    expect($type->name)->toBe('Gümrük Denetimi')
        ->and($type->is_protected)->toBeFalse()
        ->and($type->key)->toBe('gumruk_denetimi');
});

test('a protected audit type cannot have its direction changed', function () {
    $user = User::factory()->create();
    $type = AuditType::create(['key' => 'internal', 'name' => 'İç Denetim', 'direction' => 'internal', 'is_protected' => true]);

    $this->actingAs($user)
        ->put(route('audit-type.update', $type), ['name' => 'İç Denetim Programı', 'direction' => 'external']);

    expect($type->fresh()->name)->toBe('İç Denetim Programı')
        ->and($type->fresh()->direction)->toBe('internal');
});

test('a protected audit type cannot be deleted', function () {
    $user = User::factory()->create();
    $type = AuditType::create(['key' => 'internal', 'name' => 'İç Denetim', 'direction' => 'internal', 'is_protected' => true]);

    $this->actingAs($user)->delete(route('audit-type.destroy', $type));

    expect(AuditType::find($type->id))->not->toBeNull();
});

test('a custom audit type without audits can be deleted', function () {
    $user = User::factory()->create();
    $type = AuditType::create(['key' => 'customs', 'name' => 'Gümrük Denetimi', 'direction' => 'external', 'is_protected' => false]);

    $this->actingAs($user)->delete(route('audit-type.destroy', $type));

    expect(AuditType::find($type->id))->toBeNull();
});
