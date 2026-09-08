<?php

use App\Models\Setting;
use App\Models\User;

beforeEach(function () {
    Setting::updateOrCreate(['code' => 'risk_review_required_on_realization'], ['module' => 'risk', 'type' => 'json', 'value' => json_encode(true)]);
    Setting::updateOrCreate(['code' => 'risk_score_thresholds'], ['module' => 'risk', 'type' => 'json', 'value' => json_encode(['medium' => 6, 'high' => 12, 'critical' => 20])]);
});

test('an authenticated user can view risk settings', function () {
    $this->actingAs(User::factory()->create())
        ->get(route('risk-setting.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Modules/Risk/Setting/IndexPage'));
});

test('a user can update the risk score thresholds and the realization-review toggle', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('risk-setting.update'), [
            'risk_review_required_on_realization' => ['value' => false, 'type' => 'json'],
            'risk_score_thresholds' => ['value' => ['medium' => 5, 'high' => 10, 'critical' => 16], 'type' => 'json'],
        ])
        ->assertSessionHasNoErrors();

    expect(json_decode(Setting::where('code', 'risk_review_required_on_realization')->value('value')))->toBeFalse()
        ->and(json_decode(Setting::where('code', 'risk_score_thresholds')->value('value'), true))->toBe(['medium' => 5, 'high' => 10, 'critical' => 16]);
});
