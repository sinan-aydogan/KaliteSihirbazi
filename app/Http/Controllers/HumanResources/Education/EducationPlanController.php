<?php

namespace App\Http\Controllers\HumanResources\Education;

use App\Http\Controllers\Controller;
use App\Http\Requests\HumanResources\EducationPlan\StoreEducationPlanRequest;
use App\Http\Requests\HumanResources\EducationPlan\UpdateEducationPlanRequest;
use App\Models\HumanResources\Education\EducationPlan;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class EducationPlanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Inertia::render('Modules/HumanResources/EducationPlan/IndexPage', [
            'tableData' => EducationPlan::latest('id')->paginate(10),
        ]);
    }

    /**
     * Display a listing of the deleted resource.
     *
     * @return Response
     */
    public function deleted()
    {
        return Inertia::render("Modules/HumanResources/EducationPlan/DeletedPage", [
            'tableData' => EducationPlan::onlyTrashed()->latest('deleted_at')->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return void
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreEducationPlanRequest $request
     * @return RedirectResponse
     */
    public function store(StoreEducationPlanRequest $request)
    {
        $educationPlan = new EducationPlan($request->validated());
        $educationPlan->save();

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.educationPlan.created', ['educationPlan' => $educationPlan->name])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param EducationPlan $educationPlan
     * @return Response
     */
    public function show(EducationPlan $educationPlan)
    {
        return Inertia::render('Modules/HumanResources/EducationPlan/ShowPage', [
            'data' => $educationPlan,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param EducationPlan $educationPlan
     * @return JsonResponse
     */
    public function edit(EducationPlan $educationPlan)
    {
        return response()->json($educationPlan);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateEducationPlanRequest $request
     * @param EducationPlan $educationPlan
     * @return RedirectResponse
     */
    public function update(UpdateEducationPlanRequest $request, EducationPlan $educationPlan)
    {
        $educationPlan->update($request->validated());

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.educationPlan.updated', ['educationPlan' => $educationPlan->name])]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param EducationPlan $educationPlan
     * @return RedirectResponse
     */
    public function destroy(EducationPlan $educationPlan)
    {
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.educationPlan.deleted', ['educationPlan' => $educationPlan->name])]);

        $educationPlan->delete();

        return redirect()->route('education-plan.index');
    }

    /**
     * Permanently delete the specified resource from storage.
     *
     * @param EducationPlan $educationPlan
     * @return RedirectResponse
     */
    public function permanentDestroy(EducationPlan $educationPlan)
    {
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.educationPlan.permanentDeleted', ['educationPlan' => $educationPlan->name])]);

        $educationPlan->forceDelete();

        return redirect()->route('education-plan.index');
    }

    /**
     * Restore the specified resource from storage.
     *
     * @param EducationPlan $educationPlan
     * @return RedirectResponse
     */
    public function restore(EducationPlan $educationPlan)
    {
        $educationPlan->restore();

        session()->flash('message', ['type'=> 'info', 'content'=>__('messages.educationPlan.restored', ['educationPlan' => $educationPlan->name])]);

        return redirect()->route('education-plan.index');
    }
}
