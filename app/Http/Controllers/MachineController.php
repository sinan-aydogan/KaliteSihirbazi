<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMachineRequest;
use App\Http\Requests\UpdateMachineRequest;
use App\Models\Area;
use App\Models\Department;
use App\Models\HumanResources\Employee\Employee;
use App\Models\Machine;
use App\Models\MachineType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class MachineController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Modules/BusinessManagement/Machine/IndexPage', [
            'tableData' => $this->tableFilter(Machine::with('type:id,name', 'department:id,name', 'responsible:id,name'), [
                'machine_type_id' => ['relation' => 'type', 'column' => 'name'],
                'department_id' => ['relation' => 'department', 'column' => 'name'],
                'responsible_id' => ['relation' => 'responsible', 'column' => 'name'],
            ])->latest('id')->paginate(10)->withQueryString(),
            'machineTypes' => MachineType::all(['id', 'name']),
            'departments' => Department::all(['id', 'name']),
            'employees' => Employee::all(['id', 'name']),
        ]);
    }

    public function deleted(): Response
    {
        return Inertia::render('Modules/BusinessManagement/Machine/DeletedPage', [
            'tableData' => $this->tableFilter(Machine::onlyTrashed()->with('type:id,name', 'department:id,name', 'responsible:id,name'))
                ->latest('deleted_at')->paginate(10)->withQueryString(),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreMachineRequest $request): RedirectResponse
    {
        $machine = Machine::create($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.machine.created', ['machine' => $machine->name])]);

        return redirect()->back();
    }

    public function show(Machine $machine): Response
    {
        $machine->load(
            'type:id,name',
            'department:id,name',
            'responsible:id,name,has_account',
            'responsible.account:accountable_id,name',
            'areas:id,name',
            'operatorAuthorizations.employee:id,name,has_account',
            'operatorAuthorizations.employee.account:accountable_id,name',
            'operatorAuthorizations.education:id,name',
            'operatorAuthorizations.grantedBy:id,name'
        );

        return Inertia::render('Modules/BusinessManagement/Machine/ShowPage', [
            'data' => $machine,
            'allAreas' => Area::all(['id', 'name']),
            'employees' => Employee::all(['id', 'name']),
        ]);
    }

    public function edit(Machine $machine): JsonResponse
    {
        return response()->json($machine);
    }

    public function update(UpdateMachineRequest $request, Machine $machine): RedirectResponse
    {
        $machine->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.machine.updated', ['machine' => $machine->name])]);

        return redirect()->back();
    }

    public function destroy(Machine $machine): RedirectResponse
    {
        session()->flash('message', ['type' => 'danger', 'content' => __('messages.machine.deleted', ['machine' => $machine->name])]);

        $machine->delete();

        return redirect()->route('machine.index');
    }

    public function permanentDestroy(Machine $machine): RedirectResponse
    {
        session()->flash('message', ['type' => 'danger', 'content' => __('messages.machine.permanentDeleted', ['machine' => $machine->name])]);

        $machine->forceDelete();

        return redirect()->route('machine.index');
    }

    public function restore(Machine $machine): RedirectResponse
    {
        session()->flash('message', ['type' => 'info', 'content' => __('messages.machine.restored', ['machine' => $machine->name])]);

        $machine->restore();

        return redirect()->route('machine.index');
    }
}
