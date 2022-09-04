<?php

namespace App\Http\Controllers;

use App\Models\TakeTimeOff;
use App\Http\Requests\StoreTakeTimeOffRequest;
use App\Http\Requests\UpdateTakeTimeOffRequest;

class TakeTimeOffController extends Controller
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
     * @param  \App\Http\Requests\StoreTakeTimeOffRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTakeTimeOffRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TakeTimeOff  $takeTimeOff
     * @return \Illuminate\Http\Response
     */
    public function show(TakeTimeOff $takeTimeOff)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TakeTimeOff  $takeTimeOff
     * @return \Illuminate\Http\Response
     */
    public function edit(TakeTimeOff $takeTimeOff)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTakeTimeOffRequest  $request
     * @param  \App\Models\TakeTimeOff  $takeTimeOff
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTakeTimeOffRequest $request, TakeTimeOff $takeTimeOff)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TakeTimeOff  $takeTimeOff
     * @return \Illuminate\Http\Response
     */
    public function destroy(TakeTimeOff $takeTimeOff)
    {
        //
    }
}
