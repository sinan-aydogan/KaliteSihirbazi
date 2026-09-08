<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreInternalAuditorRequest;
use App\Http\Requests\UpdateInternalAuditorRequest;
use App\Models\Department;
use App\Models\InternalAuditor;
use App\Models\User;
use Inertia\Inertia;

class InternalAuditorController extends Controller
{
    public function index()
    {
        $internalAuditors = $this->tableFilter(InternalAuditor::with(['user:id,name', 'departments:id,name']))
            ->latest('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/InternalAuditor/IndexPage', [
            'tableData' => $internalAuditors,
            'users' => User::all(['id', 'name']),
            'departments' => Department::all(['id', 'name']),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreInternalAuditorRequest $request)
    {
        $internalAuditor = InternalAuditor::create($request->safe()->except('department_ids'));
        $internalAuditor->departments()->sync($request->validated('department_ids', []));

        session()->flash('message', ['type' => 'success', 'content' => __('messages.internalAuditor.created')]);

        return redirect()->back();
    }

    public function show(InternalAuditor $internalAuditor)
    {
        //
    }

    public function edit(InternalAuditor $internalAuditor)
    {
        return response()->json($internalAuditor->load('departments:id,name'));
    }

    public function update(UpdateInternalAuditorRequest $request, InternalAuditor $internalAuditor)
    {
        $internalAuditor->update($request->safe()->except('department_ids'));
        $internalAuditor->departments()->sync($request->validated('department_ids', []));

        session()->flash('message', ['type' => 'success', 'content' => __('messages.internalAuditor.updated')]);

        return redirect()->back();
    }

    public function destroy(InternalAuditor $internalAuditor)
    {
        $internalAuditor->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.internalAuditor.deleted')]);

        return redirect()->back();
    }
}
