<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        // Aktif temayı belirle
        $activeTheme = session()->get('theme', 'light');

        if (auth()->check() && auth()->user()->theme) {
            $activeTheme = auth()->user()->theme;
        }

        // Aktif tema için ayarları çek
        $backgroundImage = \App\Models\Setting::where('code', "theme.$activeTheme.login.backgroundImage")->value('value');
        $logoImage = \App\Models\Setting::where('code', "theme.$activeTheme.logoImage")->value('value');

        // Fallback: Eğer aktif tema için görsel yoksa diğer temadan al
        if (empty($backgroundImage)) {
            $otherTheme = $activeTheme === 'dark' ? 'light' : 'dark';
            $backgroundImage = \App\Models\Setting::where('code', "theme.$otherTheme.login.backgroundImage")->value('value');
        }
        if (empty($logoImage)) {
            $otherTheme = $activeTheme === 'dark' ? 'light' : 'dark';
            $logoImage = \App\Models\Setting::where('code', "theme.$otherTheme.logoImage")->value('value');
        }

        $theme = [
            'login' => [
                'backgroundImage' => $backgroundImage,
            ],
            'logoImage' => $logoImage,
            'mode' => $activeTheme,
        ];

        // Uygulama bilgileri
        $appData = [
            'name' => config('app.name', 'Laravel'),
            'version' => config('app.version', '1.0.0'),
        ];

        return array_merge(parent::share($request), [
            // Lang selection without auth
            'lang' => session()->get('lang'),

            // Theme bilgisi
            'theme' => $theme,

            // Uygulama bilgileri
            'app' => $appData,

            // Flash Message
            'flash' => [
                'message' => function()use($request){
                    $message = $request->session()->get('message');
                    if($message){
                        $message['_token'] = \Carbon\Carbon::now()->timestamp;
                    }

                    return $message;
                }
            ],
        ]);
    }
}
