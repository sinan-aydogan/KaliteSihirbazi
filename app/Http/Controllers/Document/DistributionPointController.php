<?php

namespace App\Http\Controllers\Document;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDistributionPointRequest;
use App\Http\Requests\UpdateDistributionPointRequest;
use App\Models\Department;
use App\Models\Document\DistributionPoint;
use Inertia\Inertia;

class DistributionPointController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $departments = Department::all(['id', 'name']);
        $tableData = DistributionPoint::with('department:id,name')->get();

        return Inertia::render("Modules/Document/Setting/DistributionPointPage", [
            'departments' => $departments,
            'tableData' => $tableData,
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
     * @param \App\Http\Requests\StoreDistributionPointRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreDistributionPointRequest $request)
    {
        $distributionPoint = new DistributionPoint();
        $distributionPoint->name = $request->name;
        $distributionPoint->department_id = $request->department_id;

        $distributionPoint->save();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.distributionPoint.created', ['distributionPoint' => $distributionPoint->name])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Document\DistributionPoint $distributionPoint
     * @return \Illuminate\Http\Response
     */
    public function show(DistributionPoint $distributionPoint)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Document\DistributionPoint $distributionPoint
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(DistributionPoint $distributionPoint)
    {
        return response()->json($distributionPoint);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateDistributionPointRequest $request
     * @param \App\Models\Document\DistributionPoint $distributionPoint
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateDistributionPointRequest $request, DistributionPoint $distributionPoint)
    {
        $distributionPoint->code = $request->code;
        $distributionPoint->department_id = $request->department_id;

        $distributionPoint->save();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.distributionPoint.updated', ['distributionPoint' => $distributionPoint->name])]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Document\DistributionPoint $distributionPoint
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(DistributionPoint $distributionPoint)
    {
        if ($distributionPoint->documents->count() > 0) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.distributionPoint.deletedError', ['distributionPoint' => $distributionPoint->name])]);
            return redirect()->back();
        }

        session()->flash('message', ['type' => 'danger', 'content' => __('messages.distributionPoint.deleted', ['distributionPoint' => $distributionPoint->name])]);

        $distributionPoint->delete();

        return redirect()->route('distribution-point.index');
    }
}
