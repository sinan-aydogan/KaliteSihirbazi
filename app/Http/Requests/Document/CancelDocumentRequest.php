<?php

namespace App\Http\Requests\Document;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CancelDocumentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'reason' => ['required', 'string', 'max:1000'],
            'superseded_by_document_id' => [
                'nullable',
                Rule::exists('documents', 'id')->whereNot('id', $this->route('document')?->id),
            ],
        ];
    }
}
