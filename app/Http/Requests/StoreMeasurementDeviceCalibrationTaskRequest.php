<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMeasurementDeviceCalibrationTaskRequest extends FormRequest
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
            'planned_date' => 'required|date',
            'measurement_device_id' => 'required|exists:measurement_devices,id',
            'calibration_firm_id' => 'required|exists:calibration_firms,id'
        ];
    }
}
