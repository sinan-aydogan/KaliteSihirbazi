<?php

namespace App\Http\Controllers\HumanResources\JobDescription;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreJobDescriptionRequest;
use App\Http\Requests\UpdateJobDescriptionRequest;
use App\Models\Department;
use App\Models\HumanResources\JobDescription\JobDescription;
use Illuminate\Support\Facades\Log;
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
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreJobDescriptionRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreJobDescriptionRequest $request)
    {
        try {
            $jobDescription = JobDescription::create($request->validated());

            session()->flash('message', [
                'type' => 'success',
                'content' => __('messages.jobDescription.created', ['jobDescription' => $jobDescription->name])
            ]);

            return redirect()->back()->with([
                'jobDescription' => $jobDescription,
            ]);
        } catch (\Exception $e) {
            dd($e->getMessage());
            session()->flash('message', [
                'type'=> 'error',
                'content'=>__('messages.jobDescription.creation_failed')
            ]);

            return redirect()->back();
        }
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
        try {
            $jobDescription->update($request->validated());

            session()->flash('message', [
                'type' => 'success',
                'content' => __('messages.jobDescription.updated', ['jobDescription' => $jobDescription->name])
            ]);

            return redirect()->back()->with([
                'jobDescription' => $jobDescription,
            ]);
        } catch (\Exception $e) {
            session()->flash('message', [
                'type'=> 'error',
                'content'=>__('messages.jobDescription.update_failed')
            ]);

            return redirect()->back();
        }
    }

    public function destroy(JobDescription $jobDescription)
    {
        session()->flash('message',
        [
            'type' => 'danger',
            'content' => __('messages.jobDescription.deleted', ['jobDescription' => $jobDescription->name])
        ]);

        $jobDescription->delete();

         return redirect()->route('job-description.index');
    }

    public function permanentDestroy(JobDescription $jobDescription)
    {
        session()->flash('message',
        [
            'type' => 'danger',
            'content' => __('messages.jobDescription.permanentDeleted', ['jobDescription' => $jobDescription->name])
        ]);

        $jobDescription->forceDelete();

        return redirect()->route('job-description.index');
    }

    public function restore(JobDescription $jobDescription)
    {
        session()->flash('message',
        [
            'type' => 'info',
            'content' => __('messages.jobDescription.restored', ['jobDescription' => $jobDescription->name])
        ]);

        $jobDescription->restore();

        return redirect()->route('job-description.index');
    }
}
