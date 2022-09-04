<?php

namespace App\Http\Controllers;

use App\Models\EmploymentType;
use App\Http\Requests\StoreEmploymentTypeRequest;
use App\Http\Requests\UpdateEmploymentTypeRequest;

class EmploymentTypeController extends Controller
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
     * @param  \App\Http\Requests\StoreEmploymentTypeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEmploymentTypeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\EmploymentType  $employmentType
     * @return \Illuminate\Http\Response
     */
    public function show(EmploymentType $employmentType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\EmploymentType  $employmentType
     * @return \Illuminate\Http\Response
     */
    public function edit(EmploymentType $employmentType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateEmploymentTypeRequest  $request
     * @param  \App\Models\EmploymentType  $employmentType
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEmploymentTypeRequest $request, EmploymentType $employmentType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\EmploymentType  $employmentType
     * @return \Illuminate\Http\Response
     */
    public function destroy(EmploymentType $employmentType)
    {
        //
    }
}
