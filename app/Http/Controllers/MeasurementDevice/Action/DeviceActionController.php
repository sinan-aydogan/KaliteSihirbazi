<?php

namespace App\Http\Controllers\MeasurementDevice\Action;

use App\Http\Controllers\Controller;
use App\Models\MeasurementDevice\Action\MeasurementDeviceActionType;
use App\Models\MeasurementDevice\MeasurementDevice;
use Inertia\Inertia;

class DeviceActionController extends Controller
{
    public function index(MeasurementDevice $measurementDevice): \Inertia\Response
    {
        $measurementDevice->load('type');

        $actions = $measurementDevice->actions()
            ->with(['type:id,name', 'recordedBy:id,name'])
            ->latest('started_at')
            ->get();

        return Inertia::render('Modules/MeasurementDevice/Device/Pages/Action', [
            'measurementDevice' => $measurementDevice,
            'actions' => $actions,
            'actionTypes' => MeasurementDeviceActionType::orderBy('sort_order')->get(['id', 'name']),
        ]);
    }
}
