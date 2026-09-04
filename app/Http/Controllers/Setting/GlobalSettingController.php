<?php

namespace App\Http\Controllers\Setting;

use App\Enums\DateFormat;
use App\Enums\TimeFormat;
use App\Http\Controllers\Controller;
use App\Models\Setting;
use App\Services\Setting\SettingBulkUpdater;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;
use Inertia\Inertia;
use Inertia\Response;

class GlobalSettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Setting/Index');
    }

    /**
     * Display the app-wide date/time format settings page.
     */
    public function time(): Response
    {
        $settings = Setting::where('module', 'global')
            ->whereIn('code', ['global_date_format', 'global_time_format'])
            ->get();

        return Inertia::render('Setting/TimeSetting', [
            'settings' => $settings,
        ]);
    }

    /**
     * Persist the app-wide date/time format settings.
     */
    public function updateTime(Request $request, SettingBulkUpdater $settingBulkUpdater): RedirectResponse
    {
        $request->validate([
            'global_date_format.value' => ['sometimes', new Enum(DateFormat::class)],
            'global_time_format.value' => ['sometimes', new Enum(TimeFormat::class)],
        ]);

        $settingBulkUpdater->update($request->all());

        return back()->with('message', ['type' => 'success', 'content' => __('messages.timeSettings.updated')]);
    }

    /**
     * Belirli bir ayarın detaylarını döndür
     */
    public function getSetting(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'code' => ['required', 'string', 'max:255'],
            'media_collection' => ['nullable', Rule::in(['theme.logo', 'theme.background'])],
        ]);
        $mediaCollection = $validated['media_collection'] ?? null;
        $setting = Setting::where('code', $validated['code'])->first();
        $media = null;
        if ($setting && method_exists($setting, 'getMedia') && $mediaCollection) {
            $mediaItems = $setting->getMedia($mediaCollection);
            $media = $mediaItems->map(function ($m) {
                return [
                    'id' => $m->id,
                    'name' => $m->name,
                    'url' => $m->getUrl(),
                    'size' => $m->size,
                    'mime_type' => $m->mime_type,
                    'created_at' => $m->created_at,
                ];
            });
        }

        return response()->json([
            'setting' => $setting,
            'media' => $media,
        ]);
    }

    /**
     * Media yükleme işlemi
     */
    public function mediaUpload(Request $request, string $type): RedirectResponse
    {
        abort_unless($type === 'image', 404);

        $types = [
            'image' => 'required|file|mimes:jpg,jpeg,png,svg,webp,gif,avif|max:5120',
        ];

        $request->validate([
            'file' => $types[$type],
            'code' => ['required', 'string', 'max:255'],
            'collection' => ['required', Rule::in(['theme.logo', 'theme.background'])],
            'module' => ['nullable', 'string', 'max:255'],
        ]);

        // Setting modelini bul veya oluştur
        $setting = Setting::firstOrCreate(
            ['code' => $request->code],
            ['type' => 'media', 'module' => $request->module ?? 'global']
        );

        // Eski medyayı sil
        if (method_exists($setting, 'clearMediaCollection')) {
            $setting->clearMediaCollection($request->collection);
        }

        // Yeni dosyayı ekle
        $media = $setting->addMediaFromRequest('file')
            ->sanitizingFileName(function ($fileName) {
                return strtolower(str_replace(['#', '/', '\\', ' '], '-', $fileName));
            })
            ->toMediaCollection($request->collection);

        // Setting tablosunda media id'sini sakla
        $setting->value = $media->id;
        $setting->save();

        return back()->with('message', ['type' => 'success', 'content' => __('Logo başarıyla yüklendi.')]);
    }
}
