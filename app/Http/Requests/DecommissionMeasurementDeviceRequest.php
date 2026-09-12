<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DecommissionMeasurementDeviceRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'reason' => 'required|string|max:1000',
        ];
    }
}
