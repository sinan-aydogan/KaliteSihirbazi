<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRiskRequest;
use App\Http\Requests\UpdateRiskRequest;
use App\Models\Department;
use App\Models\ProblemSourceType;
use App\Models\Risk;
use App\Models\RiskCategory;
use App\Models\RiskHazardClass;
use App\Models\User;
use App\Services\Risk\RiskWorkflowService;
use Inertia\Inertia;

class RiskController extends Controller
{
    public function __construct(private readonly RiskWorkflowService $riskWorkflowService)
    {
    }

    public function index()
    {
        $risks = $this->tableFilter(Risk::withCount('controls')->with(['department:id,name', 'riskCategory:id,name', 'riskHazardClass:id,name', 'riskOwner:id,name']))
            ->latest('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/Risk/IndexPage', [
            'tableData' => $risks,
            'users' => User::all(['id', 'name']),
            'departments' => Department::all(['id', 'name']),
            'riskCategories' => RiskCategory::orderBy('sort_order')->get(['id', 'name']),
            'riskHazardClasses' => RiskHazardClass::orderBy('sort_order')->get(['id', 'name']),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreRiskRequest $request)
    {
        $risk = $this->riskWorkflowService->create($request->validated(), auth()->user());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.risk.created', ['risk' => $risk->code])]);

        return redirect()->back();
    }

    public function show(Risk $risk)
    {
        $risk->load([
            'department:id,name',
            'riskCategory:id,name',
            'riskHazardClass:id,name',
            'riskOwner:id,name',
            'identifiedBy:id,name',
            'controls.responsible:id,name',
            'reviews.reviewedBy:id,name',
            'reviews.linkedProblem:id,code,title,status',
            'realizedProblems:id,risk_id,code,title,status',
        ]);

        return Inertia::render('Modules/Risk/ShowPage', [
            'risk' => $risk,
            'users' => User::all(['id', 'name']),
            'problemSourceTypes' => ProblemSourceType::orderBy('sort_order')->get(['id', 'key', 'name']),
        ]);
    }

    public function edit(Risk $risk)
    {
        return response()->json($risk);
    }

    public function update(UpdateRiskRequest $request, Risk $risk)
    {
        $this->riskWorkflowService->update($risk, $request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.risk.updated', ['risk' => $risk->code])]);

        return redirect()->back();
    }

    public function destroy(Risk $risk)
    {
        if ($risk->realizedProblems()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.risk.deletedError', ['risk' => $risk->code])]);

            return redirect()->back();
        }

        session()->flash('message', ['type' => 'success', 'content' => __('messages.risk.deleted', ['risk' => $risk->code])]);

        $risk->delete();

        return redirect()->route('risk.index');
    }
}
