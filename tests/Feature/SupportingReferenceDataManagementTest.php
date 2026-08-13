<?php

use App\Models\Department;
use App\Models\Document\DistributionPoint;
use App\Models\Document\DocumentType;
use App\Models\HumanResources\Education\EducationType;
use App\Models\MeasurementDevice\Calibration\CalibrationFirm;
use App\Models\MeasurementDevice\MeasurementDeviceType;
use App\Models\User;

beforeEach(function () {
    $this->actingAs(User::factory()->create());
});

test('document type codes are validated and can remain unchanged on update', function () {
    $type = DocumentType::create(['code' => 'PROC', 'name' => 'Procedure']);

    $this->put(route('document-type.update', $type), [
        'code' => 'PROC',
        'name' => 'Updated Procedure',
    ])->assertSessionHasNoErrors();

    $this->post(route('document-type.store'), [
        'code' => 'PROC',
        'name' => 'Duplicate',
    ])->assertSessionHasErrors('code');
});

test('distribution point update persists its name and department', function () {
    $firstDepartment = Department::create(['code' => 'QMS', 'name' => 'Quality', 'type' => 'main']);
    $secondDepartment = Department::create(['code' => 'OPS', 'name' => 'Operations', 'type' => 'main']);
    $point = DistributionPoint::create(['name' => 'Office', 'department_id' => $firstDepartment->id]);

    $this->put(route('distribution-point.update', $point), [
        'name' => 'Main Office',
        'department_id' => $secondDepartment->id,
    ])->assertSessionHasNoErrors();

    $this->assertDatabaseHas('distribution_points', [
        'id' => $point->id,
        'name' => 'Main Office',
        'department_id' => $secondDepartment->id,
    ]);
});

test('measurement device type accepts an optional description and validates code uniqueness', function () {
    $type = MeasurementDeviceType::create(['code' => 'SCALE', 'name' => 'Scale']);

    $this->put(route('measurement-device-type.update', $type), [
        'code' => 'SCALE',
        'name' => 'Precision Scale',
        'description' => null,
    ])->assertSessionHasNoErrors();

    $this->post(route('measurement-device-type.store'), [
        'code' => 'SCALE',
        'name' => 'Duplicate',
    ])->assertSessionHasErrors('code');
});

test('education type name stays unique while allowing an unchanged update', function () {
    $type = EducationType::create(['name' => 'Safety']);

    $this->put(route('education-type.update', $type), ['name' => 'Safety'])
        ->assertSessionHasNoErrors();

    $this->post(route('education-type.store'), ['name' => 'Safety'])
        ->assertSessionHasErrors('name');
});

test('calibration firm endpoints persist validated data', function () {
    $payload = [
        'name' => 'Accredited Calibration',
        'email' => 'lab@example.com',
        'address' => 'Industrial Zone',
        'phone' => '+90 555 000 00 00',
    ];

    $this->post(route('calibration-firm.store'), $payload)->assertSessionHasNoErrors();

    $firm = CalibrationFirm::firstOrFail();
    $this->put(route('calibration-firm.update', $firm), [
        ...$payload,
        'name' => 'Updated Calibration',
    ])->assertSessionHasNoErrors();

    $this->assertDatabaseHas('calibration_firms', [
        'id' => $firm->id,
        'name' => 'Updated Calibration',
    ]);
});
