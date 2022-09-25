<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\JobDescriptionAssignment;
use App\Http\Requests\StoreJobDescriptionAssignmentRequest;
use App\Http\Requests\UpdateJobDescriptionAssignmentRequest;

class JobDescriptionAssignmentController extends Controller
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
     * @param  \App\Http\Requests\StoreJobDescriptionAssignmentRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreJobDescriptionAssignmentRequest $request)
    {
        $assigment = JobDescriptionAssignment::create([
            'employee_id' => $request->employee_id,
            'job_description_id' => $request->job_description_id,
            'assignment_date' => $request->assignment_date,
            'appointer_id' => $request->appointer_id,
        ]);

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.jobDescriptionAssignment.created', ['employee'=> $assigment->employee->employeeName, 'jobDescription' => $assigment->jobDescription->name])]);

        return to_route('employee-jd-assignment.index',$request->employee_id);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\JobDescriptionAssignment  $jobDescriptionAssignment
     * @return \Illuminate\Http\Response
     */
    public function show(JobDescriptionAssignment $jobDescriptionAssignment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\JobDescriptionAssignment  $jobDescriptionAssignment
     * @return \Illuminate\Http\Response
     */
    public function edit(JobDescriptionAssignment $jobDescriptionAssignment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateJobDescriptionAssignmentRequest  $request
     * @param  \App\Models\JobDescriptionAssignment  $jobDescriptionAssignment
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateJobDescriptionAssignmentRequest $request, JobDescriptionAssignment $jobDescriptionAssignment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\JobDescriptionAssignment  $jobDescriptionAssignment
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(JobDescriptionAssignment $jobDescriptionAssignment)
    {
        $employee_id = $jobDescriptionAssignment->employee->id;
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.jobDescriptionAssignment.deleted', ['employee'=> $jobDescriptionAssignment->employee->employeeName, 'jobDescription' => $jobDescriptionAssignment->jobDescription->name])]);

        $jobDescriptionAssignment->delete();

        return to_route('employee-jd-assignment.index',$employee_id);
    }
}
