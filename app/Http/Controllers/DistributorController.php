<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDistributorRequest;
use App\Http\Requests\UpdateDistributorRequest;
use App\Models\Distributor;
use Inertia\Inertia;

class DistributorController extends Controller
{
    public function index()
    {
        $distributors = $this->tableFilter(Distributor::withCount('complaints'))
            ->latest('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/BusinessManagement/Distributor/IndexPage', [
            'tableData' => $distributors,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreDistributorRequest $request)
    {
        $distributor = Distributor::create($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.distributor.created', ['distributor' => $distributor->name])]);

        return redirect()->back();
    }

    public function show(Distributor $distributor)
    {
        //
    }

    public function edit(Distributor $distributor)
    {
        return response()->json($distributor);
    }

    public function update(UpdateDistributorRequest $request, Distributor $distributor)
    {
        $distributor->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.distributor.updated', ['distributor' => $distributor->name])]);

        return redirect()->back();
    }

    public function destroy(Distributor $distributor)
    {
        if ($distributor->complaints()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.distributor.deletedError', ['distributor' => $distributor->name])]);

            return redirect()->back();
        }

        $distributor->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.distributor.deleted', ['distributor' => $distributor->name])]);

        return redirect()->back();
    }
}
