<?php

namespace App\Http\Controllers;

use App\Http\Requests\VerifyCapaRequest;
use App\Models\Capa;
use App\Services\Capa\CapaWorkflowService;
use RuntimeException;

class CapaWorkflowController extends Controller
{
    public function __construct(private readonly CapaWorkflowService $capaWorkflowService)
    {
    }

    public function submitForVerification(Capa $capa)
    {
        return $this->runWorkflowAction(
            fn () => $this->capaWorkflowService->submitForVerification($capa),
            'messages.capa.submittedForVerification',
        );
    }

    public function verify(VerifyCapaRequest $request, Capa $capa)
    {
        return $this->runWorkflowAction(
            fn () => $this->capaWorkflowService->verify(
                $capa,
                auth()->user(),
                $request->boolean('is_effective'),
                $request->validated('notes'),
            ),
            'messages.capa.verified',
        );
    }

    public function reopen(Capa $capa)
    {
        return $this->runWorkflowAction(
            fn () => $this->capaWorkflowService->reopen($capa),
            'messages.capa.reopened',
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
