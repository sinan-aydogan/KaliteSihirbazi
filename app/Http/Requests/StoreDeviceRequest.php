<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDeviceRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'code' => 'required|string|max:20|unique:devices,code',
            'name' => 'required|string|max:150',
            'device_type_id' => 'nullable|exists:device_types,id',
            'department_id' => 'nullable|exists:departments,id',
            'responsible_id' => 'nullable|exists:employees,id',
            'brand' => 'nullable|string|max:100',
            'model' => 'nullable|string|max:100',
            'serial_no' => 'nullable|string|max:100',
            'is_active' => 'boolean',
            'notes' => 'nullable|string',
        ];
    }
}
