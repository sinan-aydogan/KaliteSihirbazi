<?php

namespace App\Services\Document;

use App\Enums\FileSizeUnit;
use App\Enums\FileType;
use App\Models\Setting;

/**
 * Reads the "document_allowed_file_types" and "document_max_file_size" settings
 * (module=document rows in the generic settings table) and turns them into
 * values usable both by validation rules and the frontend file picker.
 */
class DocumentFileSettingService
{
    private const ALLOWED_FILE_TYPES_CODE = 'document_allowed_file_types';

    private const MAX_FILE_SIZE_CODE = 'document_max_file_size';

    private const DEFAULT_ALLOWED_FILE_TYPES = ['pdf', 'doc', 'docx', 'xls', 'xlsx'];

    private const DEFAULT_MAX_FILE_SIZE = ['size' => 10, 'unit' => 'MB'];

    /**
     * Configured allowed file extensions, e.g. ['pdf', 'docx'].
     */
    public function allowedFileTypes(): array
    {
        $decoded = $this->decodeSetting(self::ALLOWED_FILE_TYPES_CODE);
        $extensions = is_array($decoded) ? array_values(array_filter($decoded, 'is_string')) : [];
        $extensions = array_values(array_intersect($extensions, FileType::values()));

        return $extensions !== [] ? $extensions : self::DEFAULT_ALLOWED_FILE_TYPES;
    }

    /**
     * Configured maximum file size as ['size' => float, 'unit' => 'KB'|'MB'|'GB'].
     */
    public function maxFileSize(): array
    {
        $decoded = $this->decodeSetting(self::MAX_FILE_SIZE_CODE);

        if (is_array($decoded) && isset($decoded['size'], $decoded['unit']) && FileSizeUnit::tryFrom($decoded['unit']) !== null) {
            return ['size' => (float) $decoded['size'], 'unit' => $decoded['unit']];
        }

        return ['size' => (float) self::DEFAULT_MAX_FILE_SIZE['size'], 'unit' => self::DEFAULT_MAX_FILE_SIZE['unit']];
    }

    /**
     * Configured maximum file size converted to kilobytes,
     * the unit Laravel's "max" file validation rule expects.
     */
    public function maxFileSizeInKilobytes(): int
    {
        $maxFileSize = $this->maxFileSize();

        return FileSizeUnit::from($maxFileSize['unit'])->toKilobytes($maxFileSize['size']);
    }

    /**
     * Ready-to-use Laravel validation rules for a "file" upload field.
     */
    public function fileValidationRules(): array
    {
        $allowedTypes = $this->allowedFileTypes();

        return [
            'nullable',
            'file',
            'mimes:' . implode(',', $allowedTypes),
            'mimetypes:' . implode(',', FileType::mimeTypesFor($allowedTypes)),
            'max:' . $this->maxFileSizeInKilobytes(),
        ];
    }

    private function decodeSetting(string $code): mixed
    {
        $value = Setting::where('code', $code)->value('value');

        if (!is_string($value) || $value === '') {
            return null;
        }

        return json_decode($value, true);
    }
}
