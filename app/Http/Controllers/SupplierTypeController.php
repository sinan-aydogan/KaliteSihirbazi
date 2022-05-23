<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSupplierTypeRequest;
use App\Http\Requests\UpdateSupplierTypeRequest;
use App\Http\Resources\SupplierResource;
use App\Models\Supplier;
use App\Models\SupplierType;
use Inertia\Inertia;

class SupplierTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
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
     * @param \App\Http\Requests\StoreSupplierTypeRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSupplierTypeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\SupplierType $supplierType
     * @return \Illuminate\Http\Response
     */
    public function show(SupplierType $supplierType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\SupplierType $supplierType
     * @return \Illuminate\Http\Response
     */
    public function edit(SupplierType $supplierType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateSupplierTypeRequest $request
     * @param \App\Models\SupplierType $supplierType
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSupplierTypeRequest $request, SupplierType $supplierType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\SupplierType $supplierType
     * @return \Illuminate\Http\Response
     */
    public function destroy(SupplierType $supplierType)
    {
        //
    }
}
