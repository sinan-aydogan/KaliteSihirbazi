<?php

namespace App\Http\Controllers;

use App\Models\Risk;
use App\Services\Risk\RiskWorkflowService;
use RuntimeException;

class RiskWorkflowController extends Controller
{
    public function __construct(private readonly RiskWorkflowService $riskWorkflowService)
    {
    }

    public function close(Risk $risk)
    {
        try {
            $this->riskWorkflowService->close($risk);
        } catch (RuntimeException $exception) {
            session()->flash('message', ['type' => 'danger', 'content' => $exception->getMessage()]);

            return redirect()->back();
        }

        session()->flash('message', ['type' => 'success', 'content' => __('messages.risk.closed', ['risk' => $risk->code])]);

        return redirect()->back();
    }
}
