<?php

namespace App\Http\Controllers\MeasurementDevice;

use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\HumanResources\Employee\Employee;
use App\Models\MeasurementDevice\MeasurementDevice;
use App\Models\MeasurementDevice\MeasurementDeviceType;
use Inertia\Inertia;

class DeviceInfoController extends Controller
{
    public function index(MeasurementDevice $measurementDevice): \Inertia\Response
    {
        $data = $measurementDevice;
        $data['department'] = $measurementDevice->department;
        $data['type'] = $measurementDevice->type;
        $data['calibrationSupervisor'] = $measurementDevice->calibrationSupervisor;
        $data['deviceSupervisor'] = $measurementDevice->deviceSupervisor;

        return Inertia::render('Modules/MeasurementDevice/Device/Pages/Info',[
            'measurementDevice' => $data,
            'measurementDeviceTypes' => MeasurementDeviceType::all(['id', 'name']),
            'departments' => Department::all(['id', 'name']),
            'employees' => Employee::all(['id']),
        ]);
    }
}
