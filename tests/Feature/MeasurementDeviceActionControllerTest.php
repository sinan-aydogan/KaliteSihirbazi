<?php

use App\Models\MeasurementDevice\Action\MeasurementDeviceAction;
use App\Models\MeasurementDevice\Action\MeasurementDeviceActionType;
use App\Models\MeasurementDevice\MeasurementDevice;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('device actions tab renders an inertia page with the device\'s actions and action types', function () {
    $device = MeasurementDevice::create(['code' => 'MD-ACT-001']);
    $type = MeasurementDeviceActionType::factory()->create(['name' => 'Bakıma Gönderildi']);
    MeasurementDeviceAction::create([
        'measurement_device_id' => $device->id,
        'measurement_device_action_type_id' => $type->id,
        'started_at' => now()->toDateString(),
    ]);

    $this->actingAs(User::factory()->create())
        ->get(route('measurement-device-actions.index', $device))
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/MeasurementDevice/Device/Pages/Action')
            ->has('actions', 1)
            ->has('actionTypes')
        );
});

test('a user can record an action for a device', function () {
    $device = MeasurementDevice::create(['code' => 'MD-ACT-002']);
    $type = MeasurementDeviceActionType::factory()->create(['name' => 'Arızalandı']);

    $this->actingAs(User::factory()->create())
        ->post(route('measurement-device-action.store'), [
            'measurement_device_id' => $device->id,
            'measurement_device_action_type_id' => $type->id,
            'started_at' => now()->toDateString(),
            'description' => 'Motor sesi anormal',
        ])
        ->assertSessionHasNoErrors();

    $action = MeasurementDeviceAction::first();

    expect($action->measurement_device_id)->toBe($device->id)
        ->and($action->measurement_device_action_type_id)->toBe($type->id)
        ->and($action->description)->toBe('Motor sesi anormal')
        ->and($action->recorded_by_id)->not->toBeNull();
});

test('resolved_at must not be before started_at', function () {
    $device = MeasurementDevice::create(['code' => 'MD-ACT-003']);
    $type = MeasurementDeviceActionType::factory()->create();

    $this->actingAs(User::factory()->create())
        ->post(route('measurement-device-action.store'), [
            'measurement_device_id' => $device->id,
            'measurement_device_action_type_id' => $type->id,
            'started_at' => now()->toDateString(),
            'resolved_at' => now()->subDay()->toDateString(),
        ])
        ->assertSessionHasErrors('resolved_at');
});

test('an action can be updated with a resolution date', function () {
    $device = MeasurementDevice::create(['code' => 'MD-ACT-004']);
    $type = MeasurementDeviceActionType::factory()->create();
    $action = MeasurementDeviceAction::create([
        'measurement_device_id' => $device->id,
        'measurement_device_action_type_id' => $type->id,
        'started_at' => now()->subWeek()->toDateString(),
    ]);

    $this->actingAs(User::factory()->create())
        ->put(route('measurement-device-action.update', $action), [
            'measurement_device_action_type_id' => $type->id,
            'started_at' => $action->started_at->toDateString(),
            'resolved_at' => now()->toDateString(),
        ])
        ->assertSessionHasNoErrors();

    expect($action->refresh()->resolved_at->toDateString())->toBe(now()->toDateString());
});

test('an action can be deleted', function () {
    $device = MeasurementDevice::create(['code' => 'MD-ACT-005']);
    $type = MeasurementDeviceActionType::factory()->create();
    $action = MeasurementDeviceAction::create([
        'measurement_device_id' => $device->id,
        'measurement_device_action_type_id' => $type->id,
        'started_at' => now()->toDateString(),
    ]);

    $this->actingAs(User::factory()->create())
        ->delete(route('measurement-device-action.destroy', $action))
        ->assertSessionHasNoErrors();

    expect(MeasurementDeviceAction::find($action->id))->toBeNull();
});

test('a user can create an action type', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('measurement-device-action-type.store'), [
            'name' => 'Yazılım Güncellemesi',
        ])
        ->assertSessionHasNoErrors();

    $type = MeasurementDeviceActionType::where('name', 'Yazılım Güncellemesi')->first();

    expect($type)->not->toBeNull()
        ->and($type->key)->toBe('yazilim_guncellemesi')
        ->and($type->is_protected)->toBeFalse();
});

test('a protected action type cannot be deleted', function () {
    $type = MeasurementDeviceActionType::factory()->create(['is_protected' => true]);

    $this->actingAs(User::factory()->create())
        ->delete(route('measurement-device-action-type.destroy', $type));

    expect(MeasurementDeviceActionType::find($type->id))->not->toBeNull();
});

test('an action type with existing actions cannot be deleted', function () {
    $device = MeasurementDevice::create(['code' => 'MD-ACT-006']);
    $type = MeasurementDeviceActionType::factory()->create();
    MeasurementDeviceAction::create([
        'measurement_device_id' => $device->id,
        'measurement_device_action_type_id' => $type->id,
        'started_at' => now()->toDateString(),
    ]);

    $this->actingAs(User::factory()->create())
        ->delete(route('measurement-device-action-type.destroy', $type));

    expect(MeasurementDeviceActionType::find($type->id))->not->toBeNull();
});

test('an unused, unprotected action type can be deleted', function () {
    $type = MeasurementDeviceActionType::factory()->create();

    $this->actingAs(User::factory()->create())
        ->delete(route('measurement-device-action-type.destroy', $type))
        ->assertSessionHasNoErrors();

    expect(MeasurementDeviceActionType::find($type->id))->toBeNull();
});
