<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use App\Http\Requests\StoreSupplierRequest;
use App\Http\Requests\UpdateSupplierRequest;
use App\Models\SupplierTag;
use App\Models\SupplierType;
use Inertia\Inertia;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $suppliers = Supplier::with('types', 'tags')->get();
        $supplierTypes = SupplierType::all();
        $supplierTags = SupplierTag::all();

        return Inertia::render('Modules/BusinessManagement/Supplier/IndexPage', [
            'supplierTableData' => $suppliers,
            'supplierTypes' => $supplierTypes,
            'supplierTags' => $supplierTags,
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
     * @param  \App\Http\Requests\StoreSupplierRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreSupplierRequest $request)
    {
        $supplier = new Supplier;
        $supplier->code = $request->code;
        $supplier->name = $request->name;
        $supplier->save();

        /*Types*/
        $supplier->types()->sync($request->types);
        $supplier->tags()->sync($request->tags);

        $supplier->save();

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.department.created', ['supplier' => $supplier->name])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function show(Supplier $supplier)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function edit(Supplier $supplier)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSupplierRequest  $request
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSupplierRequest $request, Supplier $supplier)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function destroy(Supplier $supplier)
    {
        //
    }
}
