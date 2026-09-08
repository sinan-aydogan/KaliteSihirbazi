<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use App\Services\Setting\SettingBulkUpdater;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerComplaintSettingController extends Controller
{
    public function index()
    {
        $settings = Setting::where('module', 'customer_complaint')->get();

        return Inertia::render('Modules/CustomerComplaint/Setting/IndexPage', [
            'settings' => $settings,
        ]);
    }

    public function update(Request $request, SettingBulkUpdater $settingBulkUpdater)
    {
        $request->validate([
            'complaint_response_sla_days.value' => ['sometimes', 'integer', 'min:1'],
        ]);

        $settingBulkUpdater->update($request->all());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.customerComplaintSettings.updated')]);

        return redirect()->back();
    }
}
