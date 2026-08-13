<?php

namespace App\Http\Controllers\Document;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDocumentTypeRequest;
use App\Http\Requests\UpdateDocumentTypeRequest;
use App\Models\Document\DocumentType;
use Inertia\Inertia;

class DocumentTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $types = $this->tableFilter(DocumentType::query())->latest('id')->paginate(10)->withQueryString();

        return Inertia::render('Modules/Document/Setting/TypePage', [
            'tableData' => $types,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDocumentTypeRequest $request)
    {
        $documentType = DocumentType::create($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.documentType.created', ['documentType' => $documentType->name])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(DocumentType $documentType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DocumentType $documentType)
    {
        return response()->json($documentType);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDocumentTypeRequest $request, DocumentType $documentType)
    {
        $documentType->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.documentType.updated', ['documentType' => $documentType->name])]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DocumentType $documentType)
    {
        if ($documentType->documents()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.documentType.deletedError', ['documentType' => $documentType->name])]);

            return redirect()->back();
        }

        session()->flash('message', ['type' => 'danger', 'content' => __('messages.documentType.deleted', ['documentType' => $documentType->name])]);

        $documentType->delete();

        return redirect()->route('document-type.index');
    }
}
