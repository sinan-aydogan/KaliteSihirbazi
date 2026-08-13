<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVehicleRequest extends FormRequest
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
            'code' => 'required|string|max:50|unique:vehicles,code',
            'vehicle_type_id' => 'required|exists:vehicle_types,id',
            'vehicle_status_id' => 'nullable|exists:vehicle_statuses,id',
            'brand' => 'nullable|string|max:50',
            'model' => 'nullable|string|max:50',
            'production_year' => 'nullable|integer|min:1886|max:2100',
            'purchase_date' => [
                function ($attribute, $value, $fail) {
                    if ($this->input('disposing_date') && empty($value)) {
                        $fail(__('validation.custom.vehicle.purchase_date.required_with_disposing_date'));
                    }
                },
                'date_format:Y-m-d',
            ],
            'purchase_description' => 'nullable|string',
            'disposing_date' => [
                'nullable',
                'date_format:Y-m-d',
                function ($attribute, $value, $fail) {
                    $purchaseDate = $this->input('purchase_date');
                    if ($purchaseDate && $value && $value < $purchaseDate) {
                        $fail(__('validation.custom.vehicle.disposing_date.after_or_equal_purchase_date'));
                    }
                },
            ],
            'disposing_reason' => [
                function ($attribute, $value, $fail) {
                    if ($this->input('disposing_date') && empty($value)) {
                        $fail(__('validation.custom.vehicle.disposing_reason.required_with_disposing_date'));
                    }
                },
            ],
            'disposing_description' => 'nullable|string',
            'notes' => 'nullable|string',
        ];
    }
}
