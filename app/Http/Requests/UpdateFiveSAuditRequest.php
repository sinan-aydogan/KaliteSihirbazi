<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFiveSAuditRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'continuous_improvement_area_id' => 'required|exists:continuous_improvement_areas,id',
            'audited_by_id' => 'nullable|exists:users,id',
            'audit_date' => 'required|date',
            'sort_score' => 'required|integer|between:0,5',
            'set_in_order_score' => 'required|integer|between:0,5',
            'shine_score' => 'required|integer|between:0,5',
            'standardize_score' => 'required|integer|between:0,5',
            'sustain_score' => 'required|integer|between:0,5',
            'general_note' => 'nullable|string',
        ];
    }
}
