<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDistributorRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'code' => 'required|string|max:10|unique:distributors,code',
            'name' => 'required|string|max:150',
            'contact_info' => 'nullable|array',
            'notes' => 'nullable|array',
            'is_active' => 'boolean',
        ];
    }
}
