<?php

namespace App\Http\Requests;

use App\Enums\ChecklistAnswerResult;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AnswerAuditChecklistAnswerRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'answer' => ['required', Rule::enum(ChecklistAnswerResult::class)],
            'notes' => 'nullable|string',
        ];
    }
}
