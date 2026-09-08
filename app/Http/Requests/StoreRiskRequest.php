<?php

namespace App\Http\Requests;

use App\Enums\RiskTreatmentStrategy;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreRiskRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'department_id' => 'required|exists:departments,id',
            'scope_note' => 'nullable|string|max:255',
            'risk_category_id' => 'nullable|exists:risk_categories,id',
            'risk_hazard_class_id' => 'nullable|exists:risk_hazard_classes,id',
            'risk_owner_id' => 'nullable|exists:users,id',
            'identified_by_id' => 'nullable|exists:users,id',
            'identified_date' => 'required|date',
            'initial_probability' => 'required|integer|between:1,5',
            'initial_impact' => 'required|integer|between:1,5',
            'treatment_strategy' => ['required', Rule::enum(RiskTreatmentStrategy::class)],
            'acceptance_justification' => 'required_if:treatment_strategy,'.RiskTreatmentStrategy::Accept->value.'|nullable|string',
            'next_review_date' => 'nullable|date',
        ];
    }
}
