<?php

namespace App\Http\Controllers;

use App\Models\MeasurementDeviceAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMeasurementDeviceActionRequest;
use App\Http\Requests\UpdateMeasurementDeviceActionRequest;
use Inertia\Inertia;

class MeasurementDeviceActionController extends Controller
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
     * @param  \App\Http\Requests\StoreMeasurementDeviceActionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMeasurementDeviceActionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MeasurementDeviceAction  $measurementDeviceAction
     * @return \Illuminate\Http\Response
     */
    public function show(MeasurementDeviceAction $measurementDeviceAction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MeasurementDeviceAction  $measurementDeviceAction
     * @return \Illuminate\Http\Response
     */
    public function edit(MeasurementDeviceAction $measurementDeviceAction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMeasurementDeviceActionRequest  $request
     * @param  \App\Models\MeasurementDeviceAction  $measurementDeviceAction
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMeasurementDeviceActionRequest $request, MeasurementDeviceAction $measurementDeviceAction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MeasurementDeviceAction  $measurementDeviceAction
     * @return \Illuminate\Http\Response
     */
    public function destroy(MeasurementDeviceAction $measurementDeviceAction)
    {
        //
    }
}
