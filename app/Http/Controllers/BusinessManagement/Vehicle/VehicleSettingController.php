<?php

namespace App\Http\Controllers\BusinessManagement\Vehicle;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VehicleSettingController extends Controller
{
    public function index()
    {
        $settings = Setting::where('module', 'vehicle')->get();
        return Inertia::render('Modules/BusinessManagement/Vehicle/Setting/IndexPage', [
            'settings' => $settings,
        ]);
    }
}
