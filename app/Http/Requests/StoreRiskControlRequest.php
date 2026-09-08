<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRiskControlRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'description' => 'required|string',
            'responsible_id' => 'nullable|exists:users,id',
            'due_date' => 'nullable|date',
        ];
    }
}
