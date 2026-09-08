<?php

use App\Models\RiskHazardClass;
use App\Models\User;

test('an authenticated user can list risk hazard classes', function () {
    $user = User::factory()->create();
    RiskHazardClass::create(['key' => 'physical', 'name' => 'Fiziksel', 'is_protected' => true]);

    $this->actingAs($user)
        ->get(route('risk-hazard-class.index'))
        ->assertOk();
});

test('a user can create a custom risk hazard class', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('risk-hazard-class.store'), ['name' => 'Radyolojik'])
        ->assertSessionHasNoErrors();

    $hazardClass = RiskHazardClass::first();

    expect($hazardClass->name)->toBe('Radyolojik')
        ->and($hazardClass->is_protected)->toBeFalse();
});

test('a protected risk hazard class cannot be deleted', function () {
    $user = User::factory()->create();
    $hazardClass = RiskHazardClass::create(['key' => 'physical', 'name' => 'Fiziksel', 'is_protected' => true]);

    $this->actingAs($user)->delete(route('risk-hazard-class.destroy', $hazardClass));

    expect(RiskHazardClass::find($hazardClass->id))->not->toBeNull();
});

test('a custom risk hazard class without risks can be deleted', function () {
    $user = User::factory()->create();
    $hazardClass = RiskHazardClass::create(['key' => 'radiological', 'name' => 'Radyolojik', 'is_protected' => false]);

    $this->actingAs($user)->delete(route('risk-hazard-class.destroy', $hazardClass));

    expect(RiskHazardClass::find($hazardClass->id))->toBeNull();
});
