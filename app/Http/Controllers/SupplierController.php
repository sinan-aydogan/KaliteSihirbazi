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
            'supplierTableData' => [
                'data' => $suppliers
            ],
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
        try {
            $supplier = Supplier::create($request->validated());

            if ($request->types) {
                $supplier->types()->sync($request->types);
            }
            if ($request->tags) {
                $supplier->tags()->sync($request->tags);
            }

            session()->flash('message', [
                'type' => 'success',
                'content' => __('Tedarikçi başarıyla oluşturuldu', ['supplier' => $supplier->name])
            ]);

            return redirect()->back();
        } catch (\Exception $e) {
            session()->flash('message', [
                'type' => 'error',
                'content' => 'Tedarikçi oluşturulurken bir hata oluştu: ' . $e->getMessage()
            ]);
            return redirect()->back()->withInput();
        }
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
        $supplier->load('types', 'tags');
        return response()->json($supplier);
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
    try {
        $supplier->update($request->validated());

        // Update relationships
        $supplier->types()->sync($request->types ?? []);
        $supplier->tags()->sync($request->tags ?? []);

        session()->flash('message', [
            'type' => 'success',
            'content' => __('Tedarikçi başarıyla güncellendi: ', ['supplier' => $supplier->name])
        ]);

        return redirect()->back();
    } catch (\Exception $e) {
        session()->flash('message', [
            'type' => 'error',
            'content' => __('Tedarikçi güncellenirken bir hata oluştu: ' . $e->getMessage())
        ]);
        return redirect()->back()->withInput();
    }
}


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function destroy(Supplier $supplier)
    {
        try {
            $supplier->delete();

            session()->flash('message', [
                'type' => 'success',
                'content' => __('Tedariköi başarıyla silindi', ['supplier' => $supplier->name])
            ]);

            return redirect()->back();
        } catch (\Exception $e) {
            session()->flash('message', [
                'type' => 'error',
                'content' => __('Tedarikçi silinirken bir hata oluştu: ' . $e->getMessage())
            ]);

            return redirect()->back();
        }
    }
}
