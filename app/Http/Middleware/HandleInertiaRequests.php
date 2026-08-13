<?php

namespace App\Http\Middleware;

use App\Models\Setting;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     */
    public function share(Request $request): array
    {
        // Aktif temayı belirle
        $activeTheme = session()->get('theme', 'light');

        if (auth()->check() && auth()->user()->theme) {
            $activeTheme = auth()->user()->theme;
        }

        // Aktif tema için ayarları çek
        $authBackgroundImageSetting = Setting::where('code', "theme.$activeTheme.auth.backgroundImage")->first();
        $logoSetting = Setting::where('code', "theme.$activeTheme.logoImage")->first();

        $logoImage = null;
        $authBackgroundImage = null;

        if ($logoSetting && $logoSetting->value) {
            // Media id'den url al
            $media = $logoSetting->media()->find($logoSetting->value);
            if ($media) {
                $logoImage = $media->getUrl();
            }
        }

        if ($authBackgroundImageSetting && $authBackgroundImageSetting->value) {
            // Media id'den url al
            $media = $authBackgroundImageSetting->media()->find($authBackgroundImageSetting->value);
            if ($media) {
                $authBackgroundImage = $media->getUrl();
            }
        }

        // Fallback: Eğer aktif tema için görsel yoksa diğer temadan al
        if (empty($authBackgroundImage)) {
            $otherTheme = $activeTheme === 'dark' ? 'light' : 'dark';
            $authBackgroundImageSetting = Setting::where('code', "theme.$otherTheme.auth.backgroundImage")->first();
            if ($authBackgroundImageSetting && $authBackgroundImageSetting->value) {
                // Media id'den url al
                $media = $authBackgroundImageSetting->media()->find($authBackgroundImageSetting->value);
                if ($media) {
                    $authBackgroundImage = $media->getUrl();
                }
            }
        }

        if (empty($logoImage)) {
            $otherTheme = $activeTheme === 'dark' ? 'light' : 'dark';
            $logoSetting = Setting::where('code', "theme.$otherTheme.logoImage")->first();
            if ($logoSetting && $logoSetting->value) {
                // Media id'den url al
                $media = $logoSetting->media()->find($logoSetting->value);
                if ($media) {
                    $logoImage = $media->getUrl();
                }
            }
        }

        $theme = [
            'auth' => [
                'backgroundImage' => $authBackgroundImage,
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
            'auth' => [
                'user' => fn () => $request->user(),
                'roles' => [],
                'permissions' => [],
            ],

            'features' => [
                'canUpdateProfileInformation' => true,
                'canUpdatePassword' => true,
                'canManageTwoFactorAuthentication' => true,
                'hasAccountDeletionFeatures' => true,
                'hasApiFeatures' => true,
                'hasTermsAndPrivacyPolicyFeature' => false,
                'managesProfilePhotos' => true,
            ],

            'accountFlash' => [
                'banner' => fn () => $request->session()->get('banner'),
                'bannerStyle' => fn () => $request->session()->get('bannerStyle', 'success'),
                'token' => fn () => $request->session()->get('token'),
            ],
            // Lang selection without auth
            'lang' => session()->get('lang'),

            // Theme bilgisi
            'theme' => $theme,

            // Uygulama bilgileri
            'app' => $appData,

            // Flash Message
            'flash' => [
                'message' => function () use ($request) {
                    $message = $request->session()->get('message');
                    if ($message) {
                        $message['_token'] = Carbon::now()->timestamp;
                    }

                    return $message;
                },
            ],
        ]);
    }
}
