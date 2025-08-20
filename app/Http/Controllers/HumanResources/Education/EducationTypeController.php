<?php

namespace App\Http\Controllers\HumanResources\Education;

use App\Http\Controllers\Controller;
use App\Http\Requests\HumanResources\Education\StoreEducationTypeRequest;
use App\Http\Requests\HumanResources\Education\UpdateEducationTypeRequest;
use App\Models\HumanResources\Education\EducationType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class EducationTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Inertia::render('Modules/HumanResources/Education/Setting/EducationTypePage', [
            'tableData' => EducationType::latest('id')->paginate(10),
        ]);
    }

    /**
     * Display a listing of the deleted resource.
     *
     * @return Response
     */
    public function deleted()
    {
        return Inertia::render("Modules/HumanResources/Education/Setting/EducationTypeDeletedPage", [
            'tableData' => EducationType::onlyTrashed()->latest('deleted_at')->paginate(10),
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
     * @param StoreEducationTypeRequest $request
     * @return RedirectResponse
     */
    public function store(StoreEducationTypeRequest $request)
    {
        $educationType = new EducationType($request->validated());
        $educationType->save();

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.educationType.created', ['educationType' => $educationType->name])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param EducationType $educationType
     * @return Response
     */
    public function show(EducationType $educationType)
    {
        return Inertia::render('Modules/HumanResources/Education/Setting/EducationTypeShowPage', [
            'data' => $educationType->load('educations'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param EducationType $educationType
     * @return JsonResponse
     */
    public function edit(EducationType $educationType)
    {
        return response()->json($educationType);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateEducationTypeRequest $request
     * @param EducationType $educationType
     * @return RedirectResponse
     */
    public function update(UpdateEducationTypeRequest $request, EducationType $educationType)
    {
        $educationType->update($request->validated());

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.educationType.updated', ['educationType' => $educationType->name])]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param EducationType $educationType
     * @return RedirectResponse
     */
    public function destroy(EducationType $educationType)
    {
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.educationType.deleted', ['educationType' => $educationType->name])]);

        $educationType->delete();

        return redirect()->route('education-type.index');
    }

    /**
     * Permanently delete the specified resource from storage.
     *
     * @param EducationType $educationType
     * @return RedirectResponse
     */
    public function permanentDestroy(EducationType $educationType)
    {
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.educationType.permanentDeleted', ['educationType' => $educationType->name])]);

        $educationType->forceDelete();

        return redirect()->route('education-type.index');
    }

    /**
     * Restore the specified resource from storage.
     *
     * @param EducationType $educationType
     * @return RedirectResponse
     */
    public function restore(EducationType $educationType)
    {
        $educationType->restore();

        session()->flash('message', ['type'=> 'info', 'content'=>__('messages.educationType.restored', ['educationType' => $educationType->name])]);

        return redirect()->route('education-type.index');
    }
}
