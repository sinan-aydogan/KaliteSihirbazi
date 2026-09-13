<?php

namespace App\Http\Controllers\ContinuousImprovement;

use App\Http\Controllers\Controller;
use App\Http\Requests\ApproveKaizenSuggestionRequest;
use App\Http\Requests\ImplementKaizenSuggestionRequest;
use App\Http\Requests\RejectKaizenSuggestionRequest;
use App\Http\Requests\StartKaizenSuggestionRequest;
use App\Models\ContinuousImprovement\KaizenSuggestion;
use App\Services\ContinuousImprovement\KaizenWorkflowService;
use RuntimeException;

class KaizenWorkflowController extends Controller
{
    public function __construct(private readonly KaizenWorkflowService $kaizenWorkflowService)
    {
    }

    public function markUnderReview(KaizenSuggestion $kaizenSuggestion)
    {
        return $this->handle(fn () => $this->kaizenWorkflowService->markUnderReview($kaizenSuggestion), 'markedUnderReview', $kaizenSuggestion);
    }

    public function approve(ApproveKaizenSuggestionRequest $request, KaizenSuggestion $kaizenSuggestion)
    {
        return $this->handle(fn () => $this->kaizenWorkflowService->approve($kaizenSuggestion, $request->validated(), auth()->user()), 'approved', $kaizenSuggestion);
    }

    public function reject(RejectKaizenSuggestionRequest $request, KaizenSuggestion $kaizenSuggestion)
    {
        return $this->handle(fn () => $this->kaizenWorkflowService->reject($kaizenSuggestion, $request->validated(), auth()->user()), 'rejected', $kaizenSuggestion);
    }

    public function start(StartKaizenSuggestionRequest $request, KaizenSuggestion $kaizenSuggestion)
    {
        return $this->handle(fn () => $this->kaizenWorkflowService->start($kaizenSuggestion, $request->validated()), 'started', $kaizenSuggestion);
    }

    public function implement(ImplementKaizenSuggestionRequest $request, KaizenSuggestion $kaizenSuggestion)
    {
        return $this->handle(fn () => $this->kaizenWorkflowService->implement($kaizenSuggestion, $request->validated()), 'implemented', $kaizenSuggestion);
    }

    public function close(KaizenSuggestion $kaizenSuggestion)
    {
        return $this->handle(fn () => $this->kaizenWorkflowService->close($kaizenSuggestion), 'closed', $kaizenSuggestion);
    }

    private function handle(callable $action, string $messageKey, KaizenSuggestion $kaizenSuggestion)
    {
        try {
            $action();
        } catch (RuntimeException $exception) {
            session()->flash('message', ['type' => 'danger', 'content' => $exception->getMessage()]);

            return redirect()->back();
        }

        session()->flash('message', ['type' => 'success', 'content' => __("messages.kaizenSuggestion.$messageKey", ['suggestion' => $kaizenSuggestion->code])]);

        return redirect()->back();
    }
}
