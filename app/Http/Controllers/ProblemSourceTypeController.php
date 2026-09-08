<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProblemSourceTypeRequest;
use App\Http\Requests\UpdateProblemSourceTypeRequest;
use App\Models\ProblemSourceType;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ProblemSourceTypeController extends Controller
{
    public function index()
    {
        $problemSourceTypes = $this->tableFilter(ProblemSourceType::withCount('problems'))
            ->orderBy('sort_order')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/ProblemSourceType/IndexPage', [
            'tableData' => $problemSourceTypes,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreProblemSourceTypeRequest $request)
    {
        ProblemSourceType::create([
            ...$request->validated(),
            'key' => Str::slug($request->validated('name'), '_'),
            'is_protected' => false,
        ]);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.problemSourceType.created')]);

        return redirect()->back();
    }

    public function show(ProblemSourceType $problemSourceType)
    {
        //
    }

    public function edit(ProblemSourceType $problemSourceType)
    {
        return response()->json($problemSourceType);
    }

    public function update(UpdateProblemSourceTypeRequest $request, ProblemSourceType $problemSourceType)
    {
        $problemSourceType->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.problemSourceType.updated')]);

        return redirect()->back();
    }

    public function destroy(ProblemSourceType $problemSourceType)
    {
        if ($problemSourceType->is_protected) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.problemSourceType.deletedErrorProtected')]);

            return redirect()->back();
        }

        if ($problemSourceType->problems()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.problemSourceType.deletedError')]);

            return redirect()->back();
        }

        $problemSourceType->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.problemSourceType.deleted')]);

        return redirect()->back();
    }
}
