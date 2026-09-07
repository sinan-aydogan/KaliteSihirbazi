<?php

namespace App\Http\Controllers\Document;

use App\Enums\Document\DocumentAuthorityRole;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDocumentRequest;
use App\Http\Requests\UpdateDocumentRequest;
use App\Models\Department;
use App\Models\Document\DistributionPoint;
use App\Models\Document\Document;
use App\Models\Document\DocumentType;
use App\Models\User;
use App\Http\Requests\Document\CancelDocumentRequest;
use App\Services\Document\DocumentWorkflowService;
use App\Services\FileUploadSettingService;
use App\Services\Tag\TagService;
use Inertia\Inertia;
use App\Traits\Document\DocumentCodeTrait;
use App\Traits\Document\DocumentVersionTrait;
use RuntimeException;

class DocumentController extends Controller
{
    use DocumentCodeTrait;
    use DocumentVersionTrait;

    private const DEFAULT_ALLOWED_FILE_TYPES = ['pdf', 'doc', 'docx', 'xls', 'xlsx'];

    private const DEFAULT_MAX_FILE_SIZE = ['size' => 10, 'unit' => 'MB'];

    public function __construct(
        private readonly FileUploadSettingService $fileUploadSettingService,
        private readonly TagService $tagService,
        private readonly DocumentWorkflowService $documentWorkflowService,
    ) {
    }

    /**
     * The allowed file types / max file size settings, shaped for sharing
     * with the frontend file picker (see FileTypeSelectInput.vue).
     */
    private function fileSettingsForFrontend(): array
    {
        return [
            'allowedFileTypes' => $this->fileUploadSettingService->allowedFileTypes(
                'document_allowed_file_types', self::DEFAULT_ALLOWED_FILE_TYPES,
            ),
            'maxFileSize' => $this->fileUploadSettingService->maxFileSize(
                'document_max_file_size', self::DEFAULT_MAX_FILE_SIZE,
            ),
        ];
    }

