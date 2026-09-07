<?php

namespace App\Http\Requests;

use App\Enums\AccreditationStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreCompanyAccreditationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'certification_body' => 'required|string|max:255',
            'accreditation_body' => 'nullable|string|max:255',
            'certificate_number' => 'required|string|max:255',
            'scope' => 'nullable|string',
            'issue_date' => 'required|date',
            'expiry_date' => 'required|date|after_or_equal:issue_date',
            'status' => ['required', Rule::enum(AccreditationStatus::class)],
            'notes' => 'nullable|string',
            'certificate_file' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:10240',
        ];
    }
}
