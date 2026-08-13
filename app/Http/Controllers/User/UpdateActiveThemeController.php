<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UpdateActiveThemeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): RedirectResponse
    {
        $validated = $request->validateWithBag('activeTheme', [
            'activeTheme' => ['required', 'string', Rule::in(['light', 'dark', 'auto'])],
        ]);

        /** @var User $user */
        $user = $request->user();
        $user->forceFill([
            'theme' => $validated['activeTheme'],
        ])->save();

        return redirect()->back();
    }
}
