<?php

namespace App\Http\Requests;

use App\Enums\AuditResult;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CompleteAuditRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'result' => ['required', Rule::enum(AuditResult::class)],
            'report_notes' => 'nullable|string',
        ];
    }
}
