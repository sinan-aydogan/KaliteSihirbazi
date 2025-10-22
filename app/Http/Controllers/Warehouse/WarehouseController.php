<?php

namespace App\Http\Controllers\Warehouse;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreWarehouseRequest;
use App\Http\Requests\UpdateWarehouseRequest;
use App\Models\Department;
use App\Models\HumanResources\Employee\Employee;
use App\Models\Warehouse\Warehouse;
use App\Models\Warehouse\WarehouseType;
use Inertia\Inertia;

class WarehouseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render("Modules/BusinessManagement/Warehouse/IndexPage", [
            'tableData' => Warehouse::with('supervisor:id,name,has_account','supervisor.account:accountable_id,name', 'type:id,name' ,'department:id,name')->latest('id')->paginate(10),
            'employees' => Employee::all(['id', 'name']),
            'warehouseTypes' => WarehouseType::all(['id','name']),
            'departments' => Department::all(['id', 'name'])
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function deleted()
    {
        return Inertia::render("Modules/BusinessManagement/Warehouse/DeletedPage", [
            'tableData' => Warehouse::onlyTrashed()->with('supervisor:id,name,has_account','supervisor.account:accountable_id,name', 'type:id,name' ,'department:id,name')->latest('deleted_at')->paginate(10),
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
     * @param  \App\Http\Requests\StoreWarehouseRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreWarehouseRequest $request)
    {
        try {
            $warehouse = Warehouse::create($request->validated());

            session()->flash('message', [
                'type' => 'success',
                'content' => __('messages.warehouse.created', ['warehouse' => $warehouse->name])
            ]);

            return redirect()->back()->with([
                 'warehouse' => $warehouse,
             ]);
        } catch (\Exception $e) {
            session()->flash('message', [
                'type' => 'error',
                'content' => __('messages.warehouse.creation_failed')
            ]);

            return redirect()->back();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Warehouse\Warehouse  $warehouse
     * @return \Inertia\Response
     */
    public function show(Warehouse $warehouse)
    {
        $data = [
            'id' => $warehouse->id,
            'code' => $warehouse->code,
            'name' => $warehouse->name,
            'department_id' => $warehouse->department_id,
            'warehouse_type_id' => $warehouse->warehouse_type_id,
            'employee_id' => $warehouse->employee_id,
        ];

        $data['supervisor'] = $warehouse->supervisor()->select('id', 'name')->first();
        $data['department'] = $warehouse->department()->select('id', 'name')->first();
        $data['type'] = $warehouse->type()->select('id', 'name')->first();

        return Inertia::render('Modules/BusinessManagement/Warehouse/ShowPage', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Warehouse\Warehouse  $warehouse
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(Warehouse $warehouse)
    {
        return response()->json($warehouse);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateWarehouseRequest  $request
     * @param  \App\Models\Warehouse\Warehouse  $warehouse
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateWarehouseRequest $request, Warehouse $warehouse)
    {
        try {
            $warehouse->update($request->validated());

            session()->flash('message', [
                'type'=> 'success',
                'content'=>__('messages.warehouse.updated', ['warehouse' => $warehouse->name])
            ]);

            return redirect()->back()->with([
                'warehouse' => $warehouse,
            ]);
        } catch (\Exception $e) {
            session()->flash('message', [
                'type'=> 'error',
                'content'=>__('messages.warehouse.update_failed')
            ]);

            return redirect()->back();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Warehouse\Warehouse  $warehouse
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Warehouse $warehouse)
    {
        session()->flash('message', [
            'type' => 'danger',
            'content' => __('messages.warehouse.deleted', ['warehouse' => $warehouse->name])
        ]);

        $warehouse->delete();

        return redirect()->route('warehouse.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Warehouse\Warehouse  $warehouse
     * @return \Illuminate\Http\RedirectResponse
     */
    public function permanentDestroy(Warehouse $warehouse)
    {
        session()->flash('message', [
            'type' => 'danger',
            'content' => __('messages.warehouse.permanentDeleted', ['warehouse' => $warehouse->name])
        ]);

        $warehouse->forceDelete();

        return redirect()->route('warehouse.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Warehouse\Warehouse  $warehouse
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore(Warehouse $warehouse)
    {
        session()->flash('message', [
            'type' => 'info',
            'content' => __('messages.warehouse.restored', ['warehouse' => $warehouse->name])
        ]);

        $warehouse->restore();

        return redirect()->route('warehouse.index');
    }
}
