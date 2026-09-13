<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDeviceTypeRequest;
use App\Http\Requests\UpdateDeviceTypeRequest;
use App\Models\DeviceType;
use Inertia\Inertia;

class DeviceTypeController extends Controller
{
    public function index()
    {
        return Inertia::render('Modules/BusinessManagement/Device/Setting/TypePage', [
            'tableData' => $this->tableFilter(DeviceType::query())->select(['id', 'name'])->paginate(10)->withQueryString(),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreDeviceTypeRequest $request)
    {
        $deviceType = DeviceType::create($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.deviceType.created', ['deviceType' => $deviceType->name])]);

        return redirect()->back();
    }

    public function show(DeviceType $deviceType)
    {
        //
    }

    public function edit(DeviceType $deviceType)
    {
        return response()->json($deviceType);
    }

    public function update(UpdateDeviceTypeRequest $request, DeviceType $deviceType)
    {
        $deviceType->update($request->validated());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.deviceType.updated', ['deviceType' => $deviceType->name])]);

        return redirect()->back();
    }

    public function destroy(DeviceType $deviceType)
    {
        session()->flash('message', ['type' => 'danger', 'content' => __('messages.deviceType.deleted', ['deviceType' => $deviceType->name])]);

        $deviceType->delete();

        return redirect()->route('device-type.index');
    }
}
