<?php

namespace App\Http\Controllers;

use App\Models\ProductTree;
use App\Http\Requests\StoreProductTreeRequest;
use App\Http\Requests\UpdateProductTreeRequest;

class ProductTreeController extends Controller
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
     * @param  \App\Http\Requests\StoreProductTreeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductTreeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProductTree  $productTree
     * @return \Illuminate\Http\Response
     */
    public function show(ProductTree $productTree)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProductTree  $productTree
     * @return \Illuminate\Http\Response
     */
    public function edit(ProductTree $productTree)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductTreeRequest  $request
     * @param  \App\Models\ProductTree  $productTree
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductTreeRequest $request, ProductTree $productTree)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProductTree  $productTree
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductTree $productTree)
    {
        //
    }
}
