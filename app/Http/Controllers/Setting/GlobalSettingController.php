<?php

namespace App\Http\Controllers\Setting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GlobalSettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */

    public function index()
    {
        return Inertia::render('Setting/Index');
    }

    /**
     * Belirli bir ayarın detaylarını döndür
     */
    public function getSetting(Request $request)
    {
        $code = $request->get('code');
        $mediaCollection = $request->get('media_collection'); // ör: theme.logo
        $setting = \App\Models\Setting::where('code', $code)->first();
        $media = null;
        if ($setting && method_exists($setting, 'getMedia') && $mediaCollection) {
            $mediaItems = $setting->getMedia($mediaCollection);
            $media = $mediaItems->map(function($m) {
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
     * Logo yükleme işlemi
     */
    public function logoUpload(Request $request)
    {
        $request->validate([
            'logo' => 'required|file|mimes:jpg,jpeg,png,svg,svg+xml,txt,text,plain',
            'theme' => 'required|in:light,dark',
        ]);

        // Setting modelini bul veya oluştur
        $code = "theme.{$request->theme}.logoImage";
        $setting = \App\Models\Setting::firstOrCreate(
            ['code' => $code],
            ['type' => 'theme', 'module' => 'global']
        );

        // Eski medyayı sil
        if (method_exists($setting, 'clearMediaCollection')) {
            $setting->clearMediaCollection('theme.logo');
        }

        // Yeni dosyayı ekle
        $media = $setting->addMediaFromRequest('logo')
            ->sanitizingFileName(function($fileName) {
                return strtolower(str_replace(['#', '/', '\\', ' '], '-', $fileName));
            })
            ->toMediaCollection('theme.logo');

        // Setting tablosunda media id'sini sakla
        $setting->value = $media->id;
        $setting->save();

        return back()->with('message', ['type' => 'success', 'content' => __('Logo başarıyla yüklendi.')]);
    }
}
