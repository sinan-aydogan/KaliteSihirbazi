<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAuditChecklistTemplateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'audit_scope_id' => 'nullable|exists:audit_scopes,id',
            'description' => 'nullable|string',
            'is_active' => 'boolean',
        ];
    }
}
