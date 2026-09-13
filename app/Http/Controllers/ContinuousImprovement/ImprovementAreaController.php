<?php

namespace App\Http\Controllers\ContinuousImprovement;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreImprovementAreaRequest;
use App\Http\Requests\UpdateImprovementAreaRequest;
use App\Models\ContinuousImprovement\ImprovementArea;
use App\Models\Department;
use App\Models\User;
use Inertia\Inertia;

class ImprovementAreaController extends Controller
{
    public function index()
    {
        $areas = $this->tableFilter(ImprovementArea::withCount(['fiveSAudits', 'gembaWalks'])->with(['department:id,name', 'responsible:id,name']))
            ->latest('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/ContinuousImprovement/Setting/ImprovementArea/IndexPage', [
            'tableData' => $areas,
            'departments' => Department::all(['id', 'name']),
            'users' => User::all(['id', 'name']),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreImprovementAreaRequest $request)
    {
        $area = ImprovementArea::create($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.improvementArea.created', ['area' => $area->name])]);

        return redirect()->back();
    }

    public function show(ImprovementArea $improvementArea)
    {
        //
    }

    public function edit(ImprovementArea $improvementArea)
    {
        return response()->json($improvementArea);
    }

    public function update(UpdateImprovementAreaRequest $request, ImprovementArea $improvementArea)
    {
        $improvementArea->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.improvementArea.updated', ['area' => $improvementArea->name])]);

        return redirect()->back();
    }

    public function destroy(ImprovementArea $improvementArea)
    {
        if ($improvementArea->fiveSAudits()->exists() || $improvementArea->gembaWalks()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.improvementArea.deletedError', ['area' => $improvementArea->name])]);

            return redirect()->back();
        }

        $improvementArea->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.improvementArea.deleted', ['area' => $improvementArea->name])]);

        return redirect()->back();
    }
}
