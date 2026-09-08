<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCapaActionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'description' => 'required|string',
            'responsible_id' => 'required|exists:users,id',
            'due_date' => 'required|date',
        ];
    }
}
