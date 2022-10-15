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
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMeasurementDeviceCalibrationTaskRequest $request)
    {
        //
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
     * @param  \App\Models\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTask  $measurementDeviceCalibrationTask
     * @return \Illuminate\Http\Response
     */
    public function destroy(MeasurementDeviceCalibrationTask $measurementDeviceCalibrationTask)
    {
        //
    }
}
