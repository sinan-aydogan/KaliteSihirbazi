<?php

namespace App\Http\Controllers\Document;

use App\Enums\Document\DocumentAuthorityRole;
use App\Http\Controllers\Controller;
use App\Http\Requests\Document\StoreDocumentTypeAuthorityRequest;
use App\Models\Department;
use App\Models\Document\Document;
use App\Models\Document\DocumentType;
use App\Models\Document\DocumentTypeAuthority;
use App\Models\User;
use App\Services\Document\DocumentAuthorityService;
use Inertia\Inertia;

class DocumentTypeAuthorityController extends Controller
{
    public function __construct(private readonly DocumentAuthorityService $documentAuthorityService)
    {
    }

    /**
     * Authority management page for a document type: current grants plus a
     * form to add a person or bulk-copy a department's current employees.
     */
    public function index(DocumentType $documentType)
    {
        $this->authorize('manageAuthorities', [Document::class, $documentType]);

        return Inertia::render('Modules/Document/Setting/AuthorityPage', [
            'documentType' => $documentType,
            'authorities' => $documentType->authorities()->with('user:id,name', 'sourceDepartment:id,name')->latest('id')->get(),
            'departments' => Department::all(['id', 'name']),
            'users' => User::all(['id', 'name']),
        ]);
    }

    /**
     * Grant a role to either a single user, or in bulk to a department's
     * current employees (resolved to individual, concrete grants).
     */
    public function store(StoreDocumentTypeAuthorityRequest $request, DocumentType $documentType)
    {
        $this->authorize('manageAuthorities', [Document::class, $documentType]);

        $role = DocumentAuthorityRole::from($request->validated('role'));
        $actor = auth()->user();

        if ($request->filled('department_id')) {
            $department = Department::findOrFail($request->validated('department_id'));
            $granted = $this->documentAuthorityService->grantToDepartment($documentType, $department, $role, $actor);

            session()->flash('message', ['type' => 'success', 'content' => __('messages.documentTypeAuthority.grantedToDepartment', ['count' => $granted->count()])]);
        } else {
            $users = User::findMany($request->validated('user_ids'));
            $users->each(fn (User $user) => $this->documentAuthorityService->grantToUser($documentType, $user, $role, $actor));

            session()->flash('message', ['type' => 'success', 'content' => __('messages.documentTypeAuthority.grantedToUsers', ['count' => $users->count()])]);
        }

        return redirect()->back();
    }

    /**
     * Revoke (soft-delete) a single authority grant.
     */
    public function destroy(DocumentTypeAuthority $documentTypeAuthority)
    {
        $this->authorize('manageAuthorities', [Document::class, $documentTypeAuthority->documentType]);

        $this->documentAuthorityService->revoke($documentTypeAuthority, auth()->user());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.documentTypeAuthority.revoked')]);

        return redirect()->back();
    }
}
