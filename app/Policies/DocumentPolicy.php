<?php

namespace App\Policies;

use App\Enums\Document\DocumentAuthorityRole;
use App\Enums\Document\DocumentVersionStatus;
use App\Models\Document\Document;
use App\Models\Document\DocumentType;
use App\Models\Document\DocumentVersion;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DocumentPolicy
{
    use HandlesAuthorization;

    /**
     * Global admins bypass every check below.
     */
    public function before(User $user, string $ability): ?bool
    {
        return $user->hasRole(['Sistem Yöneticisi', 'Kalite Yöneticisi']) ? true : null;
    }

    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Document $document): bool
    {
        if ($document->creator_id === $user->id) {
            return true;
        }

        if ($user->documentTypeAuthorities()->where('document_type_id', $document->document_type_id)->exists()) {
            return true;
        }

        $distributionPointIds = $document->distributionPoints()->pluck('distribution_points.id');

        return $distributionPointIds->isNotEmpty()
            && $user->distributionPoints()->whereIn('distribution_points.id', $distributionPointIds)->exists();
    }

    /**
     * Can the user create a document of the given type? Called explicitly as
     * `$user->can('createDocumentOfType', [Document::class, $documentType])`
     * since document creation is scoped by type, not by an existing instance.
     */
    public function createDocumentOfType(User $user, DocumentType $documentType): bool
    {
        return $user->hasDocumentAuthority($documentType, DocumentAuthorityRole::Author);
    }

    public function update(User $user, Document $document): bool
    {
        if (! $user->hasDocumentAuthority($document->documentType, DocumentAuthorityRole::Author)) {
            return false;
        }

        $latest = $document->versions()->latest('version')->first();

        return ! $latest || in_array($latest->status, DocumentVersionStatus::submittableStatuses(), true);
    }

    public function delete(User $user, Document $document): bool
    {
        return $user->hasDocumentAuthority($document->documentType, DocumentAuthorityRole::Approver);
    }

    /**
     * Anyone who can view the document may ask for it to be revised, even
     * without author rights.
     */
    public function requestRevision(User $user, Document $document): bool
    {
        return $this->view($user, $document);
    }

    /**
     * Accepting/rejecting a revision request is an authoring or approval
     * decision, so either role on the document's type qualifies.
     */
    public function resolveRevisionRequest(User $user, Document $document): bool
    {
        return $user->hasDocumentAuthority($document->documentType, DocumentAuthorityRole::Author)
            || $user->hasDocumentAuthority($document->documentType, DocumentAuthorityRole::Approver);
    }

    public function submitNewVersion(User $user, Document $document): bool
    {
        return ! $document->isCancelled()
            && $user->hasDocumentAuthority($document->documentType, DocumentAuthorityRole::Author);
    }

    public function cancel(User $user, Document $document): bool
    {
        return ! $document->isCancelled()
            && $user->hasDocumentAuthority($document->documentType, DocumentAuthorityRole::Approver);
    }

    public function submitForReview(User $user, DocumentVersion $version): bool
    {
        return $user->hasDocumentAuthority($version->document->documentType, DocumentAuthorityRole::Author)
            && in_array($version->status, DocumentVersionStatus::submittableStatuses(), true);
    }

    public function review(User $user, DocumentVersion $version): bool
    {
        return $user->hasDocumentAuthority($version->document->documentType, DocumentAuthorityRole::Reviewer)
            && $version->status === DocumentVersionStatus::InReview;
    }

    public function approve(User $user, DocumentVersion $version): bool
    {
        return $user->hasDocumentAuthority($version->document->documentType, DocumentAuthorityRole::Approver)
            && $version->status === DocumentVersionStatus::PendingApproval;
    }

    public function reject(User $user, DocumentVersion $version): bool
    {
        $documentType = $version->document->documentType;

        if ($version->status === DocumentVersionStatus::InReview) {
            return $user->hasDocumentAuthority($documentType, DocumentAuthorityRole::Reviewer);
        }

        if ($version->status === DocumentVersionStatus::PendingApproval) {
            return $user->hasDocumentAuthority($documentType, DocumentAuthorityRole::Approver);
        }

        return false;
    }

    public function acknowledge(User $user, DocumentVersion $version): bool
    {
        return $version->readAcknowledgments()->where('user_id', $user->id)->exists();
    }

    public function manageAuthorities(User $user, DocumentType $documentType): bool
    {
        return $user->hasDocumentAuthority($documentType, DocumentAuthorityRole::Approver);
    }
}
