<?php

use App\Models\Setting;
use App\Models\User;

beforeEach(function () {
    $this->actingAs(User::factory()->create());

    Setting::create([
        'code' => 'document_naming_rule',
        'module' => 'document',
        'type' => 'string',
        'value' => 'auto',
    ]);
    Setting::create([
        'code' => 'document_allowed_file_types',
        'module' => 'document',
        'type' => 'json',
        'value' => json_encode(['pdf', 'doc', 'docx', 'xls', 'xlsx']),
    ]);
    Setting::create([
        'code' => 'document_max_file_size',
        'module' => 'document',
        'type' => 'json',
        'value' => json_encode(['size' => 10, 'unit' => 'MB']),
    ]);
});

test('it persists the selected allowed file types as a json string', function () {
    $this->post(route('document-setting.update'), [
        'document_allowed_file_types' => ['value' => ['pdf', 'png'], 'type' => 'json'],
    ])->assertSessionHasNoErrors();

    expect(Setting::where('code', 'document_allowed_file_types')->value('value'))
        ->toBe(json_encode(['pdf', 'png']));
});

test('it persists the max file size as a json string', function () {
    $this->post(route('document-setting.update'), [
        'document_max_file_size' => ['value' => ['size' => 25, 'unit' => 'MB'], 'type' => 'json'],
    ])->assertSessionHasNoErrors();

    expect(Setting::where('code', 'document_max_file_size')->value('value'))
        ->toBe(json_encode(['size' => 25, 'unit' => 'MB']));
});

test('it rejects an unknown file type extension', function () {
    $this->post(route('document-setting.update'), [
        'document_allowed_file_types' => ['value' => ['exe'], 'type' => 'json'],
    ])->assertSessionHasErrors('document_allowed_file_types.value.0');
});

test('it rejects an invalid file size unit', function () {
    $this->post(route('document-setting.update'), [
        'document_max_file_size' => ['value' => ['size' => 10, 'unit' => 'TB'], 'type' => 'json'],
    ])->assertSessionHasErrors('document_max_file_size.value.unit');
});
