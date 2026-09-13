<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMeasurementDeviceActionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'measurement_device_action_type_id' => 'required|exists:measurement_device_action_types,id',
            'started_at' => 'required|date',
            'resolved_at' => 'nullable|date|after_or_equal:started_at',
            'description' => 'nullable|string|max:2000',
        ];
    }
}
