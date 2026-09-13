<?php

namespace App\Http\Controllers\ContinuousImprovement;

use App\Enums\KaizenSuggestionStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreKaizenSuggestionRequest;
use App\Http\Requests\UpdateKaizenSuggestionRequest;
use App\Models\ContinuousImprovement\KaizenCategory;
use App\Models\ContinuousImprovement\KaizenSuggestion;
use App\Models\Department;
use App\Models\User;
use App\Services\ContinuousImprovement\KaizenWorkflowService;
use Inertia\Inertia;

class KaizenSuggestionController extends Controller
{
    public function __construct(private readonly KaizenWorkflowService $kaizenWorkflowService)
    {
    }

    public function index()
    {
        $suggestions = $this->tableFilter(KaizenSuggestion::with([
            'category:id,name',
            'department:id,name',
            'proposedBy:id,name',
            'responsible:id,name',
        ]))
            ->latest('id')
            ->paginate(10)
            ->withQueryString();

        $kanbanColumns = collect(KaizenSuggestionStatus::cases())->mapWithKeys(function (KaizenSuggestionStatus $status) {
            return [$status->value => KaizenSuggestion::with(['category:id,name', 'responsible:id,name'])
                ->where('status', $status)
                ->latest('id')
                ->limit(50)
                ->get(['id', 'code', 'title', 'kaizen_category_id', 'responsible_id', 'planned_completion_date', 'status'])];
        });

        return Inertia::render('Modules/ContinuousImprovement/Kaizen/IndexPage', [
            'tableData' => $suggestions,
            'kanbanColumns' => $kanbanColumns,
            'kaizenCategories' => KaizenCategory::orderBy('sort_order')->get(['id', 'name']),
            'departments' => Department::all(['id', 'name']),
            'users' => User::all(['id', 'name']),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreKaizenSuggestionRequest $request)
    {
        $suggestion = $this->kaizenWorkflowService->create($request->validated(), auth()->user());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.kaizenSuggestion.created', ['suggestion' => $suggestion->code])]);

        return redirect()->back();
    }

    public function show(KaizenSuggestion $kaizenSuggestion)
    {
        $kaizenSuggestion->load([
            'category:id,name',
            'department:id,name',
            'proposedBy:id,name',
            'evaluatedBy:id,name',
            'responsible:id,name',
        ]);

        return Inertia::render('Modules/ContinuousImprovement/Kaizen/ShowPage', [
            'suggestion' => $kaizenSuggestion,
            'users' => User::all(['id', 'name']),
        ]);
    }

    public function edit(KaizenSuggestion $kaizenSuggestion)
    {
        return response()->json($kaizenSuggestion);
    }

    public function update(UpdateKaizenSuggestionRequest $request, KaizenSuggestion $kaizenSuggestion)
    {
        $this->kaizenWorkflowService->update($kaizenSuggestion, $request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.kaizenSuggestion.updated', ['suggestion' => $kaizenSuggestion->code])]);

        return redirect()->back();
    }

    public function destroy(KaizenSuggestion $kaizenSuggestion)
    {
        $kaizenSuggestion->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.kaizenSuggestion.deleted', ['suggestion' => $kaizenSuggestion->code])]);

        return redirect()->back();
    }
}
