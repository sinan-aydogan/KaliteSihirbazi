<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreInternalAuditorRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'user_id' => 'required|exists:users,id|unique:internal_auditors,user_id',
            'is_active' => 'boolean',
            'notes' => 'nullable|string',
            'department_ids' => 'nullable|array',
            'department_ids.*' => 'exists:departments,id',
        ];
    }
}
