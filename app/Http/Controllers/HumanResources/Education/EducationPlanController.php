<?php

namespace App\Http\Controllers\HumanResources\Education;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEducationPlanRequest;
use App\Http\Requests\UpdateEducationPlanRequest;
use App\Models\HumanResources\Education\EducationPlan;

class EducationPlanController extends Controller
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
     * @param  \App\Models\HumanResources\Education\EducationPlan  $educationPlan
     * @return \Illuminate\Http\Response
     */
    public function show(EducationPlan $educationPlan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\HumanResources\Education\EducationPlan  $educationPlan
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
     * @param  \App\Models\HumanResources\Education\EducationPlan  $educationPlan
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEducationPlanRequest $request, EducationPlan $educationPlan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\HumanResources\Education\EducationPlan  $educationPlan
     * @return \Illuminate\Http\Response
     */
    public function destroy(EducationPlan $educationPlan)
    {
        //
    }
}
