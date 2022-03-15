<?php

namespace App\Http\Controllers;

use App\Models\MeasurementDevice;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMeasurementDeviceRequest;
use App\Http\Requests\UpdateMeasurementDeviceRequest;
use Inertia\Inertia;

class MeasurementDeviceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('ComingSoon');
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
     * @param  \App\Http\Requests\StoreMeasurementDeviceRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMeasurementDeviceRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MeasurementDevice  $measurementDevice
     * @return \Illuminate\Http\Response
     */
    public function show(MeasurementDevice $measurementDevice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MeasurementDevice  $measurementDevice
     * @return \Illuminate\Http\Response
     */
    public function edit(MeasurementDevice $measurementDevice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMeasurementDeviceRequest  $request
     * @param  \App\Models\MeasurementDevice  $measurementDevice
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMeasurementDeviceRequest $request, MeasurementDevice $measurementDevice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MeasurementDevice  $measurementDevice
     * @return \Illuminate\Http\Response
     */
    public function destroy(MeasurementDevice $measurementDevice)
    {
        //
    }
}
