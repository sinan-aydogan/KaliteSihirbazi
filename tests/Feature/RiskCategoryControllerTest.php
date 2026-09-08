<?php

use App\Models\RiskCategory;
use App\Models\User;

test('an authenticated user can list risk categories', function () {
    $user = User::factory()->create();
    RiskCategory::create(['key' => 'quality', 'name' => 'Kalite', 'is_protected' => true]);

    $this->actingAs($user)
        ->get(route('risk-category.index'))
        ->assertOk();
});

test('a user can create a custom risk category', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('risk-category.store'), ['name' => 'İtibar'])
        ->assertSessionHasNoErrors();

    $category = RiskCategory::first();

    expect($category->name)->toBe('İtibar')
        ->and($category->is_protected)->toBeFalse();
});

test('a protected risk category cannot be deleted', function () {
    $user = User::factory()->create();
    $category = RiskCategory::create(['key' => 'quality', 'name' => 'Kalite', 'is_protected' => true]);

    $this->actingAs($user)->delete(route('risk-category.destroy', $category));

    expect(RiskCategory::find($category->id))->not->toBeNull();
});

test('a custom risk category without risks can be deleted', function () {
    $user = User::factory()->create();
    $category = RiskCategory::create(['key' => 'reputation', 'name' => 'İtibar', 'is_protected' => false]);

    $this->actingAs($user)->delete(route('risk-category.destroy', $category));

    expect(RiskCategory::find($category->id))->toBeNull();
});
