<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateMeasurementDeviceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'code' => ['required', 'string', 'max:10', Rule::unique('measurement_devices')->ignore($this->route('measurement_device'))],
            'brand' => 'nullable|string|max:255',
            'model' => 'nullable|string|max:255',
            'serial_no' => 'nullable|string|max:255',
            'properties' => 'nullable|array',
            'purchase_date' => 'nullable|date',
            'purchase_price' => 'nullable|numeric|min:0',
            'purchase_price_unit' => 'nullable|string|max:20',
            'device_supervisor_id' => 'required|exists:employees,id',
            'calibration_supervisor_id' => 'required|exists:employees,id',
            'department_id' => 'required|exists:departments,id',
            'measurement_device_type_id' => 'required|exists:measurement_device_types,id',
        ];
    }
}
