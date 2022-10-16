<?php

namespace App\Http\Controllers\MeasurementDevice\Calibration;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMeasurementDeviceCalibrationTaskRequest;
use App\Http\Requests\UpdateMeasurementDeviceCalibrationTaskRequest;
use App\Models\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTask;

class MeasurementDeviceCalibrationTaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreMeasurementDeviceCalibrationTaskRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreMeasurementDeviceCalibrationTaskRequest $request)
    {
        $measurementDeviceCalibration = new MeasurementDeviceCalibrationTask;
        $measurementDeviceCalibration->planned_date = $request->planned_date;
        $measurementDeviceCalibration->measurement_device_id = $request->measurement_device_id;
        $measurementDeviceCalibration->calibration_firm_id = $request->calibration_firm_id;
        $measurementDeviceCalibration->price = $request->price;
        $measurementDeviceCalibration->currency = $request->currency;

        $measurementDeviceCalibration->save();

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.measurementDeviceCalibration.created', ['measurementDeviceCalibration' => $measurementDeviceCalibration->id])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTask  $measurementDeviceCalibrationTask
     * @return \Illuminate\Http\Response
     */
    public function show(MeasurementDeviceCalibrationTask $measurementDeviceCalibrationTask)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTask  $measurementDeviceCalibrationTask
     * @return \Illuminate\Http\Response
     */
    public function edit(MeasurementDeviceCalibrationTask $measurementDeviceCalibrationTask)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMeasurementDeviceCalibrationTaskRequest  $request
     * @param  \App\Models\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTask  $measurementDeviceCalibrationTask
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMeasurementDeviceCalibrationTaskRequest $request, MeasurementDeviceCalibrationTask $measurementDeviceCalibrationTask)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTask  $measurementDeviceCalibration
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(MeasurementDeviceCalibrationTask $measurementDeviceCalibration)
    {
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.measurementDeviceCalibration.deleted', ['measurementDeviceCalibration' => $measurementDeviceCalibration->id])]);

        $measurementDeviceCalibration->delete();

        return redirect()->back();
    }
}
