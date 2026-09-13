<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ImplementKaizenSuggestionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'realized_annual_saving' => 'nullable|numeric|min:0',
            'realization_note' => 'nullable|string',
            'check_note' => 'nullable|string',
            'act_note' => 'nullable|string',
        ];
    }
}
