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
            'production_year' => 'nullable|string|max:4',
            'purchase_date' => 'nullable|date',
            'purchase_description' => 'nullable|string',
            'disposing_date' => 'nullable|date',
            'disposing_reason' => 'nullable|string|max:50',
            'disposing_description' => 'nullable|string',
            'notes' => 'nullable|string',
        ];
    }
}
