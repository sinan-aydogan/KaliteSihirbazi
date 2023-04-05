<?php

namespace App\Http\Controllers\Document;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDocumentRequest;
use App\Http\Requests\UpdateDocumentRequest;
use App\Models\Document\DistributionPoint;
use App\Models\Document\Document;
use App\Models\Document\DocumentType;
use Inertia\Inertia;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $documents = Document::with('documentType:id,name', 'creator:id,name')->latest('id')->paginate(10);
        $types = DocumentType::all(['id', 'name']);
        $distributionPoints = DistributionPoint::all(['id', 'name']);

        return Inertia::render('Modules/Document/IndexPage', [
            'tableData' => $documents,
            'types' => $types,
            'distributionPoints' => $distributionPoints,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
        $document['code'] = $request['code'];
        $document['name'] = $request['name'];
        $document['document_type_id'] = $request['document_type_id'];
        $document['description'] = $request['description'];
        $document['publishing_status'] = $request['publishing_status'];
        $document['creator_id'] = auth()->user()->id;

        $document->save();

        /*Sync Distribution Points*/
        $document->distributionPoints()->sync($request['distribution_points']);

        /*Sync Related Departments*/
        $document->relatedDepartments()->sync($request['related_departments']);

        /*TODO: Attachment*/

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.department.created', ['department' => $document->name])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Document\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function show(Document $document)
    {
        //
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
     * @return \Illuminate\Http\Response
     */
    public function destroy(Document $document)
    {
        //
    }
}
