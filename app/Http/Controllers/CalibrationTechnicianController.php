<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCalibrationTechnicianRequest;
use App\Http\Requests\UpdateCalibrationTechnicianRequest;
use App\Models\CalibrationTechnician;
use App\Models\MeasurementDevice\MeasurementDeviceType;
use App\Models\User;
use Inertia\Inertia;

class CalibrationTechnicianController extends Controller
{
    public function index()
    {
        $technicians = $this->tableFilter(CalibrationTechnician::with(['user:id,name', 'measurementDeviceTypes:id,name']))
            ->latest('id')
            ->paginate(10)
            ->withQueryString()
            ->through(fn (CalibrationTechnician $technician) => tap($technician, function (CalibrationTechnician $t) {
                $t['competency_documents'] = $t->getMedia('competency_documents')->map(fn ($m) => ['id' => $m->id, 'name' => $m->file_name, 'url' => $m->getUrl()]);
            }));

        return Inertia::render('Modules/MeasurementDevice/Setting/Technician/IndexPage', [
            'tableData' => $technicians,
            'users' => User::all(['id', 'name']),
            'measurementDeviceTypes' => MeasurementDeviceType::all(['id', 'name']),
        ]);
    }

    public function create()
    {
        //
    }

    public function store(StoreCalibrationTechnicianRequest $request)
    {
        $technician = CalibrationTechnician::create($request->safe()->except(['measurement_device_type_ids', 'competency_documents']));
        $technician->measurementDeviceTypes()->sync($request->validated('measurement_device_type_ids', []));

        $this->syncDocuments($technician, $request);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.calibrationTechnician.created')]);

        return redirect()->back();
    }

    public function show(CalibrationTechnician $calibrationTechnician)
    {
        //
    }

    public function edit(CalibrationTechnician $calibrationTechnician)
    {
        return response()->json($calibrationTechnician->load('measurementDeviceTypes:id,name'));
    }

    public function update(UpdateCalibrationTechnicianRequest $request, CalibrationTechnician $calibrationTechnician)
    {
        $calibrationTechnician->update($request->safe()->except(['measurement_device_type_ids', 'competency_documents']));
        $calibrationTechnician->measurementDeviceTypes()->sync($request->validated('measurement_device_type_ids', []));

        $this->syncDocuments($calibrationTechnician, $request);

        session()->flash('message', ['type' => 'success', 'content' => __('messages.calibrationTechnician.updated')]);

        return redirect()->back();
    }

    public function destroy(CalibrationTechnician $calibrationTechnician)
    {
        $calibrationTechnician->delete();

        session()->flash('message', ['type' => 'success', 'content' => __('messages.calibrationTechnician.deleted')]);

        return redirect()->back();
    }

    public function deleteMedia(CalibrationTechnician $calibrationTechnician, int $mediaId)
    {
        $media = $calibrationTechnician->media()->find($mediaId);

        if ($media) {
            $media->delete();
            session()->flash('message', ['type' => 'success', 'content' => __('messages.calibrationTechnician.mediaDeleted')]);
        }

        return redirect()->back();
    }

    private function syncDocuments(CalibrationTechnician $technician, StoreCalibrationTechnicianRequest|UpdateCalibrationTechnicianRequest $request): void
    {
        foreach ($request->file('competency_documents', []) as $file) {
            $technician->addMedia($file)->toMediaCollection('competency_documents');
        }
    }
}
