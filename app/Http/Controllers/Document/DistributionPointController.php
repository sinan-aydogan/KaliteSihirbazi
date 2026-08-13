<?php

namespace App\Http\Controllers\Document;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDistributionPointRequest;
use App\Http\Requests\UpdateDistributionPointRequest;
use App\Models\Department;
use App\Models\Document\DistributionPoint;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class DistributionPointController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $departments = Department::all(['id', 'name']);
        $tableData = $this->tableFilter(DistributionPoint::with('department:id,name'), [
            'department' => ['relation' => 'department', 'column' => 'name'],
        ])->latest('id')->paginate(10)->withQueryString();

        return Inertia::render('Modules/Document/Setting/DistributionPointPage', [
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
     * @return RedirectResponse
     */
    public function store(StoreDistributionPointRequest $request)
    {
        $distributionPoint = DistributionPoint::create($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.distributionPoint.created', ['distributionPoint' => $distributionPoint->name])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(DistributionPoint $distributionPoint)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return JsonResponse
     */
    public function edit(DistributionPoint $distributionPoint)
    {
        return response()->json($distributionPoint);
    }

    /**
     * Update the specified resource in storage.
     *
     * @return RedirectResponse
     */
    public function update(UpdateDistributionPointRequest $request, DistributionPoint $distributionPoint)
    {
        $distributionPoint->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.distributionPoint.updated', ['distributionPoint' => $distributionPoint->name])]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return RedirectResponse
     */
    public function destroy(DistributionPoint $distributionPoint)
    {
        if ($distributionPoint->documents()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.distributionPoint.deletedError', ['distributionPoint' => $distributionPoint->name])]);

            return redirect()->back();
        }

        session()->flash('message', ['type' => 'danger', 'content' => __('messages.distributionPoint.deleted', ['distributionPoint' => $distributionPoint->name])]);

        $distributionPoint->delete();

        return redirect()->route('distribution-point.index');
    }
}
