<?php

namespace App\Http\Controllers\ContinuousImprovement;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGembaWalkRequest;
use App\Http\Requests\UpdateGembaWalkRequest;
use App\Models\ContinuousImprovement\GembaWalk;
use App\Models\ContinuousImprovement\ImprovementArea;
use App\Models\User;
use App\Services\ContinuousImprovement\GembaWalkService;
use Inertia\Inertia;

class GembaWalkController extends Controller
{
    public function __construct(private readonly GembaWalkService $gembaWalkService)
    {
    }

    public function index()
    {
        $walks = $this->tableFilter(GembaWalk::withCount('findings')->with(['area:id,name', 'conductedBy:id,name']))
            ->latest('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/ContinuousImprovement/Gemba/IndexPage', [
            'tableData' => $walks,
            'areas' => ImprovementArea::where('is_active', true)->get(['id', 'name']),
            'users' => User::all(['id', 'name']),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreGembaWalkRequest $request)
    {
        $walk = $this->gembaWalkService->create($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.gembaWalk.created', ['walk' => $walk->code])]);

        return redirect()->back();
    }

    public function show(GembaWalk $gembaWalk)
    {
        $gembaWalk->load(['area:id,name', 'conductedBy:id,name', 'findings.responsible:id,name']);

        return Inertia::render('Modules/ContinuousImprovement/Gemba/ShowPage', [
            'walk' => $gembaWalk,
            'users' => User::all(['id', 'name']),
        ]);
    }

    public function edit(GembaWalk $gembaWalk)
    {
        return response()->json($gembaWalk);
    }

    public function update(UpdateGembaWalkRequest $request, GembaWalk $gembaWalk)
    {
        $this->gembaWalkService->update($gembaWalk, $request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.gembaWalk.updated', ['walk' => $gembaWalk->code])]);

        return redirect()->back();
    }

    public function destroy(GembaWalk $gembaWalk)
    {
        $gembaWalk->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.gembaWalk.deleted', ['walk' => $gembaWalk->code])]);

        return redirect()->back();
    }
}
