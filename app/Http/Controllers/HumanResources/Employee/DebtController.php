<?php

namespace App\Http\Controllers\HumanResources\Employee;

use App\Http\Controllers\Controller;
use App\Models\HumanResources\Employee\Employee;
use Inertia\Inertia;
use Inertia\Response;

class DebtController extends Controller
{
    public function index(Employee $employee): Response
    {
        return Inertia::render('Modules/HumanResources/Employee/Pages/Debt', [
            'employee' => $employee->loadMissing('account', 'department'),
            'debts' => [],
        ]);
    }
}
