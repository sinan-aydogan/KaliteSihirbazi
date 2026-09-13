<?php

namespace App\Http\Controllers\MeasurementDevice\Calibration;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMeasurementDeviceCalibrationTaskRequest;
use App\Http\Requests\UpdateMeasurementDeviceCalibrationTaskRequest;
use App\Models\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTask;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Inertia\Inertia;

class MeasurementDeviceCalibrationTaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $tasks = $this->tableFilter(MeasurementDeviceCalibrationTask::with(['device:id,code', 'firm:id,name', 'referenceDevice:id,code']))
            ->latest('planned_date')
            ->paginate(15)
            ->withQueryString()
            ->through(fn (MeasurementDeviceCalibrationTask $task) => tap($task, function (MeasurementDeviceCalibrationTask $t) {
                $t['certificate_url'] = $t->getFirstMediaUrl('certificate') ?: null;
            }));

        return Inertia::render('Modules/MeasurementDevice/Calibration/IndexPage', [
            'tableData' => $tasks,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
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
    public function store(StoreMeasurementDeviceCalibrationTaskRequest $request)
    {
        $measurementDeviceCalibration = MeasurementDeviceCalibrationTask::create($request->safe()->except(['certificate', 'measurement_points']));

        if ($request->hasFile('certificate')) {
            $measurementDeviceCalibration->addMedia($request->file('certificate'))->toMediaCollection('certificate');
        }

        $this->syncMeasurementPoints($measurementDeviceCalibration, $request->validated('measurement_points', []));

        session()->flash('message', ['type' => 'success', 'content' => __('messages.measurementDeviceCalibration.created', ['measurementDeviceCalibration' => $measurementDeviceCalibration->id])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @return Response
     */
    public function show(MeasurementDeviceCalibrationTask $measurementDeviceCalibration)
    {
        return response()->json($measurementDeviceCalibration->load(['device', 'firm', 'referenceDevice', 'performedBy.user', 'measurementPoints']));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return Response
     */
    public function edit(MeasurementDeviceCalibrationTask $measurementDeviceCalibration)
    {
        return response()->json($measurementDeviceCalibration->load('measurementPoints'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @return Response
     */
    public function update(UpdateMeasurementDeviceCalibrationTaskRequest $request, MeasurementDeviceCalibrationTask $measurementDeviceCalibration)
    {
        $measurementDeviceCalibration->update($request->safe()->except(['certificate', 'measurement_points']));

        if ($request->hasFile('certificate')) {
            $measurementDeviceCalibration->addMedia($request->file('certificate'))->toMediaCollection('certificate');
        }

        $this->syncMeasurementPoints($measurementDeviceCalibration, $request->validated('measurement_points', []));

        session()->flash('message', ['type' => 'success', 'content' => __('messages.measurementDeviceCalibration.updated', ['measurementDeviceCalibration' => $measurementDeviceCalibration->id])]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return RedirectResponse
     */
    public function destroy(MeasurementDeviceCalibrationTask $measurementDeviceCalibration)
    {
        session()->flash('message', ['type' => 'danger', 'content' => __('messages.measurementDeviceCalibration.deleted', ['measurementDeviceCalibration' => $measurementDeviceCalibration->id])]);

        $measurementDeviceCalibration->delete();

        return redirect()->back();
    }

    /**
     * Show the printable calibration report for the given task.
     */
    public function report(MeasurementDeviceCalibrationTask $measurementDeviceCalibration)
    {
        $measurementDeviceCalibration->load([
            'device.type',
            'device.department',
            'firm',
            'referenceDevice.type',
            'performedBy.user:id,name',
            'measurementPoints',
        ]);

        return view('prints.calibration-report', [
            'task' => $measurementDeviceCalibration,
            'certificateUrl' => $measurementDeviceCalibration->getFirstMediaUrl('certificate') ?: null,
        ]);
    }

    private function syncMeasurementPoints(MeasurementDeviceCalibrationTask $task, array $points): void
    {
        $task->measurementPoints()->delete();

        foreach ($points as $sequence => $point) {
            $deviation = (float) $point['measured_value'] - (float) $point['nominal_value'];
            $tolerance = isset($point['tolerance']) && $point['tolerance'] !== '' ? (float) $point['tolerance'] : null;

            $task->measurementPoints()->create([
                'sequence' => $sequence + 1,
                'unit' => $point['unit'] ?? null,
                'nominal_value' => $point['nominal_value'],
                'measured_value' => $point['measured_value'],
                'tolerance' => $tolerance,
                'deviation' => $deviation,
                'is_within_tolerance' => $tolerance !== null ? abs($deviation) <= $tolerance : null,
            ]);
        }
    }
}
