<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAreaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'department_id' => 'nullable|exists:departments,id',
            'responsible_id' => 'nullable|exists:users,id',
            'is_active' => 'boolean',
        ];
    }
}
