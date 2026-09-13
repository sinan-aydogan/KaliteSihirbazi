<?php

namespace App\Http\Controllers\MeasurementDevice\Calibration;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCalibrationFirmRequest;
use App\Http\Requests\UpdateCalibrationFirmRequest;
use App\Models\MeasurementDevice\Calibration\CalibrationFirm;
use Illuminate\Http\Response;
use Inertia\Inertia;

class CalibrationFirmController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Inertia::render('Modules/MeasurementDevice/Setting/CalibrationFirm/IndexPage', [
            'tableData' => $this->tableFilter(CalibrationFirm::withCount('tasks'))
                ->latest('id')
                ->paginate(10)
                ->withQueryString(),
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
     * @return Response
     */
    public function store(StoreCalibrationFirmRequest $request)
    {
        CalibrationFirm::create($request->validated());

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @return Response
     */
    public function show(CalibrationFirm $calibrationFirm)
    {
        return response()->json($calibrationFirm->load('tasks'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return Response
     */
    public function edit(CalibrationFirm $calibrationFirm)
    {
        return response()->json($calibrationFirm);
    }

    /**
     * Update the specified resource in storage.
     *
     * @return Response
     */
    public function update(UpdateCalibrationFirmRequest $request, CalibrationFirm $calibrationFirm)
    {
        $calibrationFirm->update($request->validated());

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return Response
     */
    public function destroy(CalibrationFirm $calibrationFirm)
    {
        $calibrationFirm->delete();

        return redirect()->back();
    }

    public function deleted()
    {
        return Inertia::render('Modules/MeasurementDevice/Setting/CalibrationFirm/DeletedPage', [
            'tableData' => $this->tableFilter(CalibrationFirm::onlyTrashed())
                ->latest('deleted_at')
                ->paginate(10)
                ->withQueryString(),
        ]);
    }

    public function permanentDestroy(CalibrationFirm $calibrationFirm)
    {
        abort_if($calibrationFirm->tasks()->exists(), 409, 'Kalibrasyon kaydı bulunan firma kalıcı olarak silinemez.');

        $calibrationFirm->forceDelete();

        return redirect()->back();
    }

    public function restore(CalibrationFirm $calibrationFirm)
    {
        $calibrationFirm->restore();

        return redirect()->back();
    }
}
