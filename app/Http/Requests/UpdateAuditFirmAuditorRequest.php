<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAuditFirmAuditorRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'title' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'phone' => 'nullable|string|max:25',
            'competency_documents' => 'nullable|array',
            'competency_documents.*' => 'file|mimes:pdf,jpg,jpeg,png|max:10240',
            'visit_documents' => 'nullable|array',
            'visit_documents.*' => 'file|mimes:pdf,jpg,jpeg,png|max:10240',
        ];
    }
}
