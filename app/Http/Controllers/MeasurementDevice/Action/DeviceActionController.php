<?php

namespace App\Http\Controllers\MeasurementDevice\Action;

use App\Http\Controllers\Controller;
use App\Models\MeasurementDevice\MeasurementDevice;
use Inertia\Inertia;

class DeviceActionController extends Controller
{
    public function index(MeasurementDevice $measurementDevice): \Inertia\Response
    {
        return Inertia::render('Modules/MeasurementDevice/Device/Pages/Action',[
            'measurementDevice' => $measurementDevice
        ]);
    }
}
