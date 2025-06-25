<?php

namespace App\Http\Controllers\BusinessManagement\Vehicle;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\BusinessManagement\Vehicle\VehicleStatus;
use App\Http\Requests\StoreVehicleStatusRequest;
use App\Http\Requests\UpdateVehicleStatusRequest;

class VehicleStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Modules/BusinessManagement/Vehicle/Setting/StatusPage',[
            'tableData' => VehicleStatus::select(['id', 'name'])->paginate('10')
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
    public function store(StoreVehicleStatusRequest $request)
    {
        $vehicleStatus = new VehicleStatus;
        $vehicleStatus->name = $request->name;
        $vehicleStatus->save();
        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.vehicleStatus.created', ['vehicleStatus' => $vehicleStatus->name])]);
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(VehicleStatus $vehicleStatus)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(VehicleStatus $vehicleStatus)
    {
        return response()->json($vehicleStatus);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVehicleStatusRequest $request, VehicleStatus $vehicleStatus)
    {
        $vehicleStatus->name = $request->name;
        $vehicleStatus->save();
        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.vehicleStatus.updated', ['vehicleStatus' => $vehicleStatus->name])]);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(VehicleStatus $vehicleStatus)
    {
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.vehicleStatus.deleted', ['vehicleStatus' => $vehicleStatus->name])]);
        $vehicleStatus->delete();
        return redirect()->route('vehicle-status.index');
    }
}
