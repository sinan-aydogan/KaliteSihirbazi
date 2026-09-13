<?php

namespace App\Http\Controllers\MeasurementDevice\Calibration;

use App\Http\Controllers\Controller;
use App\Models\CalibrationTechnician;
use App\Models\MeasurementDevice\Calibration\CalibrationFirm;
use App\Models\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTask;
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
        $data['currentTraceabilityReference'] = $measurementDevice->currentTraceabilityReference();

        $tasks = $measurementDevice->calibrationTasks()
            ->with(['firm:id,name', 'referenceDevice:id,code', 'performedBy.user:id,name', 'measurementPoints'])
            ->get()
            ->map(fn (MeasurementDeviceCalibrationTask $task) => tap($task, function (MeasurementDeviceCalibrationTask $t) {
                $t['certificate_url'] = $t->getFirstMediaUrl('certificate') ?: null;
            }));

        return Inertia::render('Modules/MeasurementDevice/Device/Pages/Calibration', [
            'measurementDevice' => $data,
            'calibrationTasks' => $tasks,
            'calibrationFirms' => CalibrationFirm::all(['id', 'name']),
            'referenceDevices' => MeasurementDevice::referenceStandard()->whereKeyNot($measurementDevice->id)->get(['id', 'code']),
            'calibrationTechnicians' => CalibrationTechnician::active()->with(['user:id,name', 'measurementDeviceTypes:id'])->get(),
        ]);
    }
}
