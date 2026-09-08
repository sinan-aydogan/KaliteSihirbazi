<?php

use App\Models\Setting;
use App\Models\User;

beforeEach(function () {
    Setting::updateOrCreate(['code' => 'audit_external_requires_internal_first'], ['module' => 'audit', 'type' => 'json', 'value' => json_encode(false)]);
    Setting::updateOrCreate(['code' => 'audit_internal_prerequisite_window_days'], ['module' => 'audit', 'type' => 'json', 'value' => json_encode(365)]);
});

test('an authenticated user can view audit settings', function () {
    $this->actingAs(User::factory()->create())
        ->get(route('audit-setting.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('Modules/Audit/Setting/IndexPage')
        );
});

test('a user can toggle the external-audit prerequisite setting', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('audit-setting.update'), [
            'audit_external_requires_internal_first' => ['value' => true, 'type' => 'json'],
            'audit_internal_prerequisite_window_days' => ['value' => 180, 'type' => 'json'],
        ])
        ->assertSessionHasNoErrors();

    expect(json_decode(Setting::where('code', 'audit_external_requires_internal_first')->value('value')))->toBeTrue()
        ->and(json_decode(Setting::where('code', 'audit_internal_prerequisite_window_days')->value('value')))->toBe(180);
});
