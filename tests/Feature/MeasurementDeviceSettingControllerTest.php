<?php

use App\Models\Setting;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('measurement device settings index renders module settings', function () {
    $this->actingAs(User::factory()->create())
        ->get(route('measurement-device-setting.index'))
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/MeasurementDevice/Setting/IndexPage')
            ->has('settings')
        );
});

test('the calibration reminder days setting can be updated', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('measurement-device-setting.update'), [
            'calibration_reminder_days' => ['value' => 45],
        ])
        ->assertSessionHasNoErrors();

    $setting = Setting::where('code', 'calibration_reminder_days')->first();

    expect(json_decode($setting->value))->toBe(45);
});

test('the calibration reminder days setting rejects a non-positive value', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('measurement-device-setting.update'), [
            'calibration_reminder_days' => ['value' => 0],
        ])
        ->assertSessionHasErrors('calibration_reminder_days.value');
});
