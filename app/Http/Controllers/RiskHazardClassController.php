<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRiskHazardClassRequest;
use App\Http\Requests\UpdateRiskHazardClassRequest;
use App\Models\RiskHazardClass;
use Illuminate\Support\Str;
use Inertia\Inertia;

class RiskHazardClassController extends Controller
{
    public function index()
    {
        $riskHazardClasses = $this->tableFilter(RiskHazardClass::withCount('risks'))
            ->orderBy('sort_order')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/Risk/Setting/HazardClassesPage', [
            'tableData' => $riskHazardClasses,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreRiskHazardClassRequest $request)
    {
        RiskHazardClass::create([
            ...$request->validated(),
            'key' => Str::slug($request->validated('name'), '_'),
            'is_protected' => false,
        ]);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.riskHazardClass.created')]);

        return redirect()->back();
    }

    public function show(RiskHazardClass $riskHazardClass)
    {
        //
    }

    public function edit(RiskHazardClass $riskHazardClass)
    {
        return response()->json($riskHazardClass);
    }

    public function update(UpdateRiskHazardClassRequest $request, RiskHazardClass $riskHazardClass)
    {
        $riskHazardClass->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.riskHazardClass.updated')]);

        return redirect()->back();
    }

    public function destroy(RiskHazardClass $riskHazardClass)
    {
        if ($riskHazardClass->is_protected) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.riskHazardClass.deletedErrorProtected')]);

            return redirect()->back();
        }

        if ($riskHazardClass->risks()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.riskHazardClass.deletedError')]);

            return redirect()->back();
        }

        $riskHazardClass->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.riskHazardClass.deleted')]);

        return redirect()->back();
    }
}
