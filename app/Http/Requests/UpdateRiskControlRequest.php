<?php

namespace App\Http\Requests;

use App\Enums\RiskControlEffectiveness;
use App\Enums\RiskControlStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRiskControlRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'description' => 'required|string',
            'responsible_id' => 'nullable|exists:users,id',
            'due_date' => 'nullable|date',
            'status' => ['required', Rule::enum(RiskControlStatus::class)],
            'effectiveness_rating' => ['required', Rule::enum(RiskControlEffectiveness::class)],
        ];
    }
}
