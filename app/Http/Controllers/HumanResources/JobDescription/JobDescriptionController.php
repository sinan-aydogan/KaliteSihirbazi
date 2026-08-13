<?php

namespace App\Http\Controllers\HumanResources\JobDescription;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreJobDescriptionRequest;
use App\Http\Requests\UpdateJobDescriptionRequest;
use App\Models\Department;
use App\Models\HumanResources\JobDescription\JobDescription;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class JobDescriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Inertia::render('Modules/HumanResources/JobDescription/IndexPage', [
            'tableData' => $this->tableFilter(JobDescription::with('department:id,name'), [
                'department_id' => ['relation' => 'department', 'column' => 'name'],
            ])->latest('id')->paginate(10)->withQueryString(),
            'departments' => Department::all(['id', 'name']),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return RedirectResponse
     */
    public function store(StoreJobDescriptionRequest $request)
    {
        $jobDescription = JobDescription::create($request->validated());

        session()->flash('message', [
            'type' => 'success',
            'content' => __('messages.jobDescription.created', ['jobDescription' => $jobDescription->name]),
        ]);

        return redirect()->back()->with(['jobDescription' => $jobDescription]);
    }

    /**
     * Display the specified resource.
     *
     * @return Response
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
            'data' => $data,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return JsonResponse
     */
    public function edit(JobDescription $jobDescription)
    {
        return response()->json($jobDescription);
    }

    /**
     * Update the specified resource in storage.
     *
     * @return RedirectResponse
     */
    public function update(UpdateJobDescriptionRequest $request, JobDescription $jobDescription)
    {
        $jobDescription->update($request->validated());

        session()->flash('message', [
            'type' => 'success',
            'content' => __('messages.jobDescription.updated', ['jobDescription' => $jobDescription->name]),
        ]);

        return redirect()->back()->with(['jobDescription' => $jobDescription]);
    }

    public function destroy(JobDescription $jobDescription)
    {
        session()->flash('message',
            [
                'type' => 'danger',
                'content' => __('messages.jobDescription.deleted', ['jobDescription' => $jobDescription->name]),
            ]);

        $jobDescription->delete();

        return redirect()->route('job-description.index');
    }

    public function permanentDestroy(JobDescription $jobDescription)
    {
        session()->flash('message',
            [
                'type' => 'danger',
                'content' => __('messages.jobDescription.permanentDeleted', ['jobDescription' => $jobDescription->name]),
            ]);

        $jobDescription->forceDelete();

        return redirect()->route('job-description.index');
    }

    public function restore(JobDescription $jobDescription)
    {
        session()->flash('message',
            [
                'type' => 'info',
                'content' => __('messages.jobDescription.restored', ['jobDescription' => $jobDescription->name]),
            ]);

        $jobDescription->restore();

        return redirect()->route('job-description.index');
    }
}
