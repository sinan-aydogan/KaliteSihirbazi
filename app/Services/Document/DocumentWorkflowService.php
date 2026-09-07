<?php

namespace App\Services\Document;

use App\Enums\Document\DocumentActivityAction;
use App\Enums\Document\DocumentRevisionRequestStatus;
use App\Enums\Document\DocumentVersionStatus;
use App\Models\Document\Document;
use App\Models\Document\DocumentActivityLog;
use App\Models\Document\DocumentReadAcknowledgment;
use App\Models\Document\DocumentRevisionRequest;
use App\Models\Document\DocumentVersion;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use RuntimeException;

class DocumentWorkflowService
{
    /**
     * Start a new revision (version) of an existing document: the previous
     * version must not still be mid-flight (draft/in review/pending approval),
     * and the document must not be cancelled. A fresh file replaces the
     * document's current downloadable file.
     */
    public function submitNewVersion(
        Document $document,
        User $author,
        ?UploadedFile $file,
        ?string $reason,
        ?string $detail,
    ): DocumentVersion {
        if ($document->isCancelled()) {
            throw new RuntimeException('İptal edilmiş bir dökümana yeni revizyon eklenemez.');
        }

        $latest = $document->versions()->latest('version')->first();

        if ($latest && ! in_array($latest->status, [DocumentVersionStatus::Approved, DocumentVersionStatus::Obsolete, DocumentVersionStatus::Rejected], true)) {
            throw new RuntimeException(sprintf(
                'Bu dökümanın "%s" durumunda bekleyen bir versiyonu var, yeni revizyon eklenemez.',
                $latest->status->label(),
            ));
        }

        $version = $document->versions()->create([
            'revised_by' => $author->id,
            'version' => $latest ? $latest->version + 1 : 1,
            'revision_reason' => $reason,
            'revision_detail' => $detail,
            'status' => DocumentVersionStatus::Draft,
        ]);

        if ($file) {
            $document->clearMediaCollection('document');
            $document->addMedia($file)->toMediaCollection('document');
        }

        DocumentActivityLog::record($document, DocumentActivityAction::VersionCreated, $author, $version);

        return $version;
    }

    /**
     * Cancel a document, optionally in favor of a replacement document. The
     * currently approved version (if any) is obsoleted along with it.
     */
    public function cancel(Document $document, User $actor, string $reason, ?Document $supersededBy = null): Document
    {
        if ($document->isCancelled()) {
            throw new RuntimeException('Bu döküman zaten iptal edilmiş.');
        }

        $document->update([
            'cancelled_at' => now(),
            'cancelled_by' => $actor->id,
            'cancellation_reason' => $reason,
            'superseded_by_document_id' => $supersededBy?->id,
            'publishing_status' => 'cancelled',
        ]);

        $document->versions()
            ->where('status', DocumentVersionStatus::Approved)
            ->get()
            ->each(function (DocumentVersion $version) use ($actor) {
                $version->update(['status' => DocumentVersionStatus::Obsolete]);
            });

        DocumentActivityLog::record($document, DocumentActivityAction::Cancelled, $actor, null, [
            'reason' => $reason,
            'superseded_by_document_id' => $supersededBy?->id,
        ]);

        return $document;
    }

    public function requestRevision(Document $document, User $requester, string $reason): DocumentRevisionRequest
    {
        $request = DocumentRevisionRequest::create([
            'document_id' => $document->id,
            'requested_by' => $requester->id,
            'reason' => $reason,
        ]);

        DocumentActivityLog::record($document, DocumentActivityAction::RevisionRequested, $requester, null, [
            'revision_request_id' => $request->id,
        ]);

        return $request;
    }

    public function acceptRevisionRequest(DocumentRevisionRequest $request, User $actor): DocumentRevisionRequest
    {
        $this->assertRevisionRequestStatus($request, [\App\Enums\Document\DocumentRevisionRequestStatus::Pending]);

        $request->update([
            'status' => \App\Enums\Document\DocumentRevisionRequestStatus::Accepted,
            'resolved_by' => $actor->id,
            'resolved_at' => now(),
        ]);

        DocumentActivityLog::record($request->document, DocumentActivityAction::RevisionRequestAccepted, $actor, null, [
            'revision_request_id' => $request->id,
        ]);

        return $request;
    }

    public function rejectRevisionRequest(DocumentRevisionRequest $request, User $actor, string $note): DocumentRevisionRequest
    {
        $this->assertRevisionRequestStatus($request, [\App\Enums\Document\DocumentRevisionRequestStatus::Pending]);

        $request->update([
            'status' => \App\Enums\Document\DocumentRevisionRequestStatus::Rejected,
            'resolved_by' => $actor->id,
            'resolved_at' => now(),
            'resolution_note' => $note,
        ]);

        DocumentActivityLog::record($request->document, DocumentActivityAction::RevisionRequestRejected, $actor, null, [
            'revision_request_id' => $request->id,
            'note' => $note,
        ]);

        return $request;
    }

