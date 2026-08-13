<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\BrowserSessionService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AccountController extends Controller
{
    public function __construct(private readonly BrowserSessionService $browserSessions) {}

    public function show(Request $request): Response
    {
        return Inertia::render('Profile/Show', [
            'confirmsTwoFactorAuthentication' => true,
            'sessions' => $this->browserSessions->forUser(
                $request->user(),
                $request->session()->getId(),
            ),
        ]);
    }

    public function destroy(Request $request): RedirectResponse
    {
        $request->validateWithBag('deleteUser', [
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();
        Auth::guard('web')->logout();
        $user->delete();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }

    public function destroyOtherBrowserSessions(Request $request): RedirectResponse
    {
        $request->validateWithBag('logoutOtherBrowserSessions', [
            'password' => ['required', 'current_password'],
        ]);

        Auth::logoutOtherDevices($request->string('password')->toString());
        $this->browserSessions->deleteOtherSessions(
            $request->user(),
            $request->session()->getId(),
        );

        return back(303);
    }

    public function destroyPhoto(Request $request): RedirectResponse
    {
        /** @var User $user */
        $user = $request->user();
        $user->clearMediaCollection(User::AVATAR_COLLECTION);

        return back(303);
    }
}
