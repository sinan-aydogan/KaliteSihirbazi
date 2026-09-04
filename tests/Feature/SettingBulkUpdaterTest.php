<?php

use App\Models\Setting;
use App\Services\Setting\SettingBulkUpdater;

test('it persists a plain string setting', function () {
    Setting::create(['code' => 'global_date_format', 'module' => 'global', 'type' => 'string', 'value' => 'DD.MM.YYYY']);

    app(SettingBulkUpdater::class)->update([
        'global_date_format' => ['value' => 'YYYY-MM-DD', 'type' => 'string'],
    ]);

    expect(Setting::where('code', 'global_date_format')->value('value'))->toBe('YYYY-MM-DD');
});

test('it json-encodes a json-type setting value', function () {
    Setting::create(['code' => 'document_allowed_file_types', 'module' => 'document', 'type' => 'json', 'value' => json_encode(['pdf'])]);

    app(SettingBulkUpdater::class)->update([
        'document_allowed_file_types' => ['value' => ['pdf', 'png'], 'type' => 'json'],
    ]);

    expect(Setting::where('code', 'document_allowed_file_types')->value('value'))->toBe(json_encode(['pdf', 'png']));
});

test('it silently skips a code that has no matching setting row', function () {
    app(SettingBulkUpdater::class)->update([
        'does_not_exist' => ['value' => 'anything', 'type' => 'string'],
    ]);

    expect(Setting::where('code', 'does_not_exist')->exists())->toBeFalse();
});
