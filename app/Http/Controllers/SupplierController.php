<?php

namespace App\Http\Controllers;

use App\Http\Resources\SupplierResource;
use App\Models\Supplier;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSupplierRequest;
use App\Http\Requests\UpdateSupplierRequest;
use App\Models\SupplierTag;
use App\Models\SupplierType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('Modules/BusinessManagement/Supplier/Index', [
            'supplierTableData' => SupplierResource::collection(Supplier::search($request->all())),
            'types' => SupplierType::all(['id', 'code', 'name']),
            'tags' => SupplierTag::all(['id', 'name']),
            'typeTableData' => SupplierType::all(['id', 'code', 'name']),
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
        $supplier = Supplier::create([
            'code'=>$request->input('code'),
            'name'=>$request->input('name'),
            'type'=>$request->input('type'),
            'contact_info'=>$request->input('contact_info'),
            'notes'=>$request->input('notes'),
            'supplier_type_id'=>$request->input('supplier_type_id'),
            'is_active'=>$request->input('is_active')
        ]);

        /*Types*/
        $supplier->types()->sync($request->input('supplier_types'));

        /*Tags*/
        $supplier->tags()->sync($request->input('tags'));

        return redirect()->back()->with('message', ['type'=>'success', 'message'=> 'supplier.main.message.creationSuccessfully'] );
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
        return response()->json($supplier);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSupplierRequest  $request
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateSupplierRequest $request, Supplier $supplier)
    {
        $supplier->update([
            'code'=>$request->input('code'),
            'name'=>$request->input('name'),
            'type'=>$request->input('type'),
            'contact_info'=>$request->input('contact_info'),
            'notes'=>$request->input('notes'),
            'supplier_type_id'=>$request->input('supplier_type_id'),
            'is_active'=>$request->input('is_active')
        ]);

        /*Types*/
        $supplier->types()->sync($request->input('supplier_types'));

        /*Tags*/
        $supplier->tags()->sync($request->input('tags'));

        return redirect()->back()->with('message', ['type'=>'success', 'message'=> 'supplier.main.message.updateSuccessfully'] );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function destroy(Supplier $supplier)
    {
        $warehouse->delete();

        return redirect()->back()->with('message', ['type'=>'success', 'message'=> 'warehouse.message.deletionSuccessfully'] );
    }
}
