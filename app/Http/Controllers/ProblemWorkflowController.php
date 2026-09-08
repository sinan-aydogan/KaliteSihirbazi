<?php

namespace App\Http\Controllers;

use App\Models\Problem;
use App\Services\Problem\ProblemWorkflowService;
use RuntimeException;

class ProblemWorkflowController extends Controller
{
    public function __construct(private readonly ProblemWorkflowService $problemWorkflowService)
    {
    }

    public function markUnderReview(Problem $problem)
    {
        return $this->runWorkflowAction(
            fn () => $this->problemWorkflowService->markUnderReview($problem),
            'messages.problem.markedUnderReview',
        );
    }

    public function closeWithoutCapa(Problem $problem)
    {
        return $this->runWorkflowAction(
            fn () => $this->problemWorkflowService->closeWithoutCapa($problem),
            'messages.problem.closedWithoutCapa',
        );
    }

    public function close(Problem $problem)
    {
        return $this->runWorkflowAction(
            fn () => $this->problemWorkflowService->close($problem),
            'messages.problem.closed',
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
