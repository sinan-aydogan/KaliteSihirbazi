<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateGembaWalkRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'continuous_improvement_area_id' => 'required|exists:continuous_improvement_areas,id',
            'conducted_by_id' => 'nullable|exists:users,id',
            'walk_date' => 'required|date',
            'participants' => 'nullable|string',
            'observations' => 'required|string',
            'general_note' => 'nullable|string',
        ];
    }
}
