<?php

namespace App\Http\Controllers\Document;

use App\Http\Controllers\Controller;
use App\Models\Document\DocumentType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DocumentTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $types = DocumentType::all();
        return Inertia::render("Modules/Document/Setting/TypePage", [
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
    public function store(Request $request)
    {
        $documentType = new DocumentType();
        $documentType->code = $request->code;
        $documentType->name = $request->name;

        $documentType->save();

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.documentType.created', ['documentType' => $documentType->name])]);

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
    public function update(Request $request, DocumentType $documentType)
    {
        $documentType->code = $request->code;
        $documentType->name = $request->name;

        $documentType->save();

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.documentType.updated', ['documentType' => $documentType->name])]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DocumentType $documentType)
    {
        if($documentType->documents()){
            session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.documentType.deletedError', ['documentType' => $documentType->name])]);
            return redirect()->back();
        }

        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.documentType.deleted', ['documentType' => $documentType->name])]);

        $documentType->delete();

        return redirect()->route('document-type.index');
    }
}
