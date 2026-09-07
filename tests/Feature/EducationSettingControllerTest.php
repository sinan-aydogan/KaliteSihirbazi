<?php

use App\Models\Setting;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

beforeEach(function () {
    $this->actingAs(User::factory()->create());

    Setting::create(['code' => 'education_allowed_file_types', 'module' => 'education', 'type' => 'json', 'value' => json_encode(['pdf', 'doc', 'docx', 'xls', 'xlsx', 'jpg', 'jpeg', 'png'])]);
    Setting::create(['code' => 'education_max_file_size', 'module' => 'education', 'type' => 'json', 'value' => json_encode(['size' => 10, 'unit' => 'MB'])]);
});

test('it renders the education general settings page with the current settings', function () {
    $this->get(route('education-setting.general'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/HumanResources/Education/Setting/GeneralSettingPage')
            ->has('settings', 2)
        );
});

test('it persists a valid allowed file types and max file size selection', function () {
    $this->post(route('education-setting.update'), [
        'education_allowed_file_types' => ['value' => ['pdf', 'png'], 'type' => 'json'],
        'education_max_file_size' => ['value' => ['size' => 25, 'unit' => 'MB'], 'type' => 'json'],
    ])->assertSessionHasNoErrors();

    expect(Setting::where('code', 'education_allowed_file_types')->value('value'))->toBe(json_encode(['pdf', 'png']))
        ->and(Setting::where('code', 'education_max_file_size')->value('value'))->toBe(json_encode(['size' => 25, 'unit' => 'MB']));
});

test('it rejects an unknown file type extension', function () {
    $this->post(route('education-setting.update'), [
        'education_allowed_file_types' => ['value' => ['exe'], 'type' => 'json'],
    ])->assertSessionHasErrors('education_allowed_file_types.value.0');
});

test('it rejects an invalid file size unit', function () {
    $this->post(route('education-setting.update'), [
        'education_max_file_size' => ['value' => ['size' => 10, 'unit' => 'TB'], 'type' => 'json'],
    ])->assertSessionHasErrors('education_max_file_size.value.unit');
});
