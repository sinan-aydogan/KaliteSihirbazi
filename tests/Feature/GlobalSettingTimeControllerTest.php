<?php

use App\Enums\DateFormat;
use App\Enums\TimeFormat;
use App\Models\Setting;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

beforeEach(function () {
    $this->actingAs(User::factory()->create());

    Setting::create(['code' => 'global_date_format', 'module' => 'global', 'type' => 'string', 'value' => DateFormat::DMY_DOT->value]);
    Setting::create(['code' => 'global_time_format', 'module' => 'global', 'type' => 'string', 'value' => TimeFormat::H24->value]);
});

test('it renders the time settings page with the current settings', function () {
    $this->get(route('global-setting.time'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Setting/TimeSetting')
            ->has('settings', 2)
        );
});

test('it persists a valid date and time format', function () {
    $this->post(route('global-setting.time.update'), [
        'global_date_format' => ['value' => DateFormat::YMD_DASH->value, 'type' => 'string'],
        'global_time_format' => ['value' => TimeFormat::H12->value, 'type' => 'string'],
    ])->assertSessionHasNoErrors();

    expect(Setting::where('code', 'global_date_format')->value('value'))->toBe(DateFormat::YMD_DASH->value)
        ->and(Setting::where('code', 'global_time_format')->value('value'))->toBe(TimeFormat::H12->value);
});

test('it rejects an unknown date format value', function () {
    $this->post(route('global-setting.time.update'), [
        'global_date_format' => ['value' => 'not-a-real-format', 'type' => 'string'],
    ])->assertSessionHasErrors('global_date_format.value');
});

test('it rejects an unknown time format value', function () {
    $this->post(route('global-setting.time.update'), [
        'global_time_format' => ['value' => 'not-a-real-format', 'type' => 'string'],
    ])->assertSessionHasErrors('global_time_format.value');
});
