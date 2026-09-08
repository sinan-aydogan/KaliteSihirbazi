<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

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
            'audit_type_id' => 'required|exists:audit_types,id',
            'standard_id' => 'nullable|exists:standards,id',
            'company_accreditation_id' => 'nullable|exists:company_accreditations,id',
            'audit_firm_id' => 'nullable|exists:audit_firms,id',
            'firm_auditor_ids' => 'nullable|array',
            'firm_auditor_ids.*' => 'exists:audit_firm_auditors,id',
            'auditor_id' => 'nullable|exists:users,id',
            'department_id' => 'nullable|exists:departments,id',
            'scope_ids' => 'nullable|array',
            'scope_ids.*' => 'exists:audit_scopes,id',
            'checklist_template_id' => 'nullable|exists:audit_checklist_templates,id',
            'scope' => 'nullable|string',
            'planned_date' => 'required|date',
        ];
    }
}
