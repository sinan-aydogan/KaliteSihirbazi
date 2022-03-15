<?php

namespace App\Http\Controllers;

use App\Models\JobDescription;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreJobDescriptionRequest;
use App\Http\Requests\UpdateJobDescriptionRequest;
use Inertia\Inertia;

class JobDescriptionController extends Controller
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
     * @param  \App\Http\Requests\StoreJobDescriptionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreJobDescriptionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\JobDescription  $jobDescription
     * @return \Illuminate\Http\Response
     */
    public function show(JobDescription $jobDescription)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\JobDescription  $jobDescription
     * @return \Illuminate\Http\Response
     */
    public function edit(JobDescription $jobDescription)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateJobDescriptionRequest  $request
     * @param  \App\Models\JobDescription  $jobDescription
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateJobDescriptionRequest $request, JobDescription $jobDescription)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\JobDescription  $jobDescription
     * @return \Illuminate\Http\Response
     */
    public function destroy(JobDescription $jobDescription)
    {
        //
    }
}
