<?php

namespace App\Http\Controllers;

use App\Models\EducationPlan;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEducationPlanRequest;
use App\Http\Requests\UpdateEducationPlanRequest;
use Inertia\Inertia;

class EducationPlanController extends Controller
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
     * @param  \App\Http\Requests\StoreEducationPlanRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEducationPlanRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\EducationPlan  $educationPlan
     * @return \Illuminate\Http\Response
     */
    public function show(EducationPlan $educationPlan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\EducationPlan  $educationPlan
     * @return \Illuminate\Http\Response
     */
    public function edit(EducationPlan $educationPlan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateEducationPlanRequest  $request
     * @param  \App\Models\EducationPlan  $educationPlan
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEducationPlanRequest $request, EducationPlan $educationPlan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\EducationPlan  $educationPlan
     * @return \Illuminate\Http\Response
     */
    public function destroy(EducationPlan $educationPlan)
    {
        //
    }
}
