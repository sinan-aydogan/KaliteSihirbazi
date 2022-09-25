<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\Employee;
use App\Models\JobDescription;
use Illuminate\Http\Request;
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
