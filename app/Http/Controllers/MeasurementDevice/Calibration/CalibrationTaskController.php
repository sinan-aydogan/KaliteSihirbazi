<?php

namespace App\Http\Controllers\MeasurementDevice\Calibration;

use App\Http\Controllers\Controller;
use App\Models\MeasurementDevice\Calibration\CalibrationFirm;
use App\Models\MeasurementDevice\MeasurementDevice;
use Inertia\Inertia;

class CalibrationTaskController extends Controller
{
    public function index(MeasurementDevice $measurementDevice): \Inertia\Response
    {
        /*Measurement Device*/
        $data = $measurementDevice;
        $data['department'] = $measurementDevice->department;
        $data['type'] = $measurementDevice->type;
        $data['calibrationSupervisor'] = $measurementDevice->calibrationSupervisor;
        $data['deviceSupervisor'] = $measurementDevice->deviceSupervisor;

        return Inertia::render('Modules/MeasurementDevice/Device/Pages/Calibration',[
            'measurementDevice' => $data,
            'calibrationTasks'=> $measurementDevice->calibrationTasks()->with('firm:id,name')->get(),
            'calibrationFirms' => CalibrationFirm::all(['id', 'name'])
        ]);
    }
}
