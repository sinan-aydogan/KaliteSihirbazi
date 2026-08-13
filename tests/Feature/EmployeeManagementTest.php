<?php

use App\Models\Department;
use App\Models\HumanResources\Employee\Employee;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('authenticated user can open the employee index page', function () {
    $this->actingAs(User::factory()->create())
        ->get(route('employee.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/HumanResources/Employee/IndexPage', false)
            ->has('tableData')
            ->has('departments'));
});

test('employee index serializes account avatar data', function () {
    $department = Department::factory()->create([
        'code' => 'HR',
        'name' => 'Human Resources',
    ]);
    $employee = Employee::factory()->create(['department_id' => $department->id]);
    User::factory()->create([
        'accountable_id' => $employee->id,
        'accountable_type' => Employee::class,
    ]);

    $this->actingAs(User::factory()->create())
        ->get(route('employee.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->where('tableData.data.0.account.accountable_id', $employee->id)
            ->has('tableData.data.0.account.profile_photo_url'));
});

test('employee detail tabs return their inertia pages', function (string $routeName, string $component) {
    $department = Department::factory()->create([
        'code' => 'OPS',
        'name' => 'Operations',
    ]);
    $employee = Employee::factory()->create(['department_id' => $department->id]);

    $this->actingAs(User::factory()->create())
        ->get(route($routeName, $employee))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component($component, false)
            ->where('employee.id', $employee->id));
})->with([
    ['employee-time-off.index', 'Modules/HumanResources/Employee/Pages/TimeOff'],
    ['employee-debt.index', 'Modules/HumanResources/Employee/Pages/Debt'],
    ['employee-education.index', 'Modules/HumanResources/Employee/Pages/Education'],
]);

test('legacy employee detail route redirects to personal information', function () {
    $employee = Employee::factory()->create(['department_id' => null]);

    $this->actingAs(User::factory()->create())
        ->get(route('employee.show', $employee))
        ->assertRedirect(route('employee-personal-info.index', $employee));
});
