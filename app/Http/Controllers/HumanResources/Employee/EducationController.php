<?php

namespace App\Http\Controllers\HumanResources\Employee;

use App\Http\Controllers\Controller;
use App\Models\HumanResources\Education\EducationParticipation;
use App\Models\HumanResources\Employee\Employee;
use Inertia\Inertia;
use Inertia\Response;

class EducationController extends Controller
{
    public function index(Employee $employee): Response
    {
        $employee->loadMissing('account', 'department');
        $educations = $employee->account
            ? EducationParticipation::query()
                ->with('education')
                ->where('user_id', $employee->account->id)
                ->latest('id')
                ->get()
            : collect();

        return Inertia::render('Modules/HumanResources/Employee/Pages/Education', [
            'employee' => $employee,
            'educations' => $educations,
        ]);
    }
}
