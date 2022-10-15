<?php

namespace App\Http\Controllers\HumanResources\JobDescription;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreJobDescriptionRequest;
use App\Http\Requests\UpdateJobDescriptionRequest;
use App\Models\Department;
use App\Models\HumanResources\JobDescription\JobDescription;
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
        return Inertia::render("Modules/HumanResources/JobDescription/IndexPage", [
            'tableData' => JobDescription::with('department:id,name')->latest('id')->paginate(10),
            'departments' => Department::all(['id', 'name'])
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
     * @param \App\Http\Requests\StoreJobDescriptionRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreJobDescriptionRequest $request)
    {
        $jobDescription = new JobDescription;
        $jobDescription->code = $request->code;
        $jobDescription->name = $request->name;
        $jobDescription->description = $request->description;
        $jobDescription->staff_type = $request->staff_type;
        $jobDescription->department_id = $request->department_id;
        $jobDescription->responsibilities = $request->responsibilities;
        $jobDescription->powers = $request->powers;
        $jobDescription->requirements = $request->requirements;
        $jobDescription->skills = $request->skills;
        $jobDescription->working_conditions = $request->working_conditions;
        $jobDescription->working_tools = $request->working_tools;
        $jobDescription->working_hours = $request->working_hours;
        $jobDescription->overtime_status = $request->overtime_status;
        $jobDescription->travel_status = $request->travel_status;

        $jobDescription->save();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.jobDescription.created', ['jobDescription' => $jobDescription->name])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\HumanResources\JobDescription\JobDescription $jobDescription
     * @return \Inertia\Response
     */
    public function show(JobDescription $jobDescription)
    {
        $data = [
            'id' => $jobDescription->id,
            'code' => $jobDescription->code,
            'name' => $jobDescription->name,
            'description' => $jobDescription->description,
            'staff_type' => $jobDescription->staff_type,
            'department_id' => $jobDescription->department_id,
            'responsibilities' => $jobDescription->responsibilities,
            'powers' => $jobDescription->powers,
            'requirements' => $jobDescription->requirements,
            'skills' => $jobDescription->skills,
            'working_conditions' => $jobDescription->working_conditions,
            'working_tools' => $jobDescription->working_tools,
            'working_hours' => $jobDescription->working_hours,
            'overtime_status' => $jobDescription->overtime_status,
            'travel_status' => $jobDescription->travel_status,
        ];

        return Inertia::render('Modules/HumanResources/JobDescription/ShowPage', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\HumanResources\JobDescription\JobDescription $jobDescription
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(JobDescription $jobDescription)
    {
        return response()->json($jobDescription);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateJobDescriptionRequest $request
     * @param \App\Models\HumanResources\JobDescription\JobDescription $jobDescription
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateJobDescriptionRequest $request, JobDescription $jobDescription)
    {
        $jobDescription->code = $request->code;
        $jobDescription->name = $request->name;
        $jobDescription->department_id = $request->department_id;
        $jobDescription->type = $request->type;
        $jobDescription->employee_id = $request->employee_id;

        $jobDescription->save();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.jobDescription.updated', ['jobDescription' => $jobDescription->name])]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\HumanResources\JobDescription\JobDescription $jobDescription
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(JobDescription $jobDescription)
    {
        session()->flash('message', ['type' => 'danger', 'content' => __('messages.jobDescription.deleted', ['jobDescription' => $jobDescription->name])]);

        $jobDescription->delete();

        return redirect()->route('job-description.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\HumanResources\JobDescription\JobDescription $jobDescription
     * @return \Illuminate\Http\RedirectResponse
     */
    public function permanentDestroy(JobDescription $jobDescription)
    {
        session()->flash('message', ['type' => 'danger', 'content' => __('messages.jobDescription.permanentDeleted', ['jobDescription' => $jobDescription->name])]);

        $jobDescription->forceDelete();

        return redirect()->route('job-description.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\HumanResources\JobDescription\JobDescription $jobDescription
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore(JobDescription $jobDescription)
    {
        session()->flash('message', ['type' => 'info', 'content' => __('messages.jobDescription.restored', ['jobDescription' => $jobDescription->name])]);

        $jobDescription->restore();

        return redirect()->route('job-description.index');
    }
}
