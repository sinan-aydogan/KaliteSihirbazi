<?php

namespace App\Http\Controllers\Warehouse;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreWarehouseRequest;
use App\Http\Requests\UpdateWarehouseRequest;
use App\Models\Department;
use App\Models\HumanResources\Employee\Employee;
use App\Models\Warehouse\Warehouse;
use App\Models\Warehouse\WarehouseType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class WarehouseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Inertia::render('Modules/BusinessManagement/Warehouse/IndexPage', [
            'tableData' => $this->tableFilter(Warehouse::with('supervisor:id,name,has_account', 'supervisor.account:accountable_id,name', 'type:id,name', 'department:id,name'), [
                'warehouse_type_id' => ['relation' => 'type', 'column' => 'name'],
                'department_id' => ['relation' => 'department', 'column' => 'name'],
                'supervisor_id' => ['relation' => 'supervisor', 'column' => 'name'],
            ])->latest('id')->paginate(10)->withQueryString(),
            'employees' => Employee::all(['id', 'name']),
            'warehouseTypes' => WarehouseType::all(['id', 'name']),
            'departments' => Department::all(['id', 'name']),
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function deleted()
    {
        return Inertia::render('Modules/BusinessManagement/Warehouse/DeletedPage', [
            'tableData' => $this->tableFilter(Warehouse::onlyTrashed()->with('supervisor:id,name,has_account', 'supervisor.account:accountable_id,name', 'type:id,name', 'department:id,name'), [
                'warehouse_type_id' => ['relation' => 'type', 'column' => 'name'],
                'department_id' => ['relation' => 'department', 'column' => 'name'],
                'supervisor_id' => ['relation' => 'supervisor', 'column' => 'name'],
            ])->latest('deleted_at')->paginate(10)->withQueryString(),
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
    public function store(StoreWarehouseRequest $request)
    {
        $warehouse = Warehouse::create($request->validated());

        session()->flash('message', [
            'type' => 'success',
            'content' => __('messages.warehouse.created', ['warehouse' => $warehouse->name]),
        ]);

        return redirect()->back()->with(['warehouse' => $warehouse]);
    }

    /**
     * Display the specified resource.
     *
     * @return Response
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
            'data' => $data,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return JsonResponse
     */
    public function edit(Warehouse $warehouse)
    {
        return response()->json($warehouse);
    }

    /**
     * Update the specified resource in storage.
     *
     * @return RedirectResponse
     */
    public function update(UpdateWarehouseRequest $request, Warehouse $warehouse)
    {
        $warehouse->update($request->validated());

        session()->flash('message', [
            'type' => 'success',
            'content' => __('messages.warehouse.updated', ['warehouse' => $warehouse->name]),
        ]);

        return redirect()->back()->with(['warehouse' => $warehouse]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return RedirectResponse
     */
    public function destroy(Warehouse $warehouse)
    {
        session()->flash('message', [
            'type' => 'danger',
            'content' => __('messages.warehouse.deleted', ['warehouse' => $warehouse->name]),
        ]);

        $warehouse->delete();

        return redirect()->route('warehouse.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return RedirectResponse
     */
    public function permanentDestroy(Warehouse $warehouse)
    {
        session()->flash('message', [
            'type' => 'danger',
            'content' => __('messages.warehouse.permanentDeleted', ['warehouse' => $warehouse->name]),
        ]);

        $warehouse->forceDelete();

        return redirect()->route('warehouse.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return RedirectResponse
     */
    public function restore(Warehouse $warehouse)
    {
        session()->flash('message', [
            'type' => 'info',
            'content' => __('messages.warehouse.restored', ['warehouse' => $warehouse->name]),
        ]);

        $warehouse->restore();

        return redirect()->route('warehouse.index');
    }
}
