<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCapaSourceTypeRequest;
use App\Http\Requests\UpdateCapaSourceTypeRequest;
use App\Models\CapaSourceType;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CapaSourceTypeController extends Controller
{
    public function index()
    {
        $capaSourceTypes = $this->tableFilter(CapaSourceType::withCount('capas'))
            ->orderBy('sort_order')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/Capa/Setting/CapaSourceType/IndexPage', [
            'tableData' => $capaSourceTypes,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreCapaSourceTypeRequest $request)
    {
        CapaSourceType::create([
            ...$request->validated(),
            'key' => Str::slug($request->validated('name'), '_'),
            'is_protected' => false,
        ]);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.capaSourceType.created')]);

        return redirect()->back();
    }

    public function show(CapaSourceType $capaSourceType)
    {
        //
    }

    public function edit(CapaSourceType $capaSourceType)
    {
        return response()->json($capaSourceType);
    }

    public function update(UpdateCapaSourceTypeRequest $request, CapaSourceType $capaSourceType)
    {
        $capaSourceType->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.capaSourceType.updated')]);

        return redirect()->back();
    }

    public function destroy(CapaSourceType $capaSourceType)
    {
        if ($capaSourceType->is_protected) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.capaSourceType.deletedErrorProtected')]);

            return redirect()->back();
        }

        if ($capaSourceType->capas()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.capaSourceType.deletedError')]);

            return redirect()->back();
        }

        $capaSourceType->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.capaSourceType.deleted')]);

        return redirect()->back();
    }
}
