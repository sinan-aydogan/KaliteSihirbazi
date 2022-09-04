<?php

namespace App\Http\Controllers;

use App\Models\MachineAction;
use App\Http\Requests\StoreMachineActionRequest;
use App\Http\Requests\UpdateMachineActionRequest;

class MachineActionController extends Controller
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
     * @param  \App\Http\Requests\StoreMachineActionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMachineActionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MachineAction  $machineAction
     * @return \Illuminate\Http\Response
     */
    public function show(MachineAction $machineAction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MachineAction  $machineAction
     * @return \Illuminate\Http\Response
     */
    public function edit(MachineAction $machineAction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMachineActionRequest  $request
     * @param  \App\Models\MachineAction  $machineAction
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMachineActionRequest $request, MachineAction $machineAction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MachineAction  $machineAction
     * @return \Illuminate\Http\Response
     */
    public function destroy(MachineAction $machineAction)
    {
        //
    }
}
