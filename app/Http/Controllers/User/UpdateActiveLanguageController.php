<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UpdateActiveLanguageController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        Validator::make($request->all(), [
            'activeLanguage' => ['required'],
        ])->after(function ($validator) use ($request) {
            if (! isset($request['activeLanguage'])) {
                $validator->errors()->add('activeLanguage', __('There has been occurred undefined problem, please reload page'));
            }
        })->validateWithBag('activeLanguage');

        $user = auth()->user();
        $user->forceFill([
            'language' => $request->input('activeLanguage'),
        ])->save();

        return redirect()->back();
    }
}
