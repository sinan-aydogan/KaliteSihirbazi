<?php

namespace App\Http\Controllers\MeasurementDevice;

use App\Http\Controllers\Controller;
use App\Http\Requests\DecommissionMeasurementDeviceRequest;
use App\Models\MeasurementDevice\MeasurementDevice;
use App\Services\MeasurementDevice\MeasurementDeviceWorkflowService;
use RuntimeException;

class MeasurementDeviceWorkflowController extends Controller
{
    public function __construct(private readonly MeasurementDeviceWorkflowService $measurementDeviceWorkflowService)
    {
    }

    public function decommission(DecommissionMeasurementDeviceRequest $request, MeasurementDevice $measurementDevice)
    {
        return $this->handle(
            fn () => $this->measurementDeviceWorkflowService->decommission($measurementDevice, $request->validated('reason'), $request->user()),
            'decommissioned',
            $measurementDevice
        );
    }

    public function reactivate(MeasurementDevice $measurementDevice)
    {
        return $this->handle(
            fn () => $this->measurementDeviceWorkflowService->reactivate($measurementDevice),
            'reactivated',
            $measurementDevice
        );
    }

    private function handle(callable $action, string $messageKey, MeasurementDevice $measurementDevice)
    {
        try {
            $action();
        } catch (RuntimeException $exception) {
            session()->flash('message', ['type' => 'danger', 'content' => $exception->getMessage()]);

            return redirect()->back();
        }

        session()->flash('message', ['type' => 'success', 'content' => __("messages.measurementDevice.$messageKey", ['measurementDeviceCode' => $measurementDevice->code])]);

        return redirect()->back();
    }
}
