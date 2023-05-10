<?php

namespace App\Http\Controllers\Document;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDocumentRequest;
use App\Http\Requests\UpdateDocumentRequest;
use App\Models\Department;
use App\Models\Document\DistributionPoint;
use App\Models\Document\Document;
use App\Models\Document\DocumentType;
use App\Models\User;
use Inertia\Inertia;
use App\Traits\Document\DocumentCodeTrait;
use App\Traits\Document\DocumentVersionTrait;

class DocumentController extends Controller
{
    use DocumentCodeTrait;
    use DocumentVersionTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $documents = Document::with('documentType:id,name', 'distributionPoints:id,name', 'department:id,name', 'creator:id,name')->latest('id')->paginate(10);
        $types = DocumentType::all(['id', 'name']);
        $departments = Department::all(['id', 'name']);
        $distributionPoints = DistributionPoint::all(['id', 'name']);

        return Inertia::render('Modules/Document/IndexPage', [
            'tableData' => $documents,
            'types' => $types,
            'departments' => $departments,
            'namingRule' => $this->namingRule(),
            'distributionPoints' => $distributionPoints,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        $types = DocumentType::all(['id', 'name']);
        $departments = Department::all(['id', 'name']);
        $distributionPoints = DistributionPoint::all(['id', 'name']);
        $users = User::all(['id', 'name']);

        return Inertia::render('Modules/Document/CreatePage', [
            'types' => DocumentType::all(['id', 'name']),
            'departments' => Department::all(['id', 'name']),
            'distributionPoints' => DistributionPoint::all(['id', 'name']),
            'namingRule' => $this->namingRule(),
            'users' => User::all(['id', 'name']),
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

        /*TODO: Attachment*/
        $document->addMedia($request->file('file'))
        ->toMediaCollection('document');

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
        $document['department'] = $document->department()->first(['id', 'name']);
        $document['document_type'] = $document->documentType()->first(['id', 'name']);
        $document['revisions'] = $document->versions;
        $document['file'] = $document->getMedia('document')[0]->getUrl();


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
        //
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
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.document.deleted', ['document' => $document->name])]);

        $document->delete();

        return redirect()->route('document.index');
    }
}
