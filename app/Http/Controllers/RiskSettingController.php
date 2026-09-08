<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use App\Services\Setting\SettingBulkUpdater;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RiskSettingController extends Controller
{
    public function index()
    {
        $settings = Setting::where('module', 'risk')->get();

        return Inertia::render('Modules/Risk/Setting/IndexPage', [
            'settings' => $settings,
        ]);
    }

    public function update(Request $request, SettingBulkUpdater $settingBulkUpdater)
    {
        $request->validate([
            'risk_review_required_on_realization.value' => ['sometimes', 'boolean'],
            'risk_score_thresholds.value' => ['sometimes', 'array'],
            'risk_score_thresholds.value.medium' => ['sometimes', 'integer', 'min:1'],
            'risk_score_thresholds.value.high' => ['sometimes', 'integer', 'min:1'],
            'risk_score_thresholds.value.critical' => ['sometimes', 'integer', 'min:1'],
        ]);

        $settingBulkUpdater->update($request->all());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.riskSettings.updated')]);

        return redirect()->back();
    }
}
