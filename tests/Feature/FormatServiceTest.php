<?php

use App\Enums\DateFormat;
use App\Enums\TimeFormat;
use App\Models\Setting;
use App\Services\FormatService;
use Carbon\Carbon;

test('it falls back to default date and time formats when unconfigured', function () {
    $service = app(FormatService::class);

    expect($service->dateFormat())->toBe(DateFormat::DMY_DOT)
        ->and($service->timeFormat())->toBe(TimeFormat::H24)
        ->and($service->settingsForFrontend())->toBe(['dateFormat' => 'DD.MM.YYYY', 'timeFormat' => 'HH:mm']);
});

test('it reads the configured date and time formats from the settings table', function () {
    Setting::create(['code' => 'global_date_format', 'module' => 'global', 'type' => 'string', 'value' => DateFormat::YMD_DASH->value]);
    Setting::create(['code' => 'global_time_format', 'module' => 'global', 'type' => 'string', 'value' => TimeFormat::H12->value]);

    $service = app(FormatService::class);

    expect($service->dateFormat())->toBe(DateFormat::YMD_DASH)
        ->and($service->timeFormat())->toBe(TimeFormat::H12);
});

test('it ignores an unknown stored format value and falls back to the default', function () {
    Setting::create(['code' => 'global_date_format', 'module' => 'global', 'type' => 'string', 'value' => 'not-a-real-format']);

    expect(app(FormatService::class)->dateFormat())->toBe(DateFormat::DMY_DOT);
});

test('it formats a date using the configured format', function () {
    Setting::create(['code' => 'global_date_format', 'module' => 'global', 'type' => 'string', 'value' => DateFormat::YMD_DASH->value]);

    $value = Carbon::create(2026, 3, 5, 14, 30, 0);

    expect(app(FormatService::class)->date($value))->toBe('2026-03-05');
});

test('it formats a time using the configured format', function () {
    Setting::create(['code' => 'global_time_format', 'module' => 'global', 'type' => 'string', 'value' => TimeFormat::H12->value]);

    $value = Carbon::create(2026, 3, 5, 14, 30, 0);

    expect(app(FormatService::class)->time($value))->toBe('02:30 PM');
});

test('it formats a date-time combining both configured formats', function () {
    Setting::create(['code' => 'global_date_format', 'module' => 'global', 'type' => 'string', 'value' => DateFormat::DMY_DOT->value]);
    Setting::create(['code' => 'global_time_format', 'module' => 'global', 'type' => 'string', 'value' => TimeFormat::H24->value]);

    $value = Carbon::create(2026, 3, 5, 14, 30, 0);

    expect(app(FormatService::class)->dateTime($value))->toBe('05.03.2026 14:30');
});

test('it returns null when formatting a null or empty value', function () {
    $service = app(FormatService::class);

    expect($service->date(null))->toBeNull()
        ->and($service->time(''))->toBeNull()
        ->and($service->dateTime(null))->toBeNull();
});
