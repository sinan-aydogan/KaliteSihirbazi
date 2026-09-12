<?php

namespace App\Http\Controllers\MeasurementDevice\Calibration;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMeasurementDeviceCalibrationTaskRequest;
use App\Http\Requests\UpdateMeasurementDeviceCalibrationTaskRequest;
use App\Models\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTask;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;

class MeasurementDeviceCalibrationTaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return RedirectResponse
     */
    public function store(StoreMeasurementDeviceCalibrationTaskRequest $request)
    {
        $measurementDeviceCalibration = MeasurementDeviceCalibrationTask::create($request->safe()->except('certificate'));

        if ($request->hasFile('certificate')) {
            $measurementDeviceCalibration->addMedia($request->file('certificate'))->toMediaCollection('certificate');
        }

        session()->flash('message', ['type' => 'success', 'content' => __('messages.measurementDeviceCalibration.created', ['measurementDeviceCalibration' => $measurementDeviceCalibration->id])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @return Response
     */
    public function show(MeasurementDeviceCalibrationTask $measurementDeviceCalibration)
    {
        return response()->json($measurementDeviceCalibration->load(['device', 'firm']));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return Response
     */
    public function edit(MeasurementDeviceCalibrationTask $measurementDeviceCalibration)
    {
        return response()->json($measurementDeviceCalibration);
    }

    /**
     * Update the specified resource in storage.
     *
     * @return Response
     */
    public function update(UpdateMeasurementDeviceCalibrationTaskRequest $request, MeasurementDeviceCalibrationTask $measurementDeviceCalibration)
    {
        $measurementDeviceCalibration->update($request->safe()->except('certificate'));

        if ($request->hasFile('certificate')) {
            $measurementDeviceCalibration->addMedia($request->file('certificate'))->toMediaCollection('certificate');
        }

        session()->flash('message', ['type' => 'success', 'content' => __('messages.measurementDeviceCalibration.updated', ['measurementDeviceCalibration' => $measurementDeviceCalibration->id])]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return RedirectResponse
     */
    public function destroy(MeasurementDeviceCalibrationTask $measurementDeviceCalibration)
    {
        session()->flash('message', ['type' => 'danger', 'content' => __('messages.measurementDeviceCalibration.deleted', ['measurementDeviceCalibration' => $measurementDeviceCalibration->id])]);

        $measurementDeviceCalibration->delete();

        return redirect()->back();
    }
}
