<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use App\Services\Setting\SettingBulkUpdater;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MeasurementDeviceSettingController extends Controller
{
    public function index()
    {
        $settings = Setting::where('module', 'measurement_device')->get();

        return Inertia::render('Modules/MeasurementDevice/Setting/IndexPage', [
            'settings' => $settings,
        ]);
    }

    public function update(Request $request, SettingBulkUpdater $settingBulkUpdater)
    {
        $request->validate([
            'calibration_reminder_days.value' => ['sometimes', 'integer', 'min:1'],
        ]);

        $settingBulkUpdater->update($request->all());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.measurementDeviceSettings.updated')]);

        return redirect()->back();
    }
}
