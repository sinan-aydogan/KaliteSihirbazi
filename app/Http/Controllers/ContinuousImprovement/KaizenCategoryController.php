<?php

namespace App\Http\Controllers\ContinuousImprovement;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreKaizenCategoryRequest;
use App\Http\Requests\UpdateKaizenCategoryRequest;
use App\Models\ContinuousImprovement\KaizenCategory;
use Illuminate\Support\Str;
use Inertia\Inertia;

class KaizenCategoryController extends Controller
{
    public function index()
    {
        $kaizenCategories = $this->tableFilter(KaizenCategory::withCount('suggestions'))
            ->orderBy('sort_order')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/ContinuousImprovement/Setting/KaizenCategory/IndexPage', [
            'tableData' => $kaizenCategories,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreKaizenCategoryRequest $request)
    {
        KaizenCategory::create([
            ...$request->validated(),
            'key' => Str::slug($request->validated('name'), '_'),
            'is_protected' => false,
        ]);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.kaizenCategory.created')]);

        return redirect()->back();
    }

    public function show(KaizenCategory $kaizenCategory)
    {
        //
    }

    public function edit(KaizenCategory $kaizenCategory)
    {
        return response()->json($kaizenCategory);
    }

    public function update(UpdateKaizenCategoryRequest $request, KaizenCategory $kaizenCategory)
    {
        $kaizenCategory->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.kaizenCategory.updated')]);

        return redirect()->back();
    }

    public function destroy(KaizenCategory $kaizenCategory)
    {
        if ($kaizenCategory->is_protected) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.kaizenCategory.deletedErrorProtected')]);

            return redirect()->back();
        }

        if ($kaizenCategory->suggestions()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.kaizenCategory.deletedError')]);

            return redirect()->back();
        }

        $kaizenCategory->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.kaizenCategory.deleted')]);

        return redirect()->back();
    }
}