    /**
     * Link a newly submitted version to the accepted revision request it
     * fulfills, closing the loop.
     */
    public function completeRevisionRequest(DocumentRevisionRequest $request, DocumentVersion $version): DocumentRevisionRequest
    {
        $this->assertRevisionRequestStatus($request, [\App\Enums\Document\DocumentRevisionRequestStatus::Accepted]);

        $request->update([
            'status' => \App\Enums\Document\DocumentRevisionRequestStatus::Completed,
            'resulting_version_id' => $version->id,
        ]);

        return $request;
    }

    /**
     * @param  \App\Enums\Document\DocumentRevisionRequestStatus[]  $allowed
     */
    private function assertRevisionRequestStatus(DocumentRevisionRequest $request, array $allowed): void
    {
        if (! in_array($request->status, $allowed, true)) {
            throw new RuntimeException(sprintf(
                'Bu işlem "%s" durumundaki bir revizyon talebi için geçerli değil.',
                $request->status->label(),
            ));
        }
    }

    public function submitForReview(DocumentVersion $version, User $actor): DocumentVersion
    {
        $this->assertStatus($version, DocumentVersionStatus::submittableStatuses());

        $version->update(['status' => DocumentVersionStatus::InReview]);

        DocumentActivityLog::record($version->document, DocumentActivityAction::SubmittedForReview, $actor, $version);

        return $version;
    }

    public function review(DocumentVersion $version, User $actor, bool $approved, ?string $note = null): DocumentVersion
    {
        $this->assertStatus($version, [DocumentVersionStatus::InReview]);

        $version->update([
            'reviewed_by' => $actor->id,
            'reviewed_at' => now(),
            'status' => $approved ? DocumentVersionStatus::PendingApproval : DocumentVersionStatus::Rejected,
        ]);

        DocumentActivityLog::record($version->document, DocumentActivityAction::Reviewed, $actor, $version, [
            'approved' => $approved,
            'note' => $note,
        ]);

        return $version;
    }

    public function approve(DocumentVersion $version, User $actor): DocumentVersion
    {
        $this->assertStatus($version, [DocumentVersionStatus::PendingApproval]);

        $document = $version->document;

        $document->versions()
            ->where('id', '!=', $version->id)
            ->where('status', DocumentVersionStatus::Approved)
            ->get()
            ->each(function (DocumentVersion $previous) use ($actor) {
                $previous->update(['status' => DocumentVersionStatus::Obsolete]);
                DocumentActivityLog::record($previous->document, DocumentActivityAction::Obsoleted, $actor, $previous);
            });

        $version->update([
            'approved_by' => $actor->id,
            'published_at' => now(),
            'status' => DocumentVersionStatus::Approved,
        ]);

        $document->update(['publishing_status' => 'published']);

        $this->assignReadAcknowledgments($version);

        DocumentActivityLog::record($document, DocumentActivityAction::Approved, $actor, $version);

        return $version;
    }

    public function reject(DocumentVersion $version, User $actor, string $reason): DocumentVersion
    {
        $this->assertStatus($version, [DocumentVersionStatus::InReview, DocumentVersionStatus::PendingApproval]);

        $version->update(['status' => DocumentVersionStatus::Rejected]);

        DocumentActivityLog::record($version->document, DocumentActivityAction::Rejected, $actor, $version, [
            'reason' => $reason,
        ]);

        return $version;
    }

    public function acknowledge(DocumentVersion $version, User $actor): DocumentReadAcknowledgment
    {
        $acknowledgment = DocumentReadAcknowledgment::query()->updateOrCreate(
            ['document_version_id' => $version->id, 'user_id' => $actor->id],
            ['acknowledged_at' => now()],
        );

        DocumentActivityLog::record($version->document, DocumentActivityAction::Acknowledged, $actor, $version);

        return $acknowledgment;
    }

    /**
     * The read/understood audience for a newly-approved version: everyone with
     * any document-type authority on this document's type, plus every member
     * of the document's distribution points.
     */
    private function assignReadAcknowledgments(DocumentVersion $version): void
    {
        $document = $version->document;

        $typeAuthorityUserIds = $document->documentType->authorities()->pluck('user_id');

        $distributionUserIds = $document->distributionPoints()
            ->with('users:id')
            ->get()
            ->pluck('users')
            ->flatten()
            ->pluck('id');

        $audienceUserIds = $typeAuthorityUserIds->merge($distributionUserIds)->unique();

        foreach ($audienceUserIds as $userId) {
            DocumentReadAcknowledgment::query()->firstOrCreate([
                'document_version_id' => $version->id,
                'user_id' => $userId,
            ]);
        }
    }

    /**
     * @param  DocumentVersionStatus[]  $allowed
     */
    private function assertStatus(DocumentVersion $version, array $allowed): void
    {
        if (! in_array($version->status, $allowed, true)) {
            throw new RuntimeException(sprintf(
                'Bu işlem "%s" durumundaki bir döküman versiyonu için geçerli değil.',
                $version->status->label(),
            ));
        }
    }
}
