<?php

namespace App\Http\Controllers\HumanResources\JobDescription;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreJobDescriptionAssignmentRequest;
use App\Http\Requests\UpdateJobDescriptionAssignmentRequest;
use App\Models\HumanResources\JobDescription\JobDescriptionAssignment;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;

class JobDescriptionAssignmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return RedirectResponse
     */
    public function store(StoreJobDescriptionAssignmentRequest $request)
    {
        $assignment = JobDescriptionAssignment::create($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.jobDescriptionAssignment.created', ['employee' => $assignment->employee->employeeName, 'jobDescription' => $assignment->jobDescription->name])]);

        return to_route('employee-jd-assignment.index', $request->employee_id);
    }

    /**
     * Display the specified resource.
     *
     * @return Response
     */
    public function show(JobDescriptionAssignment $jobDescriptionAssignment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return Response
     */
    public function edit(JobDescriptionAssignment $jobDescriptionAssignment)
    {
        return response()->json($jobDescriptionAssignment);
    }

    /**
     * Update the specified resource in storage.
     *
     * @return Response
     */
    public function update(UpdateJobDescriptionAssignmentRequest $request, JobDescriptionAssignment $jobDescriptionAssignment)
    {
        $jobDescriptionAssignment->update($request->validated());

        return to_route('employee-jd-assignment.index', $jobDescriptionAssignment->employee_id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return RedirectResponse
     */
    public function destroy(JobDescriptionAssignment $jobDescriptionAssignment)
    {
        $employee_id = $jobDescriptionAssignment->employee->id;
        session()->flash('message', ['type' => 'danger', 'content' => __('messages.jobDescriptionAssignment.deleted', ['employee' => $jobDescriptionAssignment->employee->employeeName, 'jobDescription' => $jobDescriptionAssignment->jobDescription->name])]);

        $jobDescriptionAssignment->delete();

        return to_route('employee-jd-assignment.index', $employee_id);
    }
}
