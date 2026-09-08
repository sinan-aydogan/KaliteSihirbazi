<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use App\Services\Setting\SettingBulkUpdater;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuditSettingController extends Controller
{
    public function index()
    {
        $settings = Setting::where('module', 'audit')->get();

        return Inertia::render('Modules/Audit/Setting/IndexPage', [
            'settings' => $settings,
        ]);
    }

    public function update(Request $request, SettingBulkUpdater $settingBulkUpdater)
    {
        $request->validate([
            'audit_external_requires_internal_first.value' => ['sometimes', 'boolean'],
            'audit_internal_prerequisite_window_days.value' => ['sometimes', 'numeric', 'min:1'],
        ]);

        $settingBulkUpdater->update($request->all());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.auditSettings.updated')]);

        return redirect()->back();
    }
}
