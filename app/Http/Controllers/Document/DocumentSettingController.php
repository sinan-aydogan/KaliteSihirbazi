<?php

namespace App\Http\Controllers\Document;

use App\Enums\FileSizeUnit;
use App\Enums\FileType;
use App\Http\Controllers\Controller;
use App\Models\Setting;
use App\Services\Setting\SettingBulkUpdater;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;
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
    public function update(Request $request, SettingBulkUpdater $settingBulkUpdater)
    {
        $request->validate([
            'document_naming_rule.value' => ['sometimes', Rule::in(['auto', 'manual'])],
            'document_allowed_file_types.value' => ['sometimes', 'array', 'min:1'],
            'document_allowed_file_types.value.*' => [Rule::in(FileType::values())],
            'document_max_file_size.value.size' => ['sometimes', 'numeric', 'min:1'],
            'document_max_file_size.value.unit' => ['sometimes', new Enum(FileSizeUnit::class)],
        ]);

        $settingBulkUpdater->update($request->all());

        session()->flash('message', ['type'=> 'success', 'content'=>__('messages.documentSettings.updated')]);

        return redirect()->back();
    }
}
