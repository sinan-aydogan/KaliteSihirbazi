<?php

namespace App\Http\Requests;

use App\Enums\ChecklistQuestionType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
            'question_type' => ['required', Rule::enum(ChecklistQuestionType::class)],
            'standard_reference' => 'nullable|string|max:255',
            'sort_order' => 'nullable|integer|min:0',
        ];
    }
}
