<?php

namespace App\Http\Controllers;

use App\Models\Standard;
use App\Http\Requests\StoreStandardRequest;
use App\Http\Requests\UpdateStandardRequest;

class StandardController extends Controller
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
     * @param  \App\Http\Requests\StoreStandardRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreStandardRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Standard  $standard
     * @return \Illuminate\Http\Response
     */
    public function show(Standard $standard)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Standard  $standard
     * @return \Illuminate\Http\Response
     */
    public function edit(Standard $standard)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateStandardRequest  $request
     * @param  \App\Models\Standard  $standard
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateStandardRequest $request, Standard $standard)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Standard  $standard
     * @return \Illuminate\Http\Response
     */
    public function destroy(Standard $standard)
    {
        //
    }
}
