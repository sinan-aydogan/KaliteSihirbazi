<?php

use App\Models\BusinessManagement\Vehicle\VehicleStatus;
use App\Models\BusinessManagement\Vehicle\VehicleType;
use App\Models\Department;
use App\Models\User;
use App\Models\Warehouse\WarehouseType;

beforeEach(function () {
    $this->actingAs(User::factory()->create());
});

test('department can be created without a manager', function () {
    $response = $this->post(route('department.store'), [
        'code' => 'QUALITY',
        'name' => 'Quality',
        'type' => 'main',
        'employee_id' => null,
    ]);

    $response->assertRedirect();
    $this->assertDatabaseHas('departments', [
        'code' => 'QUALITY',
        'employee_id' => null,
        'department_id' => null,
    ]);
});

test('department cannot be its own parent', function () {
    $department = Department::create([
        'code' => 'SALES',
        'name' => 'Sales',
        'type' => 'main',
    ]);

    $this->put(route('department.update', $department), [
        'code' => $department->code,
        'name' => $department->name,
        'type' => 'sub',
        'department_id' => $department->id,
    ])->assertSessionHasErrors('department_id');
});

test('warehouse type code stays unique while allowing an unchanged update', function () {
    $type = WarehouseType::create(['code' => 'MAIN', 'name' => 'Main']);

    $this->put(route('warehouse-type.update', $type), [
        'code' => 'MAIN',
        'name' => 'Main Warehouse',
    ])->assertSessionHasNoErrors();

    $this->post(route('warehouse-type.store'), [
        'code' => 'MAIN',
        'name' => 'Duplicate',
    ])->assertSessionHasErrors('code');
});

test('vehicle type and status names are unique', function () {
    $type = VehicleType::create(['name' => 'Passenger']);
    $status = VehicleStatus::create(['name' => 'Active']);

    $this->put(route('vehicle-type.update', $type), ['name' => 'Passenger'])
        ->assertSessionHasNoErrors();
    $this->put(route('vehicle-status.update', $status), ['name' => 'Active'])
        ->assertSessionHasNoErrors();

    $this->post(route('vehicle-type.store'), ['name' => 'Passenger'])
        ->assertSessionHasErrors('name');
    $this->post(route('vehicle-status.store'), ['name' => 'Active'])
        ->assertSessionHasErrors('name');
});
