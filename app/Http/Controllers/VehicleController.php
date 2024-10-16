<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVehicleRequest;
use App\Http\Requests\UpdateVehicleRequest;
use App\Models\BusinessManagement\Vehicle\Vehicle;
use App\Models\BusinessManagement\Vehicle\VehicleStatus;
use App\Models\BusinessManagement\Vehicle\VehicleType;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function index()
    {
        return inertia('Modules/BusinessManagement/Vehicle/IndexPage', [
            'tableData' => Vehicle::with('vehicleType:id,name')->latest('id')->paginate(10),
            'vehicleTypes' => VehicleType::all(['id', 'name']),
            'vehicleStatuses' => VehicleStatus::all(['id', 'name']),
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
     * @param  \App\Http\Requests\StoreVehicleRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreVehicleRequest $request)
    {
        $vehicle = new Vehicle($request->validated());
        $vehicle->save();

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.vehicle.created', ['vehicle' => $vehicle->code])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BusinessManagement\Vehicle\Vehicle  $vehicle
     * @return \Illuminate\Http\Response
     */
    public function show(Vehicle $vehicle)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BusinessManagement\Vehicle\Vehicle  $vehicle
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(Vehicle $vehicle)
    {
        $vehicle->load('vehicleType:id,name', 'vehicleStatus:id,name');

        return response()->json($vehicle);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateVehicleRequest  $request
     * @param  \App\Models\BusinessManagement\Vehicle\Vehicle  $vehicle
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateVehicleRequest $request, Vehicle $vehicle)
    {
        $vehicle->update($request->validated());

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.vehicle.updated', ['vehicle' => $vehicle->code])]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BusinessManagement\Vehicle\Vehicle  $vehicle
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Vehicle $vehicle)
    {
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.vehicle.deleted', ['vehicle' => $vehicle->code])]);

        $vehicle->delete();

        return redirect()->route('vehicles.index');
    }
}
