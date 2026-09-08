<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAuditChecklistRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'audit_checklist_template_id' => 'required|exists:audit_checklist_templates,id',
        ];
    }
}
