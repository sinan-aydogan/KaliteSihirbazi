<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAuditChecklistQuestionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'question' => 'required|string',
            'standard_reference' => 'nullable|string|max:255',
            'sort_order' => 'nullable|integer|min:0',
        ];
    }
}
