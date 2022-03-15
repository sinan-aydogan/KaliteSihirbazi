<?php

namespace App\Http\Controllers;

use App\Models\Deparment;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDeparmentRequest;
use App\Http\Requests\UpdateDeparmentRequest;
use Inertia\Inertia;

class DeparmentController extends Controller
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
     * @param  \App\Http\Requests\StoreDeparmentRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDeparmentRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Deparment  $deparment
     * @return \Illuminate\Http\Response
     */
    public function show(Deparment $deparment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Deparment  $deparment
     * @return \Illuminate\Http\Response
     */
    public function edit(Deparment $deparment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDeparmentRequest  $request
     * @param  \App\Models\Deparment  $deparment
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDeparmentRequest $request, Deparment $deparment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Deparment  $deparment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Deparment $deparment)
    {
        //
    }
}
