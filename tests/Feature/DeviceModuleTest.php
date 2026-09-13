<?php

use App\Models\Device;
use App\Models\DeviceType;
use App\Models\User;

beforeEach(function () {
    $this->actingAs(User::factory()->create());
});

test('a device can be created with a type', function () {
    $type = DeviceType::factory()->create();

    $this->post(route('device.store'), [
        'code' => 'DEV-001',
        'name' => 'Kompresör',
        'device_type_id' => $type->id,
        'is_active' => true,
    ])->assertSessionHasNoErrors();

    $device = Device::where('code', 'DEV-001')->first();

    expect($device)->not->toBeNull()
        ->and($device->name)->toBe('Kompresör')
        ->and($device->device_type_id)->toBe($type->id);
});

test('a device code must be unique', function () {
    Device::factory()->create(['code' => 'DEV-DUP']);

    $this->post(route('device.store'), [
        'code' => 'DEV-DUP',
        'name' => 'Başka Cihaz',
    ])->assertSessionHasErrors('code');
});

test('a device can be updated and soft deleted', function () {
    $device = Device::factory()->create();

    $this->put(route('device.update', $device), [
        'code' => $device->code,
        'name' => 'Güncellenmiş Ad',
        'is_active' => false,
    ])->assertSessionHasNoErrors();

    expect($device->fresh()->name)->toBe('Güncellenmiş Ad');

    $this->delete(route('device.destroy', $device));

    expect(Device::find($device->id))->toBeNull()
        ->and(Device::withTrashed()->find($device->id))->not->toBeNull();
});

test('a device type can be created, updated and deleted', function () {
    $this->post(route('device-type.store'), ['name' => 'Ölçüm Aleti'])->assertSessionHasNoErrors();
    $type = DeviceType::where('name', 'Ölçüm Aleti')->first();
    expect($type)->not->toBeNull();

    $this->put(route('device-type.update', $type), ['name' => 'Ölçüm Aleti 2'])->assertSessionHasNoErrors();
    expect($type->fresh()->name)->toBe('Ölçüm Aleti 2');

    $this->delete(route('device-type.destroy', $type));
    expect(DeviceType::find($type->id))->toBeNull();
});
