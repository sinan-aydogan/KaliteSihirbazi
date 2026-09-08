<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCapaRequest;
use App\Http\Requests\UpdateCapaRequest;
use App\Models\Capa;
use App\Models\User;
use App\Services\Capa\CapaWorkflowService;
use Inertia\Inertia;

class CapaController extends Controller
{
    public function __construct(private readonly CapaWorkflowService $capaWorkflowService)
    {
    }

    public function index()
    {
        $capas = $this->tableFilter(Capa::withCount('actions')->with(['responsible:id,name', 'openedBy:id,name']))
            ->latest('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/Capa/IndexPage', [
            'tableData' => $capas,
            'users' => User::all(['id', 'name']),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreCapaRequest $request)
    {
        $capa = $this->capaWorkflowService->create($request->validated(), auth()->user());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.capa.created', ['capa' => $capa->code])]);

        return redirect()->back();
    }

    public function show(Capa $capa)
    {
        $capa->load([
            'responsible:id,name',
            'openedBy:id,name',
            'problem:id,code,title',
            'actions.responsible:id,name',
            'verifications.verifiedBy:id,name',
        ]);

        return Inertia::render('Modules/Capa/ShowPage', [
            'capa' => $capa,
            'users' => User::all(['id', 'name']),
        ]);
    }

    public function edit(Capa $capa)
    {
        return response()->json($capa);
    }

    public function update(UpdateCapaRequest $request, Capa $capa)
    {
        $capa->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.capa.updated', ['capa' => $capa->code])]);

        return redirect()->back();
    }

    public function destroy(Capa $capa)
    {
        if ($capa->actions()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.capa.deletedError', ['capa' => $capa->code])]);

            return redirect()->back();
        }

        session()->flash('message', ['type' => 'success', 'content' => __('messages.capa.deleted', ['capa' => $capa->code])]);

        $capa->delete();

        return redirect()->route('capa.index');
    }
}
