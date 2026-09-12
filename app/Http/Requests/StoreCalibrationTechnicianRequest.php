<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCalibrationTechnicianRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'user_id' => 'required|exists:users,id|unique:calibration_technicians,user_id',
            'is_active' => 'boolean',
            'notes' => 'nullable|string',
            'measurement_device_type_ids' => 'nullable|array',
            'measurement_device_type_ids.*' => 'exists:measurement_device_types,id',
            'competency_documents' => 'nullable|array',
            'competency_documents.*' => 'file|mimes:pdf,jpg,jpeg,png|max:10240',
        ];
    }
}
