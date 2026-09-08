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
            'answer' => ['nullable', Rule::enum(ChecklistAnswerResult::class)],
            'value' => 'nullable|string',
            'notes' => 'nullable|string',
            'evidence' => 'nullable|array',
            'evidence.*' => 'file|mimes:pdf,jpg,jpeg,png|max:10240',
        ];
    }
}
