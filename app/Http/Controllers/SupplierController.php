<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSupplierRequest;
use App\Http\Requests\UpdateSupplierRequest;
use App\Models\Supplier;
use App\Models\SupplierTag;
use App\Models\SupplierType;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $suppliers = $this->tableFilter(Supplier::with('types', 'tags'), [
            'types' => ['relation' => 'types', 'column' => 'name'],
            'tags' => ['relation' => 'tags', 'column' => 'name'],
        ])->latest('id')->paginate(10)->withQueryString();
        $supplierTypes = SupplierType::all();
        $supplierTags = SupplierTag::all();

        return Inertia::render('Modules/BusinessManagement/Supplier/IndexPage', [
            'tableData' => $suppliers,
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
     * @return RedirectResponse
     */
    public function store(StoreSupplierRequest $request)
    {
        $validated = $request->validated();
        $supplier = Supplier::create($validated);

        $supplier->types()->sync($validated['types'] ?? []);
        $supplier->tags()->sync($validated['tags'] ?? []);

        session()->flash('message', [
            'type' => 'success',
            'content' => __('messages.supplier.created', ['supplier' => $supplier->name]),
        ]);

        return redirect()->back()->with(['supplier' => $supplier]);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Supplier $supplier)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
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
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSupplierRequest $request, Supplier $supplier)
    {
        $validated = $request->validated();
        $supplier->update($validated);

        $supplier->types()->sync($validated['types'] ?? []);
        $supplier->tags()->sync($validated['tags'] ?? []);

        session()->flash('message', [
            'type' => 'success',
            'content' => __('messages.supplier.updated', ['supplier' => $supplier->name]),
        ]);

        return redirect()->back()->with(['supplier' => $supplier]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(Supplier $supplier)
    {
        if ($supplier->complaints()->exists()) {
            session()->flash('message', [
                'type' => 'danger',
                'content' => __('messages.supplier.deletedError', ['supplier' => $supplier->name]),
            ]);

            return redirect()->back();
        }

        try {
            $supplier->delete();

            session()->flash('message', [
                'type' => 'success',
                'content' => __('messages.supplier.deleted', ['supplier' => $supplier->name]),
            ]);

            return redirect()->back();
        } catch (\Exception $e) {
            session()->flash('message', [
                'type' => 'error',
                'content' => __('messages.supplier.delete_failed', ['supplier' => $supplier->name]),
            ]);

            return redirect()->back();
        }
    }
}
