<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCapaActionRequest;
use App\Http\Requests\UpdateCapaActionRequest;
use App\Models\Capa;
use App\Models\CapaAction;
use App\Services\Capa\CapaWorkflowService;
use RuntimeException;

class CapaActionController extends Controller
{
    public function __construct(private readonly CapaWorkflowService $capaWorkflowService)
    {
    }

    public function store(StoreCapaActionRequest $request, Capa $capa)
    {
        $this->capaWorkflowService->addAction($capa, $request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.capaAction.created')]);

        return redirect()->back();
    }

    public function update(UpdateCapaActionRequest $request, CapaAction $capaAction)
    {
        $this->capaWorkflowService->updateAction($capaAction, $request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.capaAction.updated')]);

        return redirect()->back();
    }

    public function destroy(CapaAction $capaAction)
    {
        $this->capaWorkflowService->deleteAction($capaAction);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.capaAction.deleted')]);

        return redirect()->back();
    }

    public function start(CapaAction $capaAction)
    {
        return $this->runWorkflowAction(
            fn () => $this->capaWorkflowService->startAction($capaAction),
            'messages.capaAction.started',
        );
    }

    public function complete(CapaAction $capaAction)
    {
        return $this->runWorkflowAction(
            fn () => $this->capaWorkflowService->completeAction($capaAction),
            'messages.capaAction.completed',
        );
    }

    private function runWorkflowAction(callable $action, string $successMessageKey)
    {
        try {
            $action();
        } catch (RuntimeException $exception) {
            session()->flash('message', ['type' => 'danger', 'content' => $exception->getMessage()]);

            return redirect()->back();
        }

        session()->flash('message', ['type' => 'success', 'content' => __($successMessageKey)]);

        return redirect()->back();
    }
}
