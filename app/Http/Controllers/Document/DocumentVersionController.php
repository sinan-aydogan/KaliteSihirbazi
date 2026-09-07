<?php

namespace App\Http\Controllers\Document;

use App\Http\Controllers\Controller;
use App\Http\Requests\Document\StoreDocumentVersionRequest;
use App\Models\Document\Document;
use App\Models\Document\DocumentRevisionRequest;
use App\Services\Document\DocumentWorkflowService;
use RuntimeException;

class DocumentVersionController extends Controller
{
    public function __construct(private readonly DocumentWorkflowService $documentWorkflowService)
    {
    }

    /**
     * Submit a new revision (version) for an existing document, optionally
     * fulfilling a previously accepted revision request.
     */
    public function store(StoreDocumentVersionRequest $request, Document $document)
    {
        $this->authorize('submitNewVersion', $document);

        try {
            $version = $this->documentWorkflowService->submitNewVersion(
                $document,
                auth()->user(),
                $request->file('file'),
                $request->validated('revision_reason'),
                $request->validated('revision_detail'),
            );
        } catch (RuntimeException $exception) {
            session()->flash('message', ['type' => 'danger', 'content' => $exception->getMessage()]);

            return redirect()->back();
        }

        if ($request->filled('revision_request_id')) {
            $revisionRequest = DocumentRevisionRequest::findOrFail($request->validated('revision_request_id'));

            if ($revisionRequest->document_id === $document->id) {
                $this->documentWorkflowService->completeRevisionRequest($revisionRequest, $version);
            }
        }

        session()->flash('message', ['type' => 'success', 'content' => __('messages.documentVersion.created')]);

        return redirect()->back();
    }
}
