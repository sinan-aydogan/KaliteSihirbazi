<?php

namespace App\Http\Controllers;

use App\Models\ImprovementWork;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreImprovementWorkRequest;
use App\Http\Requests\UpdateImprovementWorkRequest;
use Inertia\Inertia;

class ImprovementWorkController extends Controller
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
     * @param  \App\Http\Requests\StoreImprovementWorkRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreImprovementWorkRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ImprovementWork  $improvementWork
     * @return \Illuminate\Http\Response
     */
    public function show(ImprovementWork $improvementWork)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ImprovementWork  $improvementWork
     * @return \Illuminate\Http\Response
     */
    public function edit(ImprovementWork $improvementWork)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateImprovementWorkRequest  $request
     * @param  \App\Models\ImprovementWork  $improvementWork
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateImprovementWorkRequest $request, ImprovementWork $improvementWork)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ImprovementWork  $improvementWork
     * @return \Illuminate\Http\Response
     */
    public function destroy(ImprovementWork $improvementWork)
    {
        //
    }
}
