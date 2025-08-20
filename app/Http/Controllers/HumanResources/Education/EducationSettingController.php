<?php

namespace App\Http\Controllers\HumanResources\Education;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EducationSettingController extends Controller
{
    public function index()
    {
        $settings = Setting::where('module', 'education')->get();
        return Inertia::render('Modules/HumanResources/Education/Setting/IndexPage', [
            'settings' => $settings,
        ]);
    }
}
