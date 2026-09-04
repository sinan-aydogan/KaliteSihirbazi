<?php

use App\Models\Setting;
use App\Services\Document\DocumentFileSettingService;

test('it falls back to defaults when no document file settings are configured', function () {
    $service = app(DocumentFileSettingService::class);

    expect($service->allowedFileTypes())->toBe(['pdf', 'doc', 'docx', 'xls', 'xlsx'])
        ->and($service->maxFileSize())->toBe(['size' => 10.0, 'unit' => 'MB'])
        ->and($service->maxFileSizeInKilobytes())->toBe(10 * 1024);
});

test('it reads configured allowed file types from the settings table', function () {
    Setting::create([
        'code' => 'document_allowed_file_types',
        'module' => 'document',
        'type' => 'json',
        'value' => json_encode(['pdf', 'png']),
    ]);

    $service = app(DocumentFileSettingService::class);

    expect($service->allowedFileTypes())->toBe(['pdf', 'png']);
});

test('it ignores unknown file type extensions in the stored setting', function () {
    Setting::create([
        'code' => 'document_allowed_file_types',
        'module' => 'document',
        'type' => 'json',
        'value' => json_encode(['pdf', 'exe', 'bat']),
    ]);

    $service = app(DocumentFileSettingService::class);

    expect($service->allowedFileTypes())->toBe(['pdf']);
});

test('it converts the configured max file size to kilobytes', function () {
    Setting::create([
        'code' => 'document_max_file_size',
        'module' => 'document',
        'type' => 'json',
        'value' => json_encode(['size' => 2, 'unit' => 'GB']),
    ]);

    $service = app(DocumentFileSettingService::class);

    expect($service->maxFileSizeInKilobytes())->toBe(2 * 1024 * 1024);
});

test('it builds file validation rules from the configured settings', function () {
    Setting::create([
        'code' => 'document_allowed_file_types',
        'module' => 'document',
        'type' => 'json',
        'value' => json_encode(['pdf']),
    ]);
    Setting::create([
        'code' => 'document_max_file_size',
        'module' => 'document',
        'type' => 'json',
        'value' => json_encode(['size' => 1, 'unit' => 'MB']),
    ]);

    $rules = app(DocumentFileSettingService::class)->fileValidationRules();

    expect($rules)->toContain('mimes:pdf')
        ->and($rules)->toContain('mimetypes:application/pdf')
        ->and($rules)->toContain('max:1024');
});
