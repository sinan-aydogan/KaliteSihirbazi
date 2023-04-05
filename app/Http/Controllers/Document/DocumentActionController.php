<?php

namespace App\Http\Controllers\Document;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDocumentActionRequest;
use App\Http\Requests\UpdateDocumentActionRequest;
use App\Models\Document\DocumentAction;

class DocumentActionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreDocumentActionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDocumentActionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Document\DocumentAction  $documentAction
     * @return \Illuminate\Http\Response
     */
    public function show(DocumentAction $documentAction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Document\DocumentAction  $documentAction
     * @return \Illuminate\Http\Response
     */
    public function edit(DocumentAction $documentAction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDocumentActionRequest  $request
     * @param  \App\Models\Document\DocumentAction  $documentAction
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDocumentActionRequest $request, DocumentAction $documentAction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Document\DocumentAction  $documentAction
     * @return \Illuminate\Http\Response
     */
    public function destroy(DocumentAction $documentAction)
    {
        //
    }
}
