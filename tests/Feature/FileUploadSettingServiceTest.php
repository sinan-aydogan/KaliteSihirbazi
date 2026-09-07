<?php

use App\Models\Setting;
use App\Services\FileUploadSettingService;

function fileUploadDefaultTypes(): array
{
    return ['pdf', 'doc', 'docx'];
}

function fileUploadDefaultMaxSize(): array
{
    return ['size' => 10, 'unit' => 'MB'];
}

test('it falls back to the given defaults when no setting is configured', function () {
    $service = app(FileUploadSettingService::class);

    expect($service->allowedFileTypes('some_module_allowed_file_types', fileUploadDefaultTypes()))->toBe(fileUploadDefaultTypes())
        ->and($service->maxFileSize('some_module_max_file_size', fileUploadDefaultMaxSize()))->toBe(fileUploadDefaultMaxSize())
        ->and($service->maxFileSizeInKilobytes('some_module_max_file_size', fileUploadDefaultMaxSize()))->toBe(10 * 1024);
});

test('it reads configured allowed file types for any given setting code', function () {
    Setting::create(['code' => 'education_allowed_file_types', 'module' => 'education', 'type' => 'json', 'value' => json_encode(['pdf', 'png'])]);

    $service = app(FileUploadSettingService::class);

    expect($service->allowedFileTypes('education_allowed_file_types', fileUploadDefaultTypes()))->toBe(['pdf', 'png']);
});

test('it ignores unknown extensions in the stored setting', function () {
    Setting::create(['code' => 'education_allowed_file_types', 'module' => 'education', 'type' => 'json', 'value' => json_encode(['pdf', 'exe'])]);

    expect(app(FileUploadSettingService::class)->allowedFileTypes('education_allowed_file_types', fileUploadDefaultTypes()))->toBe(['pdf']);
});

test('it converts the configured max file size to kilobytes for any given setting code', function () {
    Setting::create(['code' => 'education_max_file_size', 'module' => 'education', 'type' => 'json', 'value' => json_encode(['size' => 2, 'unit' => 'GB'])]);

    expect(app(FileUploadSettingService::class)->maxFileSizeInKilobytes('education_max_file_size', fileUploadDefaultMaxSize()))
        ->toBe(2 * 1024 * 1024);
});

test('it builds file validation rules from the configured settings', function () {
    Setting::create(['code' => 'education_allowed_file_types', 'module' => 'education', 'type' => 'json', 'value' => json_encode(['png'])]);
    Setting::create(['code' => 'education_max_file_size', 'module' => 'education', 'type' => 'json', 'value' => json_encode(['size' => 1, 'unit' => 'MB'])]);

    $rules = app(FileUploadSettingService::class)->fileValidationRules(
        'education_allowed_file_types', fileUploadDefaultTypes(),
        'education_max_file_size', fileUploadDefaultMaxSize(),
    );

    expect($rules)->toContain('mimes:png')
        ->and($rules)->toContain('mimetypes:image/png')
        ->and($rules)->toContain('max:1024');
});

test('two different setting codes are read independently', function () {
    Setting::create(['code' => 'document_allowed_file_types', 'module' => 'document', 'type' => 'json', 'value' => json_encode(['pdf'])]);
    Setting::create(['code' => 'education_allowed_file_types', 'module' => 'education', 'type' => 'json', 'value' => json_encode(['png'])]);

    $service = app(FileUploadSettingService::class);

    expect($service->allowedFileTypes('document_allowed_file_types', fileUploadDefaultTypes()))->toBe(['pdf'])
        ->and($service->allowedFileTypes('education_allowed_file_types', fileUploadDefaultTypes()))->toBe(['png']);
});
