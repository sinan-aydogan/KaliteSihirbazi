<?php

use App\Models\ProblemSourceType;
use App\Models\User;

test('an authenticated user can list problem source types', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('problem-source-type.index'))
        ->assertOk();
});

test('a user can create a custom problem source type', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('problem-source-type.store'), ['name' => 'Kalibrasyon Sapması'])
        ->assertSessionHasNoErrors();

    $type = ProblemSourceType::latest('id')->first();

    expect($type->name)->toBe('Kalibrasyon Sapması')
        ->and($type->is_protected)->toBeFalse();
});

test('a protected problem source type cannot be deleted', function () {
    $user = User::factory()->create();
    $type = ProblemSourceType::where('key', 'audit_finding')->firstOrFail();

    $this->actingAs($user)->delete(route('problem-source-type.destroy', $type));

    expect(ProblemSourceType::find($type->id))->not->toBeNull();
});

test('a problem source type in use cannot be deleted', function () {
    $user = User::factory()->create();
    $type = ProblemSourceType::create(['key' => 'calibration_drift', 'name' => 'Kalibrasyon Sapması', 'is_protected' => false]);
    $type->problems()->create([
        'title' => 'Test',
        'description' => 'Açıklama',
        'severity' => 'low',
        'status' => 'open',
        'detected_by_id' => $user->id,
        'detected_date' => now(),
    ]);

    $this->actingAs($user)->delete(route('problem-source-type.destroy', $type));

    expect(ProblemSourceType::find($type->id))->not->toBeNull();
});

test('an unused custom problem source type can be deleted', function () {
    $user = User::factory()->create();
    $type = ProblemSourceType::create(['key' => 'calibration_drift', 'name' => 'Kalibrasyon Sapması', 'is_protected' => false]);

    $this->actingAs($user)->delete(route('problem-source-type.destroy', $type));

    expect(ProblemSourceType::find($type->id))->toBeNull();
});
