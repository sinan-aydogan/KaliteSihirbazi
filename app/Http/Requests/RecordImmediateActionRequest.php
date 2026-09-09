<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RecordImmediateActionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'immediate_action' => 'required|string',
        ];
    }
}
