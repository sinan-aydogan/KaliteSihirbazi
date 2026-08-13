<?php

use App\Models\Setting;
use App\Models\Setting\Module;
use App\Models\Setting\Property;
use App\Models\Setting\PropertyType;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

beforeEach(function () {
    $this->actingAs(User::factory()->create());
});

it('renders the module list through Inertia', function () {
    Module::create([
        'code' => 'CORE',
        'name' => 'Core',
        'description' => null,
        'licence_key' => 'core',
        'status' => true,
    ]);

    $this->get(route('module.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Setting/Module/Index', false)
            ->has('data', 1));
});

it('creates and validates unique modules', function () {
    $payload = [
        'code' => 'CORE',
        'name' => 'Core',
        'description' => 'Core module',
        'licence_key' => 'core',
        'status' => true,
    ];

    $this->post(route('module.store'), $payload)->assertSessionHasNoErrors();
    $this->post(route('module.store'), $payload)->assertSessionHasErrors('code');
    $this->assertDatabaseCount('modules', 1);
});

it('persists property relations and JSON features', function () {
    $type = PropertyType::create([
        'code' => 'TEXT',
        'name' => 'Text',
        'description' => null,
        'default' => true,
    ]);

    $this->post(route('property.store'), [
        'name' => 'Serial number',
        'feature' => ['required' => true, 'max' => 50],
        'property_type_id' => $type->id,
    ])->assertSessionHasNoErrors();

    $property = Property::firstOrFail();
    expect($property->feature)->toBe(['required' => true, 'max' => 50])
        ->and($property->propertyType->is($type))->toBeTrue()
        ->and($type->fresh()->properties)->toHaveCount(1);
});

it('attaches property types to modules without duplicate pivots', function () {
    $module = Module::create([
        'code' => 'DOC',
        'name' => 'Documents',
        'status' => true,
    ]);
    $type = PropertyType::create([
        'code' => 'TEXT',
        'name' => 'Text',
        'default' => false,
    ]);

    $module->propertyTypes()->attach($type);

    expect($module->propertyTypes->first()->is($type))->toBeTrue()
        ->and($type->modules->first()->is($module))->toBeTrue();
});

it('returns a global setting as JSON', function () {
    Setting::create([
        'code' => 'document_naming_rule',
        'module' => 'document',
        'type' => 'string',
        'value' => 'auto',
    ]);

    $this->getJson(route('global-setting.get-setting', ['code' => 'document_naming_rule']))
        ->assertOk()
        ->assertJsonPath('setting.value', 'auto');
});
