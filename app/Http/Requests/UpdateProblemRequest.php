<?php

namespace App\Http\Requests;

use App\Enums\ProblemSeverity;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateProblemRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'problem_source_type_id' => 'required|exists:problem_source_types,id',
            'severity' => ['required', Rule::enum(ProblemSeverity::class)],
            'department_id' => 'nullable|exists:departments,id',
            'detected_date' => 'required|date|before_or_equal:today',
        ];
    }
}
