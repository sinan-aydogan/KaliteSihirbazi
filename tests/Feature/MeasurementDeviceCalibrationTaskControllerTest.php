<?php

use App\Models\CalibrationTechnician;
use App\Models\MeasurementDevice\Calibration\CalibrationFirm;
use App\Models\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTask;
use App\Models\MeasurementDevice\MeasurementDevice;
use App\Models\MeasurementDevice\MeasurementDeviceType;
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

function makeQualifiedTechnician(MeasurementDeviceType $type): CalibrationTechnician
{
    $technician = CalibrationTechnician::create(['user_id' => User::factory()->create()->id]);
    $technician->measurementDeviceTypes()->attach($type->id);

    return $technician;
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

test('a user can create an internal calibration task with a qualified technician and reference device', function () {
    $type = MeasurementDeviceType::create(['code' => 'KMP', 'name' => 'Kumpas']);
    $device = MeasurementDevice::create(['code' => 'MD-INT-001', 'measurement_device_type_id' => $type->id]);
    $reference = MeasurementDevice::create(['code' => 'ETL-001', 'is_reference_standard' => true]);
    $technician = makeQualifiedTechnician($type);

    $this->actingAs(User::factory()->create())
        ->post(route('measurement-device-calibration.store'), [
            'planned_date' => now()->toDateString(),
            'measurement_device_id' => $device->id,
            'type' => 'internal',
            'reference_measurement_device_id' => $reference->id,
            'performed_by_id' => $technician->id,
        ])
        ->assertSessionHasNoErrors();

    $task = MeasurementDeviceCalibrationTask::first();

    expect($task->type)->toBe('internal')
        ->and($task->reference_measurement_device_id)->toBe($reference->id)
        ->and($task->performed_by_id)->toBe($technician->id)
        ->and($task->calibration_firm_id)->toBeNull();
});

test('an internal calibration requires a technician qualified for the device type', function () {
    $type = MeasurementDeviceType::create(['code' => 'KMP', 'name' => 'Kumpas']);
    $otherType = MeasurementDeviceType::create(['code' => 'TRZ', 'name' => 'Terazi']);
    $device = MeasurementDevice::create(['code' => 'MD-INT-002', 'measurement_device_type_id' => $type->id]);
    $reference = MeasurementDevice::create(['code' => 'ETL-002', 'is_reference_standard' => true]);
    $unqualifiedTechnician = makeQualifiedTechnician($otherType);

    $this->actingAs(User::factory()->create())
        ->post(route('measurement-device-calibration.store'), [
            'planned_date' => now()->toDateString(),
            'measurement_device_id' => $device->id,
            'type' => 'internal',
            'reference_measurement_device_id' => $reference->id,
            'performed_by_id' => $unqualifiedTechnician->id,
        ])
        ->assertSessionHasErrors('performed_by_id');
});

test('an internal calibration requires the reference device to be flagged as a reference standard', function () {
    $type = MeasurementDeviceType::create(['code' => 'KMP', 'name' => 'Kumpas']);
    $device = MeasurementDevice::create(['code' => 'MD-INT-003', 'measurement_device_type_id' => $type->id]);
    $notAReference = MeasurementDevice::create(['code' => 'MD-INT-004']);
    $technician = makeQualifiedTechnician($type);

    $this->actingAs(User::factory()->create())
        ->post(route('measurement-device-calibration.store'), [
            'planned_date' => now()->toDateString(),
            'measurement_device_id' => $device->id,
            'type' => 'internal',
            'reference_measurement_device_id' => $notAReference->id,
            'performed_by_id' => $technician->id,
        ])
        ->assertSessionHasErrors('reference_measurement_device_id');
});

test('measurement points are stored with a computed deviation and tolerance result', function () {
    $type = MeasurementDeviceType::create(['code' => 'KMP', 'name' => 'Kumpas']);
    $device = MeasurementDevice::create(['code' => 'MD-INT-005', 'measurement_device_type_id' => $type->id]);
    $reference = MeasurementDevice::create(['code' => 'ETL-005', 'is_reference_standard' => true]);
    $technician = makeQualifiedTechnician($type);

    $this->actingAs(User::factory()->create())
        ->post(route('measurement-device-calibration.store'), [
            'planned_date' => now()->toDateString(),
            'measurement_device_id' => $device->id,
            'type' => 'internal',
            'reference_measurement_device_id' => $reference->id,
            'performed_by_id' => $technician->id,
            'measurement_points' => [
                ['unit' => 'mm', 'nominal_value' => 50, 'measured_value' => 50.02, 'tolerance' => 0.05],
                ['unit' => 'mm', 'nominal_value' => 100, 'measured_value' => 100.2, 'tolerance' => 0.05],
            ],
        ])
        ->assertSessionHasNoErrors();

    $task = MeasurementDeviceCalibrationTask::first();
    $points = $task->measurementPoints()->orderBy('sequence')->get();

    expect($points)->toHaveCount(2)
        ->and((float) $points[0]->deviation)->toBe(0.02)
        ->and($points[0]->is_within_tolerance)->toBeTrue()
        ->and((float) $points[1]->deviation)->toBe(0.2)
        ->and($points[1]->is_within_tolerance)->toBeFalse();
});

test('an external calibration task still requires a calibration firm', function () {
    $device = MeasurementDevice::create(['code' => 'MD-EXT-001']);

    $this->actingAs(User::factory()->create())
        ->post(route('measurement-device-calibration.store'), [
            'planned_date' => now()->toDateString(),
            'measurement_device_id' => $device->id,
            'type' => 'external',
        ])
        ->assertSessionHasErrors('calibration_firm_id');
});

test('a device\'s current traceability reference reflects its latest accomplished internal calibration', function () {
    $type = MeasurementDeviceType::create(['code' => 'KMP', 'name' => 'Kumpas']);
    $device = MeasurementDevice::create(['code' => 'MD-TRACE-001', 'measurement_device_type_id' => $type->id]);
    $reference = MeasurementDevice::create(['code' => 'ETL-TRACE-001', 'is_reference_standard' => true]);
    $technician = makeQualifiedTechnician($type);

    expect($device->currentTraceabilityReference())->toBeNull();

    MeasurementDeviceCalibrationTask::create([
        'planned_date' => now()->subDay()->toDateString(),
        'accomplished_date' => now()->toDateString(),
        'measurement_device_id' => $device->id,
        'type' => 'internal',
        'reference_measurement_device_id' => $reference->id,
        'performed_by_id' => $technician->id,
        'status' => true,
    ]);

    expect($device->currentTraceabilityReference()->id)->toBe($reference->id);
});

test('a device can be marked as a reference standard', function () {
    $type = MeasurementDeviceType::create(['code' => 'KMP', 'name' => 'Kumpas']);
    $department = \App\Models\Department::create(['code' => 'DPT-01', 'name' => 'Kalite']);
    $employee = \App\Models\HumanResources\Employee\Employee::factory()->create(['department_id' => $department->id]);

    $this->actingAs(User::factory()->create())
        ->post(route('measurement-device.store'), [
            'code' => 'ETL-010',
            'device_supervisor_id' => $employee->id,
            'calibration_supervisor_id' => $employee->id,
            'department_id' => $department->id,
            'measurement_device_type_id' => $type->id,
            'is_reference_standard' => true,
        ])
        ->assertSessionHasNoErrors();

    expect(MeasurementDevice::where('code', 'ETL-010')->first()->is_reference_standard)->toBeTrue();
});

test('the calibration report page can be viewed for an accomplished task', function () {
    $device = MeasurementDevice::create(['code' => 'MD-006']);
    $firm = makeCalibrationFirm();
    $task = MeasurementDeviceCalibrationTask::create([
        'planned_date' => now()->subDay()->toDateString(),
        'accomplished_date' => now()->toDateString(),
        'measurement_device_id' => $device->id,
        'calibration_firm_id' => $firm->id,
        'status' => true,
        'result' => 'passed',
    ]);

    $this->actingAs(User::factory()->create())
        ->get(route('measurement-device-calibration.report', $task))
        ->assertOk()
        ->assertSee($device->code);
});
