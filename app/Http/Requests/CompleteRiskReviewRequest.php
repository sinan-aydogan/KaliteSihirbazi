<?php

namespace App\Http\Requests;

use App\Enums\RiskReviewConclusion;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CompleteRiskReviewRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'probability' => 'required|integer|between:1,5',
            'impact' => 'required|integer|between:1,5',
            'controls_adequate' => 'required|boolean',
            'conclusion' => ['required', Rule::enum(RiskReviewConclusion::class)],
            'notes' => 'nullable|string',
        ];
    }
}
