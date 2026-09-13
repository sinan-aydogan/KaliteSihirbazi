<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApproveKaizenSuggestionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'evaluation_note' => 'nullable|string',
            'responsible_id' => 'nullable|exists:users,id',
            'planned_completion_date' => 'nullable|date',
        ];
    }
}
