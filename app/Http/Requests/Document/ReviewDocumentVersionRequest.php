<?php

namespace App\Http\Requests\Document;

use Illuminate\Foundation\Http\FormRequest;

class ReviewDocumentVersionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'approved' => ['required', 'boolean'],
            'note' => ['nullable', 'string', 'max:1000'],
        ];
    }
}
