<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProblemRequest;
use App\Http\Requests\UpdateProblemRequest;
use App\Models\Department;
use App\Models\Problem;
use App\Models\Risk;
use App\Models\User;
use App\Services\Problem\ProblemWorkflowService;
use App\Services\Risk\RiskWorkflowService;
use Inertia\Inertia;

class ProblemController extends Controller
{
    public function __construct(
        private readonly ProblemWorkflowService $problemWorkflowService,
        private readonly RiskWorkflowService $riskWorkflowService,
    ) {
    }

    public function index()
    {
        $problems = $this->tableFilter(Problem::withCount('capas')->with(['detectedBy:id,name', 'department:id,name']))
            ->latest('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/Problem/IndexPage', [
            'tableData' => $problems,
            'departments' => Department::all(['id', 'name']),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreProblemRequest $request)
    {
        $problem = $this->problemWorkflowService->create($request->validated(), auth()->user());

        if ($problem->risk_id) {
            $this->riskWorkflowService->registerRealization(Risk::findOrFail($problem->risk_id), $problem);
        }

        session()->flash('message', ['type' => 'success', 'content' => __('messages.problem.created', ['problem' => $problem->code])]);

        return redirect()->back();
    }

    public function show(Problem $problem)
    {
        $problem->load([
            'detectedBy:id,name',
            'department:id,name',
            'capas.responsible:id,name',
            'audit:id,code,title',
            'checklistAnswer.question:id,question',
            'risk:id,code,title',
        ]);

        return Inertia::render('Modules/Problem/ShowPage', [
            'problem' => $problem,
            'users' => User::all(['id', 'name']),
        ]);
    }

    public function edit(Problem $problem)
    {
        return response()->json($problem);
    }

    public function update(UpdateProblemRequest $request, Problem $problem)
    {
        $this->problemWorkflowService->update($problem, $request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.problem.updated', ['problem' => $problem->code])]);

        return redirect()->back();
    }

    public function destroy(Problem $problem)
    {
        if ($problem->capas()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.problem.deletedError', ['problem' => $problem->code])]);

            return redirect()->back();
        }

        session()->flash('message', ['type' => 'success', 'content' => __('messages.problem.deleted', ['problem' => $problem->code])]);

        $problem->delete();

        return redirect()->route('problem.index');
    }
}
