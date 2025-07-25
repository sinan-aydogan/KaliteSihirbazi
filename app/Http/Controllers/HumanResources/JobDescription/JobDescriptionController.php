<?php

namespace App\Http\Controllers\HumanResources\JobDescription;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreJobDescriptionRequest;
use App\Http\Requests\UpdateJobDescriptionRequest;
use App\Models\Department;
use App\Models\HumanResources\JobDescription\JobDescription;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use App\Traits\Document\HasJsonColumns;

class JobDescriptionController extends Controller
{
    use HasJsonColumns;

    protected array $jsonFields = [
        'responsibilities', 'powers', 'requirements', 'skills',
        'working_conditions', 'working_tools', 'working_hours',
        'overtime_status', 'travel_status'
    ];

    public function index()
    {
        return Inertia::render("Modules/HumanResources/JobDescription/IndexPage", [
            'tableData' => JobDescription::with('department:id,name')->latest('id')->paginate(10),
            'departments' => Department::all(['id', 'name'])
        ]);
    }

    public function store(StoreJobDescriptionRequest $request)
    {
        try {
            $validated = $this->prepareJsonFields($request->validated(), $this->jsonFields);

            JobDescription::create($validated);

            return $this->redirectWithMessage('success', __('messages.jobDescription.created'));

        } catch (\Exception $e) {
            Log::error('Job Description creation failed: ' . $e->getMessage());
            Log::error('Request data: ' . print_r($request->all(), true));

            return $this->redirectWithMessage('danger', __('messages.jobDescription.error'), true);
        }
    }

    public function show(JobDescription $jobDescription)
    {
        $data = $this->decodeJsonFields($jobDescription, $this->jsonFields);

        return Inertia::render('Modules/HumanResources/JobDescription/ShowPage', [
            'data' => $data
        ]);
    }

    public function edit(JobDescription $jobDescription)
    {
        return response()->json($this->decodeJsonFields($jobDescription, $this->jsonFields));
    }

    public function update(UpdateJobDescriptionRequest $request, JobDescription $jobDescription)
    {
        try {
            $validated = $this->prepareJsonFields($request->validated(), $this->jsonFields);

            $jobDescription->update($validated);

            return $this->redirectWithMessage('success',
                __('messages.jobDescription.updated', ['jobDescription' => $jobDescription->name]));

        } catch (\Exception $e) {
            Log::error('Job Description update failed: ' . $e->getMessage());
            return $this->redirectWithMessage('danger', __('messages.jobDescription.error'), true);
        }
    }

    public function destroy(JobDescription $jobDescription)
    {
        $jobDescription->delete();
        return $this->redirectWithMessage('danger',
            __('messages.jobDescription.deleted', ['jobDescription' => $jobDescription->name]));
    }

    public function permanentDestroy(JobDescription $jobDescription)
    {
        $jobDescription->forceDelete();
        return $this->redirectWithMessage('danger',
            __('messages.jobDescription.permanentDeleted', ['jobDescription' => $jobDescription->name]));
    }

    public function restore(JobDescription $jobDescription)
    {
        $jobDescription->restore();
        return $this->redirectWithMessage('info',
            __('messages.jobDescription.restored', ['jobDescription' => $jobDescription->name]));
    }

    protected function redirectWithMessage(string $type, string $content, bool $withInput = false)
    {
        session()->flash('message', compact('type', 'content'));
        return $withInput ? back()->withInput() : redirect()->back();
    }
}
