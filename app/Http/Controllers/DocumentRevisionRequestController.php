<?php

namespace App\Http\Controllers;

use App\Models\DocumentRevisionRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDocumentRevisionRequestRequest;
use App\Http\Requests\UpdateDocumentRevisionRequestRequest;
use Inertia\Inertia;

class DocumentRevisionRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('ComingSoon');
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
     * @param  \App\Http\Requests\StoreDocumentRevisionRequestRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDocumentRevisionRequestRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DocumentRevisionRequest  $documentRevisionRequest
     * @return \Illuminate\Http\Response
     */
    public function show(DocumentRevisionRequest $documentRevisionRequest)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DocumentRevisionRequest  $documentRevisionRequest
     * @return \Illuminate\Http\Response
     */
    public function edit(DocumentRevisionRequest $documentRevisionRequest)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDocumentRevisionRequestRequest  $request
     * @param  \App\Models\DocumentRevisionRequest  $documentRevisionRequest
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDocumentRevisionRequestRequest $request, DocumentRevisionRequest $documentRevisionRequest)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DocumentRevisionRequest  $documentRevisionRequest
     * @return \Illuminate\Http\Response
     */
    public function destroy(DocumentRevisionRequest $documentRevisionRequest)
    {
        //
    }
}