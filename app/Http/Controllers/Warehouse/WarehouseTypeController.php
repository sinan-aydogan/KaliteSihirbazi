<?php

namespace App\Http\Controllers\Warehouse;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreWarehouseTypeRequest;
use App\Http\Requests\UpdateWarehouseTypeRequest;
use App\Models\WarehouseType;
use Inertia\Inertia;

class WarehouseTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index(){
        return Inertia::render('Modules/BusinessManagement/Warehouse/Setting/TypePage',[
            'tableData' => WarehouseType::select(['id', 'code', 'name'])->paginate('10')
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
     * @param  \App\Http\Requests\StoreWarehouseTypeRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreWarehouseTypeRequest $request)
    {
        $warehouse = new WarehouseType;
        $warehouse->code = $request->code;
        $warehouse->name = $request->name;

        $warehouse->save();

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.warehouseType.created', ['warehouseType' => $warehouse->name])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\WarehouseType  $warehouseType
     * @return \Illuminate\Http\Response
     */
    public function show(WarehouseType $warehouseType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\WarehouseType  $warehouseType
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(WarehouseType $warehouseType)
    {
        return response()->json($warehouseType);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateWarehouseTypeRequest  $request
     * @param  \App\Models\WarehouseType  $warehouseType
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateWarehouseTypeRequest $request, WarehouseType $warehouseType)
    {
        $warehouseType->code = $request->code;
        $warehouseType->name = $request->name;

        $warehouseType->save();

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.warehouseType.updated', ['warehouseType' => $warehouseType->name])]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\WarehouseType  $warehouseType
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(WarehouseType $warehouseType)
    {
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.warehouseType.deleted', ['warehouseType' => $warehouseType->name])]);

        $warehouseType->delete();

        return redirect()->route('warehouse-type.index');
    }
}
