<?php

namespace App\Http\Requests;

use App\Enums\ProblemSeverity;
use App\Enums\ProblemSourceType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreProblemRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'audit_id' => 'nullable|exists:audits,id',
            'audit_checklist_answer_id' => 'nullable|exists:audit_checklist_answers,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'source_type' => ['required', Rule::enum(ProblemSourceType::class)],
            'severity' => ['required', Rule::enum(ProblemSeverity::class)],
            'department_id' => 'nullable|exists:departments,id',
            'detected_date' => 'required|date|before_or_equal:today',
        ];
    }
}
