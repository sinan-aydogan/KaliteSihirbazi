<?php

namespace App\Http\Requests\Document;

use Illuminate\Foundation\Http\FormRequest;

class RejectDocumentVersionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'reason' => ['required', 'string', 'max:1000'],
        ];
    }
}
