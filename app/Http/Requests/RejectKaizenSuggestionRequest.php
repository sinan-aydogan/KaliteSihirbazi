<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RejectKaizenSuggestionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'rejection_reason' => 'required|string',
            'evaluation_note' => 'nullable|string',
        ];
    }
}
