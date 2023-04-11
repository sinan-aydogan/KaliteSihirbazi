<?php

namespace App\Http\Controllers\Document;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DocumentSettingController extends Controller
{
    public function index()
    {
        $settings = Setting::where('module', 'document')->get();
        return Inertia::render('Modules/Document/Setting/IndexPage', [
            'settings' => $settings,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDepartmentRequest  $request
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request)
    {
        foreach ($request->all() as $key => $value) {
            $setting = Setting::where('code', $key)->first();
            $setting->value = $value['type'] === 'json' ? json_decode($value['value']) : $value['value'];
            $setting->save();
        }

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.documentSettings.updated')]);

        return redirect()->back();
    }
}
