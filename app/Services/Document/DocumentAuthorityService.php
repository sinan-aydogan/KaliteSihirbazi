<?php

namespace App\Services\Document;

use App\Enums\Document\DocumentAuthorityRole;
use App\Models\Department;
use App\Models\Document\DocumentType;
use App\Models\Document\DocumentTypeAuthority;
use App\Models\HumanResources\Employee\Employee;
use App\Models\User;
use Illuminate\Support\Collection;

class DocumentAuthorityService
{
    /**
     * Grant a role to a single, concrete user. Idempotent: re-granting an
     * already-active role for the same (type, user, role) is a no-op.
     */
    public function grantToUser(
        DocumentType $documentType,
        User $user,
        DocumentAuthorityRole $role,
        User $grantedBy,
        ?Department $sourceDepartment = null,
    ): DocumentTypeAuthority {
        $existing = DocumentTypeAuthority::query()
            ->where('document_type_id', $documentType->id)
            ->where('user_id', $user->id)
            ->where('role', $role)
            ->first();

        if ($existing) {
            return $existing;
        }

        return DocumentTypeAuthority::create([
            'document_type_id' => $documentType->id,
            'user_id' => $user->id,
            'role' => $role,
            'source_department_id' => $sourceDepartment?->id,
            'granted_by' => $grantedBy->id,
        ]);
    }

    /**
     * UI convenience for "add whole department": resolves the department's
     * current employees to their user accounts at call time and grants each
     * one an individual, concrete row. This is a one-time copy, not a live
     * link — an employee who joins the department later is NOT retroactively
     * included, and removing one grant never affects the others.
     *
     * @return Collection<int, DocumentTypeAuthority>
     */
    public function grantToDepartment(
        DocumentType $documentType,
        Department $department,
        DocumentAuthorityRole $role,
        User $grantedBy,
    ): Collection {
        return Employee::query()
            ->where('department_id', $department->id)
            ->with('account')
            ->get()
            ->pluck('account')
            ->filter()
            ->map(fn (User $user) => $this->grantToUser($documentType, $user, $role, $grantedBy, $department))
            ->values();
    }

    public function revoke(DocumentTypeAuthority $authority, User $revokedBy): void
    {
        $authority->update(['revoked_by' => $revokedBy->id]);
        $authority->delete();
    }
}
