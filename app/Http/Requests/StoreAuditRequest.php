<?php

namespace App\Http\Requests;

use App\Enums\AuditType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreAuditRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'audit_type' => ['required', Rule::enum(AuditType::class)],
            'standard_id' => 'nullable|exists:standards,id',
            'company_accreditation_id' => 'nullable|exists:company_accreditations,id',
            'audit_firm_id' => 'nullable|exists:audit_firms,id',
            'auditor_id' => 'nullable|exists:users,id',
            'department_id' => 'nullable|exists:departments,id',
            'scope' => 'nullable|string',
            'planned_date' => 'required|date',
        ];
    }
}
