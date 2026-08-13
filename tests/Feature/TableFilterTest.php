<?php

use App\Models\Department;
use App\Models\HumanResources\Employee\Employee;
use App\Models\User;
use App\Support\TableFilter;
use Inertia\Testing\AssertableInertia as Assert;

test('table filters are applied before pagination', function () {
    Department::create(['code' => 'MNT', 'name' => 'Bakım', 'type' => 'main']);
    Department::create(['code' => 'ACC', 'name' => 'Muhasebe', 'type' => 'main']);

    request()->merge([
        'tableFilters' => json_encode([
            ['key' => 'name', 'comparator' => 'co', 'value' => 'bak'],
        ]),
    ]);

    $results = TableFilter::apply(Department::query())->paginate(10);

    expect($results->total())->toBe(1)
        ->and($results->first()->code)->toBe('MNT');
});

test('multiple table filters are combined and unsupported fields are ignored', function () {
    Department::create(['code' => 'MNT', 'name' => 'Bakım', 'type' => 'main']);
    Department::create(['code' => 'MFG', 'name' => 'Bakım Üretim', 'type' => 'main']);

    request()->merge([
        'tableFilters' => [
            ['key' => 'name', 'comparator' => 'co', 'value' => 'bakım'],
            ['key' => 'code', 'comparator' => 'eq', 'value' => 'MFG'],
            ['key' => 'name; drop table users', 'comparator' => 'co', 'value' => 'x'],
        ],
    ]);

    $results = TableFilter::apply(Department::query())->get();

    expect($results)->toHaveCount(1)
        ->and($results->first()->code)->toBe('MFG');
});

test('employee name filter searches the linked user account name', function () {
    $actor = User::factory()->create();
    $employee = Employee::create([
        'code' => 'EMP-001',
        'name' => null,
        'has_account' => true,
        'employment_date' => now(),
        'status' => 'working',
    ]);
    User::factory()->create(['name' => 'Süper Admin'])->forceFill([
        'accountable_id' => $employee->id,
        'accountable_type' => Employee::class,
    ])->save();

    $filters = json_encode([
        ['key' => 'employeeName', 'comparator' => 'co', 'value' => 'Süper'],
    ]);

    $this->actingAs($actor)
        ->get(route('employee.index', ['tableFilters' => $filters]))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/HumanResources/Employee/IndexPage', false)
            ->where('tableData.total', 1)
            ->where('tableData.data.0.employeeName', 'Süper Admin'));
});
