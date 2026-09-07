<?php

namespace App\Http\Controllers\Document;

use App\Http\Controllers\Controller;
use App\Http\Requests\Document\RejectDocumentRevisionRequestRequest;
use App\Http\Requests\Document\StoreDocumentRevisionRequestRequest;
use App\Models\Document\Document;
use App\Models\Document\DocumentRevisionRequest;
use App\Services\Document\DocumentWorkflowService;
use Inertia\Inertia;
use RuntimeException;

class DocumentRevisionRequestController extends Controller
{
    public function __construct(private readonly DocumentWorkflowService $documentWorkflowService)
    {
    }

    public function index()
    {
        $user = auth()->user();

        $query = DocumentRevisionRequest::with('document:id,code,name', 'requestedBy:id,name', 'resolvedBy:id,name');

        if (! $user->hasRole(['Sistem Yöneticisi', 'Kalite Yöneticisi'])) {
            $query->whereHas('document', fn ($q) => $q->visibleTo($user));
        }

        $requests = $query->latest('id')->paginate(10)->withQueryString();

        return Inertia::render('Modules/Document/RevisionRequest/IndexPage', [
            'tableData' => $requests,
        ]);
    }

    public function store(StoreDocumentRevisionRequestRequest $request, Document $document)
    {
        $this->authorize('requestRevision', $document);

        return $this->runAction(
            fn () => $this->documentWorkflowService->requestRevision($document, auth()->user(), $request->validated('reason')),
            'messages.documentRevisionRequest.created',
        );
    }

    public function accept(DocumentRevisionRequest $documentRevisionRequest)
    {
        $this->authorize('resolveRevisionRequest', $documentRevisionRequest->document);

        return $this->runAction(
            fn () => $this->documentWorkflowService->acceptRevisionRequest($documentRevisionRequest, auth()->user()),
            'messages.documentRevisionRequest.accepted',
        );
    }

    public function reject(RejectDocumentRevisionRequestRequest $request, DocumentRevisionRequest $documentRevisionRequest)
    {
        $this->authorize('resolveRevisionRequest', $documentRevisionRequest->document);

        return $this->runAction(
            fn () => $this->documentWorkflowService->rejectRevisionRequest($documentRevisionRequest, auth()->user(), $request->validated('note')),
            'messages.documentRevisionRequest.rejected',
        );
    }

    /**
     * The policy's admin bypass skips the per-ability state check the service
     * still enforces (e.g. accepting an already-resolved request), so any
     * caller can hit an invalid transition - convert it into a graceful
     * flash instead of an uncaught 500.
     */
    private function runAction(callable $action, string $successMessageKey)
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
