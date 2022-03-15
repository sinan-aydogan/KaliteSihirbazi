<?php

namespace App\Http\Controllers;

use App\Models\Capa;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCapaRequest;
use App\Http\Requests\UpdateCapaRequest;
use Inertia\Inertia;

class CapaController extends Controller
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
     * @param  \App\Http\Requests\StoreCapaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCapaRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Capa  $capa
     * @return \Illuminate\Http\Response
     */
    public function show(Capa $capa)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Capa  $capa
     * @return \Illuminate\Http\Response
     */
    public function edit(Capa $capa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCapaRequest  $request
     * @param  \App\Models\Capa  $capa
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCapaRequest $request, Capa $capa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Capa  $capa
     * @return \Illuminate\Http\Response
     */
    public function destroy(Capa $capa)
    {
        //
    }
}
