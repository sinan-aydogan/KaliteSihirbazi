<?php

namespace App\Http\Controllers\MeasurementDevice\Action;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMeasurementDeviceActionRequest;
use App\Http\Requests\UpdateMeasurementDeviceActionRequest;
use App\Models\MeasurementDevice\Action\MeasurementDeviceAction;

class MeasurementDeviceActionController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(StoreMeasurementDeviceActionRequest $request)
    {
        $action = MeasurementDeviceAction::create([
            ...$request->validated(),
            'recorded_by_id' => auth()->id(),
        ]);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.measurementDeviceAction.created', ['measurementDeviceAction' => $action->id])]);

        return redirect()->back();
    }

    public function show(MeasurementDeviceAction $measurementDeviceAction)
    {
        return response()->json($measurementDeviceAction->load(['type', 'recordedBy:id,name']));
    }

    public function edit(MeasurementDeviceAction $measurementDeviceAction)
    {
        return response()->json($measurementDeviceAction);
    }

    public function update(UpdateMeasurementDeviceActionRequest $request, MeasurementDeviceAction $measurementDeviceAction)
    {
        $measurementDeviceAction->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.measurementDeviceAction.updated', ['measurementDeviceAction' => $measurementDeviceAction->id])]);

        return redirect()->back();
    }

    public function destroy(MeasurementDeviceAction $measurementDeviceAction)
    {
        $measurementDeviceAction->delete();

        session()->flash('message', ['type' => 'danger', 'content' => __('messages.measurementDeviceAction.deleted', ['measurementDeviceAction' => $measurementDeviceAction->id])]);

        return redirect()->back();
    }
}
