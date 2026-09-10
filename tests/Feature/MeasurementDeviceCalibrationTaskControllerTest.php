<?php

use App\Models\MeasurementDevice\Calibration\CalibrationFirm;
use App\Models\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTask;
use App\Models\MeasurementDevice\MeasurementDevice;
use App\Models\User;

function makeCalibrationFirm(): CalibrationFirm
{
    return CalibrationFirm::create([
        'name' => 'Test Kalibrasyon A.Ş.',
        'email' => 'info@test-kalibrasyon.com',
        'address' => 'Test Adres',
        'phone' => '05000000000',
    ]);
}

test('a user can create a calibration task for a device', function () {
    $device = MeasurementDevice::create(['code' => 'MD-001']);
    $firm = makeCalibrationFirm();

    $this->actingAs(User::factory()->create())
        ->post(route('measurement-device-calibration.store'), [
            'planned_date' => now()->addMonth()->toDateString(),
            'measurement_device_id' => $device->id,
            'calibration_firm_id' => $firm->id,
        ])
        ->assertSessionHasNoErrors();

    $task = MeasurementDeviceCalibrationTask::first();

    expect($task->measurement_device_id)->toBe($device->id)
        ->and($task->calibration_firm_id)->toBe($firm->id)
        ->and($task->status)->toBeFalse();
});

test('a user can mark a calibration task as accomplished with a date', function () {
    $device = MeasurementDevice::create(['code' => 'MD-002']);
    $firm = makeCalibrationFirm();
    $task = MeasurementDeviceCalibrationTask::create([
        'planned_date' => now()->subDay()->toDateString(),
        'measurement_device_id' => $device->id,
        'calibration_firm_id' => $firm->id,
        'status' => false,
    ]);

    $this->actingAs(User::factory()->create())
        ->put(route('measurement-device-calibration.update', $task), [
            'planned_date' => $task->planned_date->toDateString(),
            'accomplished_date' => now()->toDateString(),
            'measurement_device_id' => $device->id,
            'calibration_firm_id' => $firm->id,
            'status' => true,
        ])
        ->assertSessionHasNoErrors();

    $task->refresh();

    expect($task->status)->toBeTrue()
        ->and($task->accomplished_date->toDateString())->toBe(now()->toDateString());
});

test('accomplished_date must not be before the planned_date', function () {
    $device = MeasurementDevice::create(['code' => 'MD-003']);
    $firm = makeCalibrationFirm();
    $task = MeasurementDeviceCalibrationTask::create([
        'planned_date' => now()->toDateString(),
        'measurement_device_id' => $device->id,
        'calibration_firm_id' => $firm->id,
        'status' => false,
    ]);

    $this->actingAs(User::factory()->create())
        ->put(route('measurement-device-calibration.update', $task), [
            'planned_date' => $task->planned_date->toDateString(),
            'accomplished_date' => now()->subDay()->toDateString(),
            'measurement_device_id' => $device->id,
            'calibration_firm_id' => $firm->id,
            'status' => true,
        ])
        ->assertSessionHasErrors('accomplished_date');
});

test('a calibration task can be deleted', function () {
    $device = MeasurementDevice::create(['code' => 'MD-004']);
    $firm = makeCalibrationFirm();
    $task = MeasurementDeviceCalibrationTask::create([
        'planned_date' => now()->toDateString(),
        'measurement_device_id' => $device->id,
        'calibration_firm_id' => $firm->id,
        'status' => false,
    ]);

    $this->actingAs(User::factory()->create())
        ->delete(route('measurement-device-calibration.destroy', $task))
        ->assertSessionHasNoErrors();

    expect(MeasurementDeviceCalibrationTask::find($task->id))->toBeNull();
});
