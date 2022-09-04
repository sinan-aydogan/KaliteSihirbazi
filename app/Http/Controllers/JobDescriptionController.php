<?php

namespace App\Http\Controllers;

use App\Models\JobDescription;
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
        return Inertia::render("Modules/HumanResources/JobDescription/Index", [
            'tableData' => JobDescription::latest('id')->paginate(10),
        ]);
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
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreJobDescriptionRequest $request)
    {
        $jobDescription = new JobDescription;
        $jobDescription->code = $request->code;
        $jobDescription->name = $request->name;

        $jobDescription->save();

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.jobDescription.created', ['jobDescription' => $jobDescription->name])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\JobDescription  $jobDescription
     * @return \Inertia\Response
     */
    public function show(JobDescription $jobDescription)
    {
        $data = [
            'id' => $jobDescription->id,
            'code' => $jobDescription->code,
            'name' => $jobDescription->name,
        ];

        return Inertia::render('Modules/HumanResources/JobDescription/Show', [
            'data' => $data
        ]);
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
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(JobDescription $jobDescription)
    {
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.jobDescription.deleted', ['jobDescription' => $jobDescription->name])]);

        $jobDescription->delete();

        return redirect()->route('job-description.index');
    }
}
