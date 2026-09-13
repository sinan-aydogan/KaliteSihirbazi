<?php

use App\Models\Area;
use App\Models\Device;
use App\Models\EquipmentOperatorAuthorization;
use App\Models\HumanResources\Employee\Employee;
use App\Models\Machine;
use App\Models\MeasurementDevice\MeasurementDevice;
use App\Models\User;

beforeEach(function () {
    $this->actingAs(User::factory()->create());
});

test('a device can belong to multiple areas and an area lists its devices', function () {
    $device = Device::factory()->create();
    $areaOne = Area::factory()->create(['name' => 'Üretim Hattı 1']);
    $areaTwo = Area::factory()->create(['name' => 'Üretim Hattı 2']);

    $this->put(route('equipment-area.update', ['equipmentType' => 'device', 'equipmentId' => $device->id]), [
        'area_ids' => [$areaOne->id, $areaTwo->id],
    ])->assertSessionHasNoErrors();

    expect($device->areas()->pluck('areas.id')->all())->toEqualCanonicalizing([$areaOne->id, $areaTwo->id])
        ->and($areaOne->devices()->whereKey($device->id)->exists())->toBeTrue()
        ->and($areaTwo->devices()->whereKey($device->id)->exists())->toBeTrue();
});

test('re-syncing a device area list removes ones no longer selected', function () {
    $device = Device::factory()->create();
    $areaOne = Area::factory()->create();
    $areaTwo = Area::factory()->create();
    $device->areas()->attach([$areaOne->id, $areaTwo->id]);

    $this->put(route('equipment-area.update', ['equipmentType' => 'device', 'equipmentId' => $device->id]), [
        'area_ids' => [$areaTwo->id],
    ])->assertSessionHasNoErrors();

    expect($device->areas()->pluck('areas.id')->all())->toBe([$areaTwo->id]);
});

test('machines and measurement devices can also be linked to areas through the same pivot', function () {
    $machine = Machine::factory()->create();
    $measurementDevice = MeasurementDevice::factory()->create();
    $area = Area::factory()->create();

    $this->put(route('equipment-area.update', ['equipmentType' => 'machine', 'equipmentId' => $machine->id]), [
        'area_ids' => [$area->id],
    ])->assertSessionHasNoErrors();

    $this->put(route('equipment-area.update', ['equipmentType' => 'measurement-device', 'equipmentId' => $measurementDevice->id]), [
        'area_ids' => [$area->id],
    ])->assertSessionHasNoErrors();

    expect($area->machines()->whereKey($machine->id)->exists())->toBeTrue()
        ->and($area->measurementDevices()->whereKey($measurementDevice->id)->exists())->toBeTrue();
});

test('an employee can be granted operator authorization on a device with an expiry date', function () {
    $device = Device::factory()->create();
    $employee = Employee::factory()->create(['department_id' => null]);

    $this->post(route('equipment-operator-authorization.store', ['equipmentType' => 'device', 'equipmentId' => $device->id]), [
        'employee_id' => $employee->id,
        'granted_at' => '2026-01-10',
        'expires_at' => '2027-01-10',
    ])->assertSessionHasNoErrors();

    $authorization = EquipmentOperatorAuthorization::first();

    expect($authorization)->not->toBeNull()
        ->and($authorization->employee_id)->toBe($employee->id)
        ->and($authorization->granted_by_id)->toBe(auth()->id())
        ->and($device->isOperatorAuthorized($employee))->toBeTrue();
});

test('an expired operator authorization is no longer considered valid', function () {
    $device = Device::factory()->create();
    $employee = Employee::factory()->create(['department_id' => null]);

    $device->operatorAuthorizations()->create([
        'employee_id' => $employee->id,
        'granted_at' => '2020-01-01',
        'expires_at' => '2020-06-01',
    ]);

    expect($device->isOperatorAuthorized($employee))->toBeFalse();
});

test('an operator authorization can be revoked', function () {
    $device = Device::factory()->create();
    $employee = Employee::factory()->create(['department_id' => null]);
    $authorization = $device->operatorAuthorizations()->create([
        'employee_id' => $employee->id,
        'granted_at' => now()->toDateString(),
    ]);

    $this->delete(route('equipment-operator-authorization.destroy', [
        'equipmentType' => 'device',
        'equipmentId' => $device->id,
        'authorization' => $authorization->id,
    ]))->assertSessionHasNoErrors();

    expect(EquipmentOperatorAuthorization::find($authorization->id))->toBeNull();
});

test('an unknown equipment type is rejected', function () {
    $this->put(route('equipment-area.update', ['equipmentType' => 'unknown-thing', 'equipmentId' => 1]), [
        'area_ids' => [],
    ])->assertNotFound();
});
