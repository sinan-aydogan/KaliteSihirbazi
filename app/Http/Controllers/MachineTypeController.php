<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMachineTypeRequest;
use App\Http\Requests\UpdateMachineTypeRequest;
use App\Models\MachineType;
use Inertia\Inertia;

class MachineTypeController extends Controller
{
    public function index()
    {
        return Inertia::render('Modules/BusinessManagement/Machine/Setting/TypePage', [
            'tableData' => $this->tableFilter(MachineType::query())->select(['id', 'name'])->paginate(10)->withQueryString(),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreMachineTypeRequest $request)
    {
        $machineType = MachineType::create($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.machineType.created', ['machineType' => $machineType->name])]);

        return redirect()->back();
    }

    public function show(MachineType $machineType)
    {
        //
    }

    public function edit(MachineType $machineType)
    {
        return response()->json($machineType);
    }

    public function update(UpdateMachineTypeRequest $request, MachineType $machineType)
    {
        $machineType->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.machineType.updated', ['machineType' => $machineType->name])]);

        return redirect()->back();
    }

    public function destroy(MachineType $machineType)
    {
        session()->flash('message', ['type' => 'danger', 'content' => __('messages.machineType.deleted', ['machineType' => $machineType->name])]);

        $machineType->delete();

        return redirect()->route('machine-type.index');
    }
}
