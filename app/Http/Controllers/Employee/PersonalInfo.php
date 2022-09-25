<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PersonalInfo extends Controller
{
    public function index(Employee $employee): \Inertia\Response
    {
        return Inertia::render('Modules/HumanResources/Employee/Pages/PersonalInfo', [
            'employee'=> $employee
        ]);
    }
}
