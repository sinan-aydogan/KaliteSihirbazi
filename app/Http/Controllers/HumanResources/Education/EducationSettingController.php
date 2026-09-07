<?php

namespace App\Http\Controllers\HumanResources\Education;

use App\Enums\FileSizeUnit;
use App\Enums\FileType;
use App\Http\Controllers\Controller;
use App\Models\Setting;
use App\Services\Setting\SettingBulkUpdater;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;
use Inertia\Inertia;

class EducationSettingController extends Controller
{
    public function index()
    {
        $settings = Setting::where('module', 'education')->get();
        return Inertia::render('Modules/HumanResources/Education/Setting/IndexPage', [
            'settings' => $settings,
        ]);
    }

    /**
     * Display the education module's general (file upload) settings page.
     */
    public function general()
    {
        $settings = Setting::where('module', 'education')
            ->whereIn('code', ['education_allowed_file_types', 'education_max_file_size'])
            ->get();

        return Inertia::render('Modules/HumanResources/Education/Setting/GeneralSettingPage', [
            'settings' => $settings,
        ]);
    }

    /**
     * Persist the education module's general (file upload) settings.
     */
    public function update(Request $request, SettingBulkUpdater $settingBulkUpdater)
    {
        $request->validate([
            'education_allowed_file_types.value' => ['sometimes', 'array', 'min:1'],
            'education_allowed_file_types.value.*' => [Rule::in(FileType::values())],
            'education_max_file_size.value.size' => ['sometimes', 'numeric', 'min:1'],
            'education_max_file_size.value.unit' => ['sometimes', new Enum(FileSizeUnit::class)],
        ]);

        $settingBulkUpdater->update($request->all());

        session()->flash('message', ['type' => 'success', 'content' => __('messages.educationSettings.updated')]);

        return redirect()->back();
    }
}
