<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Employee;
use App\Models\MeasurementDevice;
use App\Http\Requests\StoreMeasurementDeviceRequest;
use App\Http\Requests\UpdateMeasurementDeviceRequest;
use App\Models\MeasurementDeviceType;
use Inertia\Inertia;

class MeasurementDeviceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render("Modules/MeasurementDevice/Device/IndexPage", [
            'tableData' => MeasurementDevice::with('department:id,name','type:id,name', 'calibrationSupervisor:id,name', 'deviceSupervisor:id,name', 'calibrationSupervisor.account:accountable_id,name', 'deviceSupervisor.account:accountable_id,name')->latest('id')->paginate(10),
            'measurementDeviceTypes' => MeasurementDeviceType::all(['id', 'name']),
            'departments' => Department::all(['id', 'name']),
            'employees' => Employee::all(['id']),
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
     * @param  \App\Http\Requests\StoreMeasurementDeviceRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreMeasurementDeviceRequest $request)
    {
        $measurementDevice = new MeasurementDevice;
        $measurementDevice->code = $request->code;
        $measurementDevice->brand = $request->brand;
        $measurementDevice->model = $request->model;
        $measurementDevice->serial_no = $request->serial_no;
        $measurementDevice->properties = $request->properties;
        $measurementDevice->purchase_date = $request->purchase_date;
        $measurementDevice->purchase_price = $request->purchase_price;
        $measurementDevice->purchase_price_unit = $request->purchase_price_unit;
        $measurementDevice->device_supervisor_id = $request->device_supervisor_id;
        $measurementDevice->calibration_supervisor_id = $request->calibration_supervisor_id;
        $measurementDevice->department_id = $request->department_id;
        $measurementDevice->measurement_device_type_id = $request->measurement_device_type_id;

        $measurementDevice->save();

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.measurementDevice.created', ['measurementDeviceCode' => $measurementDevice->code, 'measurementDeviceType' => MeasurementDeviceType::find($measurementDevice->measurement_device_type_id)->name])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MeasurementDevice  $measurementDevice
     * @return \Illuminate\Http\Response
     */
    public function show(MeasurementDevice $measurementDevice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MeasurementDevice  $measurementDevice
     * @return \Illuminate\Http\Response
     */
    public function edit(MeasurementDevice $measurementDevice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMeasurementDeviceRequest  $request
     * @param  \App\Models\MeasurementDevice  $measurementDevice
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMeasurementDeviceRequest $request, MeasurementDevice $measurementDevice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MeasurementDevice  $measurementDevice
     * @return \Illuminate\Http\Response
     */
    public function destroy(MeasurementDevice $measurementDevice)
    {
        //
    }
}
