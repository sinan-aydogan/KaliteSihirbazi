<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UpdateActiveLanguageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): RedirectResponse
    {
        $validated = $request->validateWithBag('activeLanguage', [
            'activeLanguage' => ['required', 'string', Rule::in(['tr', 'en'])],
        ]);

        /** @var User $user */
        $user = $request->user();
        $user->forceFill([
            'language' => $validated['activeLanguage'],
        ])->save();

        return redirect()->back();
    }
}