    /**
     * Document types the given user may author a new document under
     * (global admins may author under any type).
     */
    private function authorableTypesFor(User $user)
    {
        if ($user->hasRole(['Sistem Yöneticisi', 'Kalite Yöneticisi'])) {
            return DocumentType::all(['id', 'name']);
        }

        return DocumentType::query()
            ->whereHas('authorities', fn ($q) => $q->where('user_id', $user->id)->where('role', DocumentAuthorityRole::Author))
            ->get(['id', 'name']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $user = auth()->user();

        $query = Document::with('documentType:id,name', 'distributionPoints:id,name', 'department:id,name', 'creator:id,name', 'tags:id,name');

        if (! $user->hasRole(['Sistem Yöneticisi', 'Kalite Yöneticisi'])) {
            $query->visibleTo($user);
        }

        $documents = $this->tableFilter($query, [
            'document_type' => ['relation' => 'documentType', 'column' => 'name'],
            'department' => ['relation' => 'department', 'column' => 'name'],
            'creator' => ['relation' => 'creator', 'column' => 'name'],
            'distributionPoints' => ['relation' => 'distributionPoints', 'column' => 'name'],
        ])->latest('id')->paginate(10)->withQueryString();
        $documents->through(fn ($document) => tap($document, fn ($d) => $d['can_delete'] = $user->can('delete', $d)));
        $types = DocumentType::all(['id', 'name']);
        $departments = Department::all(['id', 'name']);
        $distributionPoints = DistributionPoint::all(['id', 'name']);

        return Inertia::render('Modules/Document/IndexPage', [
            'tableData' => $documents,
            'types' => $types,
            'departments' => $departments,
            'namingRule' => $this->namingRule(),
            'distributionPoints' => $distributionPoints,
            'tagTypes' => $this->tagService->enabledTypesFor('document'),
            ...$this->fileSettingsForFrontend(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        $departments = Department::all(['id', 'name']);
        $distributionPoints = DistributionPoint::all(['id', 'name']);
        $users = User::all(['id', 'name']);

        return Inertia::render('Modules/Document/CreatePage', [
            'types' => $this->authorableTypesFor(auth()->user()),
            'departments' => $departments,
            'distributionPoints' => $distributionPoints,
            'namingRule' => $this->namingRule(),
            'users' => $users,
            'tagTypes' => $this->tagService->enabledTypesFor('document'),
            ...$this->fileSettingsForFrontend(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreDocumentRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreDocumentRequest $request)
    {
        $documentType = DocumentType::findOrFail($request['document_type_id']);
        $this->authorize('createDocumentOfType', [Document::class, $documentType]);

        $document = new Document();
        $document['code'] = $this->getDocumentCode($request->all());
        $document['name'] = $request['name'];
        $document['department_id'] = $request['department_id'];
        $document['document_type_id'] = $request['document_type_id'];
        $document['description'] = $request['description'];
        $document['publishing_status'] = $request['publishing_status'];
        $document['creator_id'] = auth()->user()->id;

        $document->save();

        /*Sync Distribution Points*/
        $document->distributionPoints()->sync($request['distribution_points']);

        /*Sync Tags*/
        $this->tagService->syncTags($document, $request->input('tag_ids', []));

        /*Attachment kontrolü*/
        if ($request->hasFile('file')) {
            $document->addMedia($request->file('file'))
                ->toMediaCollection('document');
        }

        /*Revison Creating*/
        $this->createVersion($document, $request);

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.document.created', ['document' => $document->name])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Document\Document  $document
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Document $document)
    {
        $this->authorize('view', $document);

        $user = auth()->user();
        $latestVersion = $document->versions()->latest('version')->first();

        $document->load(
            'creator:id,name',
            'tags.tagType:id,name',
            'cancelledBy:id,name',
            'supersededByDocument:id,name,code',
            'supersedes:id,name,code',
            'revisionRequests.requestedBy:id,name',
            'revisionRequests.resolvedBy:id,name',
            'revisionRequests.resultingVersion:id,version',
        );
        $document['department'] = $document->department()->first(['id', 'name']);
        $document['document_type'] = $document->documentType()->first(['id', 'name']);
        $document['revisions'] = $document->versions->map(fn ($version) => [
            ...$version->toArray(),
            'status_label' => $version->status->label(),
        ]);
        $document['file'] = $document->getFirstMediaUrl('document') ?: null;
        $document['latest_version'] = $latestVersion ? [
            'id' => $latestVersion->id,
            'version' => $latestVersion->version,
            'status' => $latestVersion->status->value,
            'status_label' => $latestVersion->status->label(),
        ] : null;
        $document['permissions'] = [
            'canDelete' => $user->can('delete', $document),
            'canManageAuthorities' => $user->can('manageAuthorities', [Document::class, $document->documentType]),
            'canSubmitForReview' => $latestVersion ? $user->can('submitForReview', $latestVersion) : false,
            'canReview' => $latestVersion ? $user->can('review', $latestVersion) : false,
            'canApprove' => $latestVersion ? $user->can('approve', $latestVersion) : false,
            'canReject' => $latestVersion ? $user->can('reject', $latestVersion) : false,
            'canAcknowledge' => $latestVersion ? $user->can('acknowledge', $latestVersion) : false,
            'canRequestRevision' => $user->can('requestRevision', $document),
            'canResolveRevisionRequest' => $user->can('resolveRevisionRequest', $document),
            'canSubmitNewVersion' => $user->can('submitNewVersion', $document),
            'canCancel' => $user->can('cancel', $document),
        ];
        $document['other_documents'] = Document::where('id', '!=', $document->id)->get(['id', 'name', 'code']);

        return response()->json($document);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Document\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function edit(Document $document)
    {
        return response()->json($document);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDocumentRequest  $request
     * @param  \App\Models\Document\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDocumentRequest $request, Document $document)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Document\Document  $document
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Document $document)
    {
        $this->authorize('delete', $document);

        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.document.deleted', ['document' => $document->name])]);

        $document->delete();

        return redirect()->route('document.index');
    }

    /**
     * Cancel the document, optionally in favor of a replacement document.
     */
    public function cancel(CancelDocumentRequest $request, Document $document)
    {
        $this->authorize('cancel', $document);

        $supersededBy = $request->filled('superseded_by_document_id')
            ? Document::findOrFail($request->validated('superseded_by_document_id'))
            : null;

        try {
            $this->documentWorkflowService->cancel($document, auth()->user(), $request->validated('reason'), $supersededBy);
        } catch (RuntimeException $exception) {
            session()->flash('message', ['type' => 'danger', 'content' => $exception->getMessage()]);

            return redirect()->back();
        }

        session()->flash('message', ['type' => 'success', 'content' => __('messages.document.cancelled', ['document' => $document->name])]);

        return redirect()->back();
    }
}
