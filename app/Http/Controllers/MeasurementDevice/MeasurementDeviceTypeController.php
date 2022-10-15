<?php

namespace App\Http\Controllers\MeasurementDevice;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMeasurementDeviceTypeRequest;
use App\Http\Requests\UpdateMeasurementDeviceTypeRequest;
use App\Models\MeasurementDevice\MeasurementDeviceType;
use Inertia\Inertia;

class MeasurementDeviceTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render("Modules/MeasurementDevice/Type/IndexPage", [
            'tableData' => MeasurementDeviceType::latest('id')->paginate(10),
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function deleted()
    {
        return Inertia::render("Modules/MeasurementDevice/Type/DeletedPage", [
            'tableData' => MeasurementDeviceType::onlyTrashed()->latest('deleted_at')->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreMeasurementDeviceTypeRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreMeasurementDeviceTypeRequest $request)
    {
        $measurementDeviceType = new MeasurementDeviceType;
        $measurementDeviceType->code = $request->code;
        $measurementDeviceType->name = $request->name;
        $measurementDeviceType->description = $request->description;

        $measurementDeviceType->save();

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.measurementDeviceType.created', ['measurementDeviceType' => $measurementDeviceType->name])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MeasurementDevice\MeasurementDeviceType  $measurementDeviceType
     * @return \Illuminate\Http\Response
     */
    public function show(MeasurementDeviceType $measurementDeviceType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MeasurementDevice\MeasurementDeviceType  $measurementDeviceType
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(MeasurementDeviceType $measurementDeviceType)
    {
        return response()->json($measurementDeviceType);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMeasurementDeviceTypeRequest  $request
     * @param  \App\Models\MeasurementDevice\MeasurementDeviceType  $measurementDeviceType
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateMeasurementDeviceTypeRequest $request, MeasurementDeviceType $measurementDeviceType)
    {
        $measurementDeviceType->code = $request->code;
        $measurementDeviceType->name = $request->name;
        $measurementDeviceType->description = $request->description;

        $measurementDeviceType->save();

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.measurementDeviceType.updated', ['measurementDeviceType' => $measurementDeviceType->name])]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MeasurementDevice\MeasurementDeviceType  $measurementDeviceType
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(MeasurementDeviceType $measurementDeviceType)
    {
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.measurementDeviceType.deleted', ['measurementDeviceType' => $measurementDeviceType->name])]);

        $measurementDeviceType->delete();

        return redirect()->route('measurement-device-type.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MeasurementDevice\MeasurementDeviceType  $measurementDeviceType
     * @return \Illuminate\Http\RedirectResponse
     */
    public function permanentDestroy(MeasurementDeviceType $measurementDeviceType)
    {
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.measurementDeviceType.permanentDeleted', ['measurementDeviceType' => $measurementDeviceType->name])]);

        $measurementDeviceType->forceDelete();

        return redirect()->route('measurement-device-type.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MeasurementDevice\MeasurementDeviceType  $measurementDeviceType
     * @return \Illuminate\Http\RedirectResponse
     */
    public function restore(MeasurementDeviceType $measurementDeviceType)
    {
        session()->flash('message', ['type'=> 'info', 'content'=>__('messages.measurementDeviceType.restored', ['measurementDeviceType' => $measurementDeviceType->name])]);

        $measurementDeviceType->restore();

        return redirect()->route('measurement-device-type.index');
    }
}
