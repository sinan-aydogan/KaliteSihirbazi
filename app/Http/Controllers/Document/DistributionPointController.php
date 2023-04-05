<?php

namespace App\Http\Controllers\Document;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDistributionPointRequest;
use App\Http\Requests\UpdateDistributionPointRequest;
use App\Models\Document\DistributionPoint;

class DistributionPointController extends Controller
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
     * @param  \App\Http\Requests\StoreDistributionPointRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDistributionPointRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Document\DistributionPoint  $distributionPoint
     * @return \Illuminate\Http\Response
     */
    public function show(DistributionPoint $distributionPoint)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Document\DistributionPoint  $distributionPoint
     * @return \Illuminate\Http\Response
     */
    public function edit(DistributionPoint $distributionPoint)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDistributionPointRequest  $request
     * @param  \App\Models\Document\DistributionPoint  $distributionPoint
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDistributionPointRequest $request, DistributionPoint $distributionPoint)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Document\DistributionPoint  $distributionPoint
     * @return \Illuminate\Http\Response
     */
    public function destroy(DistributionPoint $distributionPoint)
    {
        //
    }
}
