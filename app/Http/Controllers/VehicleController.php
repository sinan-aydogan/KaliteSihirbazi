<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVehicleRequest;
use App\Http\Requests\UpdateVehicleRequest;
use App\Models\BusinessManagement\Vehicle\Vehicle;
use App\Models\BusinessManagement\Vehicle\VehicleStatus;
use App\Models\BusinessManagement\Vehicle\VehicleType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response|\Inertia\ResponseFactory
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
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function deleted()
    {
        return Inertia::render("Modules/BusinessManagement/Vehicle/DeletedPage", [
            'tableData' => Vehicle::onlyTrashed()->with('vehicleType:id,name')->latest('deleted_at')->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return void
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreVehicleRequest $request
     * @return RedirectResponse
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
     * @param Vehicle $vehicle
     * @return void
     */
    public function show(Vehicle $vehicle)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Vehicle $vehicle
     * @return JsonResponse
     */
    public function edit(Vehicle $vehicle)
    {
        $vehicle->load('vehicleType:id,name', 'vehicleStatus:id,name');

        return response()->json($vehicle);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateVehicleRequest $request
     * @param Vehicle $vehicle
     * @return RedirectResponse
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
     * @param Vehicle $vehicle
     * @return RedirectResponse
     */
    public function destroy(Vehicle $vehicle)
    {
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.vehicle.deleted', ['vehicle' => $vehicle->code])]);

        $vehicle->delete();

        return redirect()->route('vehicle.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Vehicle $vehicle
     * @return RedirectResponse
     */
    public function permanentDestroy(Vehicle $vehicle)
    {
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.vehicle.permanentDeleted', ['vehicle' => $vehicle->code])]);

        $vehicle->forceDelete();

        return redirect()->route('vehicle.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Vehicle $vehicle
     * @return RedirectResponse
     */
    public function restore(Vehicle $vehicle)
    {
        $vehicle->restore();

        session()->flash('message', ['type'=> 'info', 'content'=>__('messages.vehicle.restored', ['vehicle' => $vehicle->code])]);

        return redirect()->route('vehicle.index');
    }

}
