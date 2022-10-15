<?php

namespace App\Http\Controllers\HumanResources\Employee;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\HumanResources\Employee\Employee;
use App\Models\HumanResources\JobDescription\JobDescription;
use Inertia\Inertia;

class JobAssignmentController extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        $employee['jdAssignments'] = $employee->jdAssignments();

        return Inertia::render('Modules/HumanResources/Employee/Pages/JobDescriptionAssignment', [
            'employee'=> $employee,
            'departments' => Department::all(['id', 'name']),
            'jobDescriptions' => JobDescription::all(['id', 'name']),
            'employees' => Employee::all(['id', 'name']),
        ]);
    }
}
