<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAreaRequest;
use App\Http\Requests\UpdateAreaRequest;
use App\Models\Area;
use App\Models\Department;
use App\Models\User;
use Inertia\Inertia;

class AreaController extends Controller
{
    public function index()
    {
        $areas = $this->tableFilter(Area::withCount(['fiveSAudits', 'gembaWalks'])->with(['department:id,name', 'responsible:id,name']))
            ->latest('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/BusinessManagement/Area/IndexPage', [
            'tableData' => $areas,
            'departments' => Department::all(['id', 'name']),
            'users' => User::all(['id', 'name']),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreAreaRequest $request)
    {
        $area = Area::create($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.area.created', ['area' => $area->name])]);

        return redirect()->back();
    }

    public function show(Area $area)
    {
        $area->load('department:id,name', 'responsible:id,name', 'devices:id,code,name', 'machines:id,code,name', 'measurementDevices:id,code,brand,model');

        return Inertia::render('Modules/BusinessManagement/Area/ShowPage', [
            'data' => $area,
        ]);
    }

    public function edit(Area $area)
    {
        return response()->json($area);
    }

    public function update(UpdateAreaRequest $request, Area $area)
    {
        $area->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.area.updated', ['area' => $area->name])]);

        return redirect()->back();
    }

    public function destroy(Area $area)
    {
        if ($area->fiveSAudits()->exists() || $area->gembaWalks()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.area.deletedError', ['area' => $area->name])]);

            return redirect()->back();
        }

        $area->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.area.deleted', ['area' => $area->name])]);

        return redirect()->back();
    }
}
