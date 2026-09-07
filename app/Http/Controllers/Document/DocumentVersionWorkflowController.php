<?php

namespace App\Http\Controllers\Document;

use App\Http\Controllers\Controller;
use App\Http\Requests\Document\RejectDocumentVersionRequest;
use App\Http\Requests\Document\ReviewDocumentVersionRequest;
use App\Models\Document\DocumentVersion;
use App\Services\Document\DocumentWorkflowService;
use RuntimeException;

class DocumentVersionWorkflowController extends Controller
{
    public function __construct(private readonly DocumentWorkflowService $documentWorkflowService)
    {
    }

    public function submit(DocumentVersion $documentVersion)
    {
        $this->authorize('submitForReview', $documentVersion);

        return $this->runWorkflowAction(
            fn () => $this->documentWorkflowService->submitForReview($documentVersion, auth()->user()),
            'messages.documentVersion.submitted',
        );
    }

    public function review(ReviewDocumentVersionRequest $request, DocumentVersion $documentVersion)
    {
        $this->authorize('review', $documentVersion);

        return $this->runWorkflowAction(
            fn () => $this->documentWorkflowService->review(
                $documentVersion,
                auth()->user(),
                $request->boolean('approved'),
                $request->validated('note'),
            ),
            'messages.documentVersion.reviewed',
        );
    }

    public function approve(DocumentVersion $documentVersion)
    {
        $this->authorize('approve', $documentVersion);

        return $this->runWorkflowAction(
            fn () => $this->documentWorkflowService->approve($documentVersion, auth()->user()),
            'messages.documentVersion.approved',
        );
    }

    public function reject(RejectDocumentVersionRequest $request, DocumentVersion $documentVersion)
    {
        $this->authorize('reject', $documentVersion);

        return $this->runWorkflowAction(
            fn () => $this->documentWorkflowService->reject($documentVersion, auth()->user(), $request->validated('reason')),
            'messages.documentVersion.rejected',
        );
    }

    public function acknowledge(DocumentVersion $documentVersion)
    {
        $this->authorize('acknowledge', $documentVersion);

        return $this->runWorkflowAction(
            fn () => $this->documentWorkflowService->acknowledge($documentVersion, auth()->user()),
            'messages.documentVersion.acknowledged',
        );
    }

    /**
     * The Policy layer lets a global admin attempt any workflow action
     * regardless of the version's current state (their `before()` bypass
     * skips the state check baked into each ability). The service still
     * enforces valid transitions, so an admin acting on a stale/mismatched
     * state hits this guard instead of an uncaught 500.
     */
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
