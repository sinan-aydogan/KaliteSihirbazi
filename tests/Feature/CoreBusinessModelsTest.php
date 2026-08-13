<?php

use App\Models\BusinessManagement\Vehicle\Vehicle;
use App\Models\BusinessManagement\Vehicle\VehicleType;
use App\Models\Department;
use App\Models\HumanResources\Employee\Employee;
use App\Models\HumanResources\JobDescription\JobDescription;
use App\Models\MeasurementDevice\MeasurementDevice;
use App\Models\MeasurementDevice\MeasurementDeviceType;
use App\Models\Supplier;
use App\Models\SupplierTag;
use App\Models\SupplierType;
use App\Models\User;
use App\Models\Warehouse\Warehouse;

beforeEach(function () {
    $this->actingAs(User::factory()->create());
    $this->department = Department::create(['code' => 'QUALITY', 'name' => 'Quality', 'type' => 'main']);
});

test('warehouse update keeps its existing unique code', function () {
    $warehouse = Warehouse::create([
        'code' => 'MAIN',
        'name' => 'Main Warehouse',
        'department_id' => $this->department->id,
    ]);

    $this->put(route('warehouse.update', $warehouse), [
        'code' => 'MAIN',
        'name' => 'Updated Warehouse',
        'department_id' => $this->department->id,
    ])->assertSessionHasNoErrors();
});

test('vehicle validates production year and chronological dates', function () {
    $type = VehicleType::create(['name' => 'Passenger']);

    $this->post(route('vehicle.store'), [
        'code' => 'CAR-1',
        'vehicle_type_id' => $type->id,
        'production_year' => 1800,
        'purchase_date' => '2026-02-02',
        'disposing_date' => '2026-01-01',
        'disposing_reason' => 'Sale',
    ])->assertSessionHasErrors(['production_year', 'disposing_date']);

    $this->post(route('vehicle.store'), [
        'code' => 'CAR-1',
        'vehicle_type_id' => $type->id,
        'production_year' => 2025,
    ])->assertSessionHasNoErrors();

    expect(Vehicle::firstOrFail()->production_year)->toBe(2025);
});

test('supplier persists validated type and tag relations', function () {
    $type = SupplierType::create(['code' => 'RAW', 'name' => 'Raw Material']);
    $tag = SupplierTag::create(['name' => 'Approved']);

    $this->post(route('supplier.store'), [
        'code' => 'SUP-1',
        'name' => 'Supplier One',
        'types' => [$type->id],
        'tags' => [$tag->id],
        'contact_info' => ['email' => 'supplier@example.com'],
        'notes' => [],
        'is_active' => true,
    ])->assertSessionHasNoErrors();

    $supplier = Supplier::with(['types', 'tags'])->firstOrFail();
    expect($supplier->types->modelKeys())->toBe([$type->id])
        ->and($supplier->tags->modelKeys())->toBe([$tag->id]);
});

test('employee update keeps its existing unique code', function () {
    $employee = Employee::create(['code' => 'EMP-1', 'name' => 'Employee']);

    $this->put(route('employee.update', $employee), [
        'code' => 'EMP-1',
        'name' => 'Updated Employee',
    ])->assertSessionHasNoErrors();
});

test('job description stores structured fields without a department', function () {
    $list = ['Item'];
    $payload = [
        'code' => 'JD-1',
        'name' => 'Quality Specialist',
        'department_id' => null,
        'responsibilities' => $list,
        'powers' => $list,
        'requirements' => $list,
        'skills' => $list,
        'working_conditions' => $list,
        'working_tools' => $list,
        'working_hours' => $list,
        'overtime_status' => $list,
        'travel_status' => [['reason' => 'Audit', 'location' => 'Plant']],
    ];

    $this->post(route('job-description.store'), $payload)->assertSessionHasNoErrors();

    expect(JobDescription::firstOrFail()->responsibilities)->toBe($list);
});

test('measurement device code is unique in its own table and all fields persist', function () {
    $employee = Employee::create(['code' => 'EMP-2', 'name' => 'Supervisor']);
    $type = MeasurementDeviceType::create(['code' => 'SCALE', 'name' => 'Scale']);

    $payload = [
        'code' => 'DEV-1',
        'brand' => 'Acme',
        'purchase_price' => 1250.50,
        'device_supervisor_id' => $employee->id,
        'calibration_supervisor_id' => $employee->id,
        'department_id' => $this->department->id,
        'measurement_device_type_id' => $type->id,
    ];

    $this->post(route('measurement-device.store'), $payload)->assertSessionHasNoErrors();
    $this->post(route('measurement-device.store'), $payload)->assertSessionHasErrors('code');

    expect(MeasurementDevice::firstOrFail()->purchase_price)->toBe('1250.50');
});
