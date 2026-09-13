<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StartKaizenSuggestionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'plan_note' => 'nullable|string',
            'do_note' => 'nullable|string',
        ];
    }
}
