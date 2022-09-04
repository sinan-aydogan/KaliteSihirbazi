<?php

namespace App\Http\Controllers;

use App\Models\ConsumableMaterial;
use App\Http\Requests\StoreConsumableMaterialRequest;
use App\Http\Requests\UpdateConsumableMaterialRequest;

class ConsumableMaterialController extends Controller
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
     * @param  \App\Http\Requests\StoreConsumableMaterialRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreConsumableMaterialRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ConsumableMaterial  $consumableMaterial
     * @return \Illuminate\Http\Response
     */
    public function show(ConsumableMaterial $consumableMaterial)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ConsumableMaterial  $consumableMaterial
     * @return \Illuminate\Http\Response
     */
    public function edit(ConsumableMaterial $consumableMaterial)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateConsumableMaterialRequest  $request
     * @param  \App\Models\ConsumableMaterial  $consumableMaterial
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateConsumableMaterialRequest $request, ConsumableMaterial $consumableMaterial)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ConsumableMaterial  $consumableMaterial
     * @return \Illuminate\Http\Response
     */
    public function destroy(ConsumableMaterial $consumableMaterial)
    {
        //
    }
}
