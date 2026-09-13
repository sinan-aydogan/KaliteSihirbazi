<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDeviceRequest;
use App\Http\Requests\UpdateDeviceRequest;
use App\Models\Area;
use App\Models\Department;
use App\Models\Device;
use App\Models\DeviceType;
use App\Models\HumanResources\Employee\Employee;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class DeviceController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Modules/BusinessManagement/Device/IndexPage', [
            'tableData' => $this->tableFilter(Device::with('type:id,name', 'department:id,name', 'responsible:id,name'), [
                'device_type_id' => ['relation' => 'type', 'column' => 'name'],
                'department_id' => ['relation' => 'department', 'column' => 'name'],
                'responsible_id' => ['relation' => 'responsible', 'column' => 'name'],
            ])->latest('id')->paginate(10)->withQueryString(),
            'deviceTypes' => DeviceType::all(['id', 'name']),
            'departments' => Department::all(['id', 'name']),
            'employees' => Employee::all(['id', 'name']),
        ]);
    }

    public function deleted(): Response
    {
        return Inertia::render('Modules/BusinessManagement/Device/DeletedPage', [
            'tableData' => $this->tableFilter(Device::onlyTrashed()->with('type:id,name', 'department:id,name', 'responsible:id,name'))
                ->latest('deleted_at')->paginate(10)->withQueryString(),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreDeviceRequest $request): RedirectResponse
    {
        $device = Device::create($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.device.created', ['device' => $device->name])]);

        return redirect()->back();
    }

    public function show(Device $device): Response
    {
        $device->load(
            'type:id,name',
            'department:id,name',
            'responsible:id,name,has_account',
            'responsible.account:accountable_id,name',
            'areas:id,name',
            'operatorAuthorizations.employee:id,name,has_account',
            'operatorAuthorizations.employee.account:accountable_id,name',
            'operatorAuthorizations.education:id,name',
            'operatorAuthorizations.grantedBy:id,name'
        );

        return Inertia::render('Modules/BusinessManagement/Device/ShowPage', [
            'data' => $device,
            'allAreas' => Area::all(['id', 'name']),
            'employees' => Employee::all(['id', 'name']),
        ]);
    }

    public function edit(Device $device): JsonResponse
    {
        return response()->json($device);
    }

    public function update(UpdateDeviceRequest $request, Device $device): RedirectResponse
    {
        $device->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.device.updated', ['device' => $device->name])]);

        return redirect()->back();
    }

    public function destroy(Device $device): RedirectResponse
    {
        session()->flash('message', ['type' => 'danger', 'content' => __('messages.device.deleted', ['device' => $device->name])]);

        $device->delete();

        return redirect()->route('device.index');
    }

    public function permanentDestroy(Device $device): RedirectResponse
    {
        session()->flash('message', ['type' => 'danger', 'content' => __('messages.device.permanentDeleted', ['device' => $device->name])]);

        $device->forceDelete();

        return redirect()->route('device.index');
    }

    public function restore(Device $device): RedirectResponse
    {
        session()->flash('message', ['type' => 'info', 'content' => __('messages.device.restored', ['device' => $device->name])]);

        $device->restore();

        return redirect()->route('device.index');
    }
}
