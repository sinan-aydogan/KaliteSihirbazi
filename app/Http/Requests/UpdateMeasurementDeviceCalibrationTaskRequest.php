<?php

namespace App\Http\Requests;

use App\Models\CalibrationTechnician;
use App\Models\MeasurementDevice\MeasurementDevice;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateMeasurementDeviceCalibrationTaskRequest extends FormRequest
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

    protected function prepareForValidation(): void
    {
        $this->merge(['type' => $this->type ?? 'external']);
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
            'accomplished_date' => 'nullable|date|after_or_equal:planned_date',
            'measurement_device_id' => 'required|exists:measurement_devices,id',
            'type' => ['required', Rule::in(['external', 'internal'])],
            'calibration_firm_id' => 'nullable|exists:calibration_firms,id',
            'reference_measurement_device_id' => 'nullable|exists:measurement_devices,id|different:measurement_device_id',
            'performed_by_id' => 'nullable|exists:calibration_technicians,id',
            'price' => 'nullable|numeric|min:0',
            'currency' => 'nullable|required_with:price|string|size:3',
            'status' => 'required|boolean',
            'result' => 'nullable|in:passed,failed',
            'report_number' => 'nullable|string|max:100',
            'report_notes' => 'nullable|string|max:2000',
            'next_calibration_date' => 'nullable|date|after:planned_date',
            'certificate' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:10240',
            'measurement_points' => 'nullable|array',
            'measurement_points.*.unit' => 'nullable|string|max:20',
            'measurement_points.*.nominal_value' => 'required_with:measurement_points|numeric',
            'measurement_points.*.measured_value' => 'required_with:measurement_points|numeric',
            'measurement_points.*.tolerance' => 'nullable|numeric|min:0',
        ];
    }

    public function withValidator($validator): void
    {
        $validator->after(function ($validator) {
            if ($this->type === 'external') {
                if (! $this->calibration_firm_id) {
                    $validator->errors()->add('calibration_firm_id', 'Dış kalibrasyonda kalibrasyon firması seçimi zorunludur.');
                }

                return;
            }

            if ($this->type !== 'internal') {
                return;
            }

            if (! $this->reference_measurement_device_id) {
                $validator->errors()->add('reference_measurement_device_id', 'İç kalibrasyonda referans cihaz (etalon) seçimi zorunludur.');
            } elseif (! MeasurementDevice::whereKey($this->reference_measurement_device_id)->where('is_reference_standard', true)->exists()) {
                $validator->errors()->add('reference_measurement_device_id', 'Seçilen cihaz bir referans standart (etalon) olarak işaretlenmemiş.');
            }

            if (! $this->performed_by_id) {
                $validator->errors()->add('performed_by_id', 'İç kalibrasyonda kalibrasyonu yapan personel seçimi zorunludur.');

                return;
            }

            $device = MeasurementDevice::find($this->measurement_device_id);

            if ($device && ! CalibrationTechnician::qualifiedFor($device->measurement_device_type_id)->whereKey($this->performed_by_id)->exists()) {
                $validator->errors()->add('performed_by_id', 'Seçilen personel bu cihaz tipi için yetkili/aktif bir kalibrasyon teknisyeni değil.');
            }
        });
    }
}
