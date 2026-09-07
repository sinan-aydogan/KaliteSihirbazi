<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStandardRequest;
use App\Http\Requests\UpdateStandardRequest;
use App\Models\Standard;
use Inertia\Inertia;

class StandardController extends Controller
{
    public function index()
    {
        $standards = $this->tableFilter(Standard::withCount('companyAccreditations'))
            ->latest('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/Standard/IndexPage', [
            'tableData' => $standards,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreStandardRequest $request)
    {
        $standard = Standard::create($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.standard.created', ['standard' => $standard->name])]);

        return redirect()->back();
    }

    public function show(Standard $standard)
    {
        //
    }

    public function edit(Standard $standard)
    {
        return response()->json($standard);
    }

    public function update(UpdateStandardRequest $request, Standard $standard)
    {
        $standard->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.standard.updated', ['standard' => $standard->name])]);

        return redirect()->back();
    }

    public function destroy(Standard $standard)
    {
        if ($standard->companyAccreditations()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.standard.deletedError', ['standard' => $standard->name])]);

            return redirect()->back();
        }

        session()->flash('message', ['type' => 'success', 'content' => __('messages.standard.deleted', ['standard' => $standard->name])]);

        $standard->delete();

        return redirect()->route('standard.index');
    }
}
