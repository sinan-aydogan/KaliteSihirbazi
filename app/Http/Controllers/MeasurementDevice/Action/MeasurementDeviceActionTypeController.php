<?php

namespace App\Http\Controllers\MeasurementDevice\Action;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMeasurementDeviceActionTypeRequest;
use App\Http\Requests\UpdateMeasurementDeviceActionTypeRequest;
use App\Models\MeasurementDevice\Action\MeasurementDeviceActionType;
use Illuminate\Support\Str;
use Inertia\Inertia;

class MeasurementDeviceActionTypeController extends Controller
{
    public function index()
    {
        $types = $this->tableFilter(MeasurementDeviceActionType::withCount('actions'))
            ->orderBy('sort_order')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Modules/MeasurementDevice/Setting/ActionType/IndexPage', [
            'tableData' => $types,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreMeasurementDeviceActionTypeRequest $request)
    {
        MeasurementDeviceActionType::create([
            ...$request->validated(),
            'key' => Str::slug($request->validated('name'), '_'),
            'is_protected' => false,
        ]);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.measurementDeviceActionType.created')]);

        return redirect()->back();
    }

    public function show(MeasurementDeviceActionType $measurementDeviceActionType)
    {
        //
    }

    public function edit(MeasurementDeviceActionType $measurementDeviceActionType)
    {
        return response()->json($measurementDeviceActionType);
    }

    public function update(UpdateMeasurementDeviceActionTypeRequest $request, MeasurementDeviceActionType $measurementDeviceActionType)
    {
        $measurementDeviceActionType->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.measurementDeviceActionType.updated')]);

        return redirect()->back();
    }

    public function destroy(MeasurementDeviceActionType $measurementDeviceActionType)
    {
        if ($measurementDeviceActionType->is_protected) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.measurementDeviceActionType.deletedErrorProtected')]);

            return redirect()->back();
        }

        if ($measurementDeviceActionType->actions()->exists()) {
            session()->flash('message', ['type' => 'danger', 'content' => __('messages.measurementDeviceActionType.deletedError')]);

            return redirect()->back();
        }

        $measurementDeviceActionType->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.measurementDeviceActionType.deleted')]);

        return redirect()->back();
    }
}
