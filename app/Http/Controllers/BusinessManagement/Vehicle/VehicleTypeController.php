<?php

namespace App\Http\Controllers\BusinessManagement\Vehicle;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreVehicleTypeRequest;
use App\Http\Requests\UpdateVehicleTypeRequest;
use App\Models\BusinessManagement\Vehicle\VehicleType;

class VehicleTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Modules/BusinessManagement/Vehicle/Setting/TypePage', [
            'tableData' => VehicleType::select(['id', 'name'])->paginate(10)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVehicleTypeRequest $request)
    {
        $vehicleType = new VehicleType;
        $vehicleType->name = $request->name;
        $vehicleType->save();
        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.vehicleType.created', ['vehicleType' => $vehicleType->name])]);
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(VehicleType $vehicleType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(VehicleType $vehicleType)
    {
        return response()->json($vehicleType);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVehicleTypeRequest $request, VehicleType $vehicleType)
    {
        $vehicleType->name = $request->name;
        $vehicleType->save();
        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.vehicleType.updated', ['vehicleType' => $vehicleType->name])]);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(VehicleType $vehicleType)
    {
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.vehicleType.deleted', ['vehicleType' => $vehicleType->name])]);
        $vehicleType->delete();
        return redirect()->route('vehicle-type.index');
    }
}
