<?php

namespace App\Http\Controllers\HumanResources\Employee;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\HumanResources\Employee\Employee;
use Inertia\Inertia;
use Inertia\Response;

class EmploymentInfo extends Controller
{
    public function index(Employee $employee): Response
    {
        return Inertia::render('Modules/HumanResources/Employee/Pages/EmploymentInfo', [
            'employee' => $employee,
            'departments' => Department::all(['id', 'name']),
        ]);
    }
}
