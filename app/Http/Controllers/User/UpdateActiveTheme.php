<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class UpdateActiveTheme extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function __invoke(Request $request)
    {
        Validator::make($request->all(), [
            'activeTheme' => ['required'],
        ])->after(function ($validator) use ($request) {
            if (! isset($request['activeTheme'])) {
                $validator->errors()->add('activeTheme', __('There has been occurred undefined problem, please reload page'));
            }
        })->validateWithBag('activeTheme');

        $user = auth()->user();
        $user->forceFill([
            'Theme' => $request->input('activeTheme'),
        ])->save();

        return redirect()->back();
    }
}
