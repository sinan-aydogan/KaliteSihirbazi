<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRiskControlRequest;
use App\Http\Requests\UpdateRiskControlRequest;
use App\Models\Risk;
use App\Models\RiskControl;
use App\Services\Risk\RiskWorkflowService;

class RiskControlController extends Controller
{
    public function __construct(private readonly RiskWorkflowService $riskWorkflowService)
    {
    }

    public function store(StoreRiskControlRequest $request, Risk $risk)
    {
        $this->riskWorkflowService->addControl($risk, $request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.riskControl.created')]);

        return redirect()->back();
    }

    public function update(UpdateRiskControlRequest $request, RiskControl $riskControl)
    {
        $this->riskWorkflowService->updateControl($riskControl, $request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.riskControl.updated')]);

        return redirect()->back();
    }

    public function destroy(RiskControl $riskControl)
    {
        $this->riskWorkflowService->deleteControl($riskControl);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.riskControl.deleted')]);

        return redirect()->back();
    }
}
