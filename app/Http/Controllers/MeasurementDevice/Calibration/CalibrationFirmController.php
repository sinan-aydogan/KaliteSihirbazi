<?php

namespace App\Http\Controllers\MeasurementDevice\Calibration;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCalibrationFirmRequest;
use App\Http\Requests\UpdateCalibrationFirmRequest;
use App\Models\MeasurementDevice\Calibration\CalibrationFirm;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class CalibrationFirmController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Inertia::render('Modules/MeasurementDevice/Firm/IndexPage', [
            'tableData' => CalibrationFirm::select(['id','name', 'phone', 'email', 'address'])->latest('id')->paginate(10)
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
     * @param  \App\Http\Requests\StoreCalibrationFirmRequest  $request
     * @return RedirectResponse
     */
    public function store(StoreCalibrationFirmRequest $request)
    {
        $calibrationFirm = new CalibrationFirm;
        $calibrationFirm->name = $request->name;
        $calibrationFirm->email = $request->email;
        $calibrationFirm->phone = $request->phone;
        $calibrationFirm->address = $request->address;

        $calibrationFirm->save();

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.calibrationFirm.created', ['calibrationFirm' => $calibrationFirm->name])]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param CalibrationFirm $calibrationFirm
     * @return \Illuminate\Http\Response
     */
    public function show(CalibrationFirm $calibrationFirm)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param CalibrationFirm $calibrationFirm
     * @return JsonResponse
     */
    public function edit(CalibrationFirm $calibrationFirm)
    {
        return response()->json($calibrationFirm,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateCalibrationFirmRequest $request
     * @param CalibrationFirm $calibrationFirm
     * @return RedirectResponse
     */
    public function update(UpdateCalibrationFirmRequest $request, CalibrationFirm $calibrationFirm)
    {
        $calibrationFirm->name = $request->name;
        $calibrationFirm->email = $request->email;
        $calibrationFirm->phone = $request->phone;
        $calibrationFirm->address = $request->address;

        $calibrationFirm->save();

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.calibrationFirm.updated', ['calibrationFirm' => $calibrationFirm->name])]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param CalibrationFirm $calibrationFirm
     * @return RedirectResponse
     */
    public function destroy(CalibrationFirm $calibrationFirm)
    {
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.calibrationFirm.deleted', ['calibrationFirm' => $calibrationFirm->name])]);

        $calibrationFirm->delete();

        return redirect()->route('calibration-firm.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param CalibrationFirm $calibrationFirm
     * @return RedirectResponse
     */
    public function permanentDestroy(CalibrationFirm $calibrationFirm)
    {
        session()->flash('message', ['type'=> 'danger', 'content'=>__('messages.calibrationFirm.permanentDeleted', ['calibrationFirm' => $calibrationFirm->name])]);

        $calibrationFirm->forceDelete();

        return redirect()->route('calibration-firm.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param CalibrationFirm $calibrationFirm
     * @return RedirectResponse
     */
    public function restore(CalibrationFirm $calibrationFirm)
    {
        session()->flash('message', ['type'=> 'info', 'content'=>__('messages.calibrationFirm.restored', ['calibrationFirm' => $calibrationFirm->name])]);

        $calibrationFirm->restore();

        return redirect()->route('calibration-firm.index');
    }
}
