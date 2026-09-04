<?php

namespace App\Http\Requests;

use App\Services\Document\DocumentFileSettingService;
use Illuminate\Foundation\Http\FormRequest;

class StoreDocumentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'code' => ['nullable', 'string', 'max:255', 'unique:documents,code'],
            'name' => ['required', 'string', 'max:255'],
            'department_id' => ['required', 'exists:departments,id'],
            'document_type_id' => ['required', 'exists:document_types,id'],
            'description' => ['nullable', 'string'],
            'file' => app(DocumentFileSettingService::class)->fileValidationRules(),
        ];
    }
}
