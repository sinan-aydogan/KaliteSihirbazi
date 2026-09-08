<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRiskCategoryRequest;
use App\Http\Requests\UpdateRiskCategoryRequest;
use App\Models\RiskCategory;
use Illuminate\Support\Str;
use Inertia\Inertia;

class RiskCategoryController extends Controller
{
    public function index()
    {
        $riskCategories = $this->tableFilter(RiskCategory::withCount('risks'))
            ->orderBy('sort_order')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/Risk/Setting/CategoriesPage', [
            'tableData' => $riskCategories,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreRiskCategoryRequest $request)
    {
        RiskCategory::create([
            ...$request->validated(),
            'key' => Str::slug($request->validated('name'), '_'),
            'is_protected' => false,
        ]);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.riskCategory.created')]);

        return redirect()->back();
    }

    public function show(RiskCategory $riskCategory)
    {
        //
    }

    public function edit(RiskCategory $riskCategory)
    {
        return response()->json($riskCategory);
    }

    public function update(UpdateRiskCategoryRequest $request, RiskCategory $riskCategory)
    {
        $riskCategory->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.riskCategory.updated')]);

        return redirect()->back();
    }

    public function destroy(RiskCategory $riskCategory)
    {
        if ($riskCategory->is_protected) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.riskCategory.deletedErrorProtected')]);

            return redirect()->back();
        }

        if ($riskCategory->risks()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.riskCategory.deletedError')]);

            return redirect()->back();
        }

        $riskCategory->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.riskCategory.deleted')]);

        return redirect()->back();
    }
}
