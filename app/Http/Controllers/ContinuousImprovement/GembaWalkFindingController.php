<?php

namespace App\Http\Controllers\ContinuousImprovement;

use App\Http\Controllers\Controller;
use App\Http\Requests\ResolveGembaWalkFindingRequest;
use App\Http\Requests\StoreGembaWalkFindingRequest;
use App\Http\Requests\UpdateGembaWalkFindingRequest;
use App\Models\ContinuousImprovement\GembaWalk;
use App\Models\ContinuousImprovement\GembaWalkFinding;
use App\Services\ContinuousImprovement\GembaWalkService;

class GembaWalkFindingController extends Controller
{
    public function __construct(private readonly GembaWalkService $gembaWalkService)
    {
    }

    public function store(StoreGembaWalkFindingRequest $request, GembaWalk $gembaWalk)
    {
        $this->gembaWalkService->addFinding($gembaWalk, $request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.gembaWalkFinding.created')]);

        return redirect()->back();
    }

    public function update(UpdateGembaWalkFindingRequest $request, GembaWalkFinding $gembaWalkFinding)
    {
        $this->gembaWalkService->updateFinding($gembaWalkFinding, $request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.gembaWalkFinding.updated')]);

        return redirect()->back();
    }

    public function resolve(ResolveGembaWalkFindingRequest $request, GembaWalkFinding $gembaWalkFinding)
    {
        $this->gembaWalkService->resolveFinding($gembaWalkFinding, $request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.gembaWalkFinding.resolved')]);

        return redirect()->back();
    }

    public function destroy(GembaWalkFinding $gembaWalkFinding)
    {
        $this->gembaWalkService->deleteFinding($gembaWalkFinding);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.gembaWalkFinding.deleted')]);

        return redirect()->back();
    }
}
