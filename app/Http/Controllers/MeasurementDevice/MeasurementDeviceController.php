<?php

namespace App\Http\Controllers\MeasurementDevice;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMeasurementDeviceRequest;
use App\Http\Requests\UpdateMeasurementDeviceRequest;
use App\Models\Department;
use App\Models\HumanResources\Employee\Employee;
use App\Models\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTask;
use App\Models\MeasurementDevice\MeasurementDevice;
use App\Models\MeasurementDevice\MeasurementDeviceType;
use App\Models\Setting;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class MeasurementDeviceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $reminderDays = (int) (json_decode(
            Setting::where('code', 'calibration_reminder_days')->value('value') ?? '30'
        ) ?: 30);

        return Inertia::render('Modules/MeasurementDevice/Device/IndexPage', [
            'tableData' => $this->tableFilter(MeasurementDevice::with('department:id,name', 'type:id,name', 'calibrationSupervisor:id,name', 'deviceSupervisor:id,name', 'calibrationSupervisor.account:accountable_id,name', 'deviceSupervisor.account:accountable_id,name'), [
                'measurement_type_id' => ['relation' => 'type', 'column' => 'name'],
                'department_id' => ['relation' => 'department', 'column' => 'name'],
                'device_supervisor_id' => ['relation' => 'deviceSupervisor', 'column' => 'name'],
                'calibration_supervisor_id' => ['relation' => 'calibrationSupervisor', 'column' => 'name'],
            ])->latest('id')->paginate(10)->withQueryString(),
            'measurementDeviceTypes' => MeasurementDeviceType::all(['id', 'name']),
            'departments' => Department::all(['id', 'name']),
            'employees' => Employee::all(['id']),
            'overdueCalibrationCount' => MeasurementDeviceCalibrationTask::overdue()
                ->whereHas('device', fn ($query) => $query->active())
                ->count(),
            'upcomingCalibrationCount' => MeasurementDeviceCalibrationTask::upcoming($reminderDays)
                ->whereHas('device', fn ($query) => $query->active())
                ->count(),
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
     * @return RedirectResponse
     */
    public function store(StoreMeasurementDeviceRequest $request)
    {
        $measurementDevice = MeasurementDevice::create($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.measurementDevice.created', ['measurementDeviceCode' => $measurementDevice->code, 'measurementDeviceType' => MeasurementDeviceType::find($measurementDevice->measurement_device_type_id)->name])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @return Response
     */
    public function show(MeasurementDevice $measurementDevice)
    {
        $data = $measurementDevice;
        $data['department'] = $measurementDevice->department;
        $data['type'] = $measurementDevice->type;
        $data['calibrationSupervisor'] = $measurementDevice->calibrationSupervisor;
        $data['deviceSupervisor'] = $measurementDevice->deviceSupervisor;

        return Inertia::render('Modules/MeasurementDevice/Device/ShowPage', [
            'measurementDevice' => $measurementDevice,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(MeasurementDevice $measurementDevice)
    {
        return response()->json($measurementDevice);
    }

    /**
     * Update the specified resource in storage.
     *
     * @return RedirectResponse
     */
    public function update(UpdateMeasurementDeviceRequest $request, MeasurementDevice $measurementDevice)
    {
        $measurementDevice->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.measurementDevice.updated', ['measurementDeviceCode' => $measurementDevice->code, 'measurementDeviceType' => MeasurementDeviceType::find($measurementDevice->measurement_device_type_id)->name])]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(MeasurementDevice $measurementDevice)
    {
        $measurementDevice->delete();

        return redirect()->route('measurement-device.index');
    }

    public function deleted()
    {
        return Inertia::render('Modules/MeasurementDevice/Device/DeletedPage', [
            'tableData' => $this->tableFilter(MeasurementDevice::onlyTrashed())->latest('deleted_at')->paginate(10)->withQueryString(),
        ]);
    }

    public function permanentDestroy(MeasurementDevice $measurementDevice)
    {
        abort_if($measurementDevice->calibrationTasks()->exists(), 409);
        $measurementDevice->forceDelete();

        return redirect()->route('measurement-device.index');
    }

    public function restore(MeasurementDevice $measurementDevice)
    {
        $measurementDevice->restore();

        return redirect()->route('measurement-device.index');
    }
}
