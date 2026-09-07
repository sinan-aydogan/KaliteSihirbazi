<?php

namespace App\Http\Requests\Document;

use App\Services\FileUploadSettingService;
use Illuminate\Foundation\Http\FormRequest;

class StoreDocumentVersionRequest extends FormRequest
{
    private const DEFAULT_ALLOWED_FILE_TYPES = ['pdf', 'doc', 'docx', 'xls', 'xlsx'];

    private const DEFAULT_MAX_FILE_SIZE = ['size' => 10, 'unit' => 'MB'];

    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'revision_reason' => ['nullable', 'string'],
            'revision_detail' => ['nullable', 'string'],
            'revision_request_id' => ['nullable', 'exists:document_revision_requests,id'],
            'file' => app(FileUploadSettingService::class)->fileValidationRules(
                'document_allowed_file_types', self::DEFAULT_ALLOWED_FILE_TYPES,
                'document_max_file_size', self::DEFAULT_MAX_FILE_SIZE,
            ),
        ];
    }
}
