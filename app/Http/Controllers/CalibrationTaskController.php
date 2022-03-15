<?php

namespace App\Http\Controllers;

use App\Models\CalibrationTask;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCalibrationTaskRequest;
use App\Http\Requests\UpdateCalibrationTaskRequest;
use Inertia\Inertia;

class CalibrationTaskController extends Controller
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
     * @param  \App\Http\Requests\StoreCalibrationTaskRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCalibrationTaskRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CalibrationTask  $calibrationTask
     * @return \Illuminate\Http\Response
     */
    public function show(CalibrationTask $calibrationTask)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CalibrationTask  $calibrationTask
     * @return \Illuminate\Http\Response
     */
    public function edit(CalibrationTask $calibrationTask)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCalibrationTaskRequest  $request
     * @param  \App\Models\CalibrationTask  $calibrationTask
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCalibrationTaskRequest $request, CalibrationTask $calibrationTask)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CalibrationTask  $calibrationTask
     * @return \Illuminate\Http\Response
     */
    public function destroy(CalibrationTask $calibrationTask)
    {
        //
    }
}
