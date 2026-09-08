<?php

namespace App\Http\Controllers;

use App\Http\Requests\CompleteAuditRequest;
use App\Models\Audit;
use App\Services\Audit\AuditWorkflowService;
use RuntimeException;

class AuditWorkflowController extends Controller
{
    public function __construct(private readonly AuditWorkflowService $auditWorkflowService)
    {
    }

    public function start(Audit $audit)
    {
        return $this->runWorkflowAction(
            fn () => $this->auditWorkflowService->start($audit),
            'messages.audit.started',
        );
    }

    public function complete(CompleteAuditRequest $request, Audit $audit)
    {
        return $this->runWorkflowAction(
            fn () => $this->auditWorkflowService->complete($audit, $request->validated()),
            'messages.audit.completed',
        );
    }

    public function cancel(Audit $audit)
    {
        return $this->runWorkflowAction(
            fn () => $this->auditWorkflowService->cancel($audit),
            'messages.audit.cancelled',
        );
    }

    private function runWorkflowAction(callable $action, string $successMessageKey)
    {
        try {
            $action();
        } catch (RuntimeException $exception) {
            session()->flash('message', ['type' => 'danger', 'content' => $exception->getMessage()]);

            return redirect()->back();
        }

        session()->flash('message', ['type' => 'success', 'content' => __($successMessageKey)]);

        return redirect()->back();
    }
}
