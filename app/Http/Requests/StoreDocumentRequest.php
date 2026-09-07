<?php

namespace App\Http\Requests;

use App\Services\FileUploadSettingService;
use Illuminate\Foundation\Http\FormRequest;

class StoreDocumentRequest extends FormRequest
{
    private const DEFAULT_ALLOWED_FILE_TYPES = ['pdf', 'doc', 'docx', 'xls', 'xlsx'];

    private const DEFAULT_MAX_FILE_SIZE = ['size' => 10, 'unit' => 'MB'];

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
            'tag_ids' => ['array'],
            'tag_ids.*' => ['integer', 'exists:tags,id'],
            'file' => app(FileUploadSettingService::class)->fileValidationRules(
                'document_allowed_file_types', self::DEFAULT_ALLOWED_FILE_TYPES,
                'document_max_file_size', self::DEFAULT_MAX_FILE_SIZE,
            ),
        ];
    }
}
