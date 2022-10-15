<?php

namespace App\Http\Controllers\MeasurementDevice\Calibration;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCalibrationFirmRequest;
use App\Http\Requests\UpdateCalibrationFirmRequest;
use App\Models\MeasurementDevice\Calibration\CalibrationFirm;

class CalibrationFirmController extends Controller
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
     * @param  \App\Http\Requests\StoreCalibrationFirmRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCalibrationFirmRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MeasurementDevice\Calibration\CalibrationFirm  $calibrationFirm
     * @return \Illuminate\Http\Response
     */
    public function show(CalibrationFirm $calibrationFirm)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MeasurementDevice\Calibration\CalibrationFirm  $calibrationFirm
     * @return \Illuminate\Http\Response
     */
    public function edit(CalibrationFirm $calibrationFirm)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCalibrationFirmRequest  $request
     * @param  \App\Models\MeasurementDevice\Calibration\CalibrationFirm  $calibrationFirm
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCalibrationFirmRequest $request, CalibrationFirm $calibrationFirm)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MeasurementDevice\Calibration\CalibrationFirm  $calibrationFirm
     * @return \Illuminate\Http\Response
     */
    public function destroy(CalibrationFirm $calibrationFirm)
    {
        //
    }
}
