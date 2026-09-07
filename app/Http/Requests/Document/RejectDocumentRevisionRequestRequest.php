<?php

namespace App\Http\Requests\Document;

use Illuminate\Foundation\Http\FormRequest;

class RejectDocumentRevisionRequestRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'note' => ['required', 'string', 'max:1000'],
        ];
    }
}
