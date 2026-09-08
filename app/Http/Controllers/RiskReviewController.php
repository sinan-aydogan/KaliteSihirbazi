<?php

namespace App\Http\Controllers;

use App\Http\Requests\CompleteRiskReviewRequest;
use App\Http\Requests\StoreRiskReviewRequest;
use App\Models\Risk;
use App\Models\RiskReview;
use App\Services\Risk\RiskWorkflowService;

class RiskReviewController extends Controller
{
    public function __construct(private readonly RiskWorkflowService $riskWorkflowService)
    {
    }

    public function store(StoreRiskReviewRequest $request, Risk $risk)
    {
        $this->riskWorkflowService->addReview($risk, $request->validated(), auth()->user());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.riskReview.created')]);

        return redirect()->back();
    }

    public function update(CompleteRiskReviewRequest $request, RiskReview $riskReview)
    {
        $this->riskWorkflowService->completeReview($riskReview, $request->validated(), auth()->user());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.riskReview.completed')]);

        return redirect()->back();
    }
}
