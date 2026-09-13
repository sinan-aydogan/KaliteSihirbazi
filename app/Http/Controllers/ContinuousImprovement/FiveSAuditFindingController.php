<?php

namespace App\Http\Controllers\ContinuousImprovement;

use App\Http\Controllers\Controller;
use App\Http\Requests\ResolveFiveSAuditFindingRequest;
use App\Http\Requests\StoreFiveSAuditFindingRequest;
use App\Http\Requests\UpdateFiveSAuditFindingRequest;
use App\Models\ContinuousImprovement\FiveSAudit;
use App\Models\ContinuousImprovement\FiveSAuditFinding;
use App\Services\ContinuousImprovement\FiveSAuditService;

class FiveSAuditFindingController extends Controller
{
    public function __construct(private readonly FiveSAuditService $fiveSAuditService)
    {
    }

    public function store(StoreFiveSAuditFindingRequest $request, FiveSAudit $fiveSAudit)
    {
        $this->fiveSAuditService->addFinding($fiveSAudit, $request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.fiveSAuditFinding.created')]);

        return redirect()->back();
    }

    public function update(UpdateFiveSAuditFindingRequest $request, FiveSAuditFinding $fiveSAuditFinding)
    {
        $this->fiveSAuditService->updateFinding($fiveSAuditFinding, $request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.fiveSAuditFinding.updated')]);

        return redirect()->back();
    }

    public function resolve(ResolveFiveSAuditFindingRequest $request, FiveSAuditFinding $fiveSAuditFinding)
    {
        $this->fiveSAuditService->resolveFinding($fiveSAuditFinding, $request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.fiveSAuditFinding.resolved')]);

        return redirect()->back();
    }

    public function destroy(FiveSAuditFinding $fiveSAuditFinding)
    {
        $this->fiveSAuditService->deleteFinding($fiveSAuditFinding);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.fiveSAuditFinding.deleted')]);

        return redirect()->back();
    }
}
