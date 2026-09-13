<?php

namespace App\Http\Controllers\ContinuousImprovement;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFiveSAuditRequest;
use App\Http\Requests\UpdateFiveSAuditRequest;
use App\Models\ContinuousImprovement\FiveSAudit;
use App\Models\ContinuousImprovement\ImprovementArea;
use App\Models\User;
use App\Services\ContinuousImprovement\FiveSAuditService;
use Inertia\Inertia;

class FiveSAuditController extends Controller
{
    public function __construct(private readonly FiveSAuditService $fiveSAuditService)
    {
    }

    public function index()
    {
        $audits = $this->tableFilter(FiveSAudit::withCount('findings')->with(['area:id,name', 'auditedBy:id,name']))
            ->latest('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/ContinuousImprovement/FiveS/IndexPage', [
            'tableData' => $audits,
            'areas' => ImprovementArea::where('is_active', true)->get(['id', 'name']),
            'users' => User::all(['id', 'name']),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreFiveSAuditRequest $request)
    {
        $audit = $this->fiveSAuditService->create($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.fiveSAudit.created', ['audit' => $audit->code])]);

        return redirect()->back();
    }

    public function show(FiveSAudit $fiveSAudit)
    {
        $fiveSAudit->load(['area:id,name', 'auditedBy:id,name', 'findings.responsible:id,name']);

        return Inertia::render('Modules/ContinuousImprovement/FiveS/ShowPage', [
            'audit' => $fiveSAudit,
            'users' => User::all(['id', 'name']),
        ]);
    }

    public function edit(FiveSAudit $fiveSAudit)
    {
        return response()->json($fiveSAudit);
    }

    public function update(UpdateFiveSAuditRequest $request, FiveSAudit $fiveSAudit)
    {
        $this->fiveSAuditService->update($fiveSAudit, $request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.fiveSAudit.updated', ['audit' => $fiveSAudit->code])]);

        return redirect()->back();
    }

    public function destroy(FiveSAudit $fiveSAudit)
    {
        $fiveSAudit->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.fiveSAudit.deleted', ['audit' => $fiveSAudit->code])]);

        return redirect()->back();
    }
}
