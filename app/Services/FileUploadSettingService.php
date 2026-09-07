<?php

namespace App\Services;

use App\Enums\FileSizeUnit;
use App\Enums\FileType;
use App\Models\Setting;

/**
 * Reads a module's "allowed file types" / "max file size" settings (rows in
 * the generic settings table, e.g. document_allowed_file_types /
 * education_max_file_size) and turns them into validation rules and
 * frontend-ready values. Generic across modules — each caller supplies its
 * own setting codes and fallback defaults.
 */
class FileUploadSettingService
{
    /**
     * Configured allowed file extensions for the given setting code, e.g. ['pdf', 'docx'].
     *
     * @param  string[]  $default
     * @return string[]
     */
    public function allowedFileTypes(string $settingCode, array $default): array
    {
        $decoded = $this->decodeSetting($settingCode);
        $extensions = is_array($decoded) ? array_values(array_filter($decoded, 'is_string')) : [];
        $extensions = array_values(array_intersect($extensions, FileType::values()));

        return $extensions !== [] ? $extensions : $default;
    }

    /**
     * Configured maximum file size for the given setting code, as ['size' => float, 'unit' => 'KB'|'MB'|'GB'].
     *
     * @param  array{size: float, unit: string}  $default
     * @return array{size: float, unit: string}
     */
    public function maxFileSize(string $settingCode, array $default): array
    {
        $decoded = $this->decodeSetting($settingCode);

        if (is_array($decoded) && isset($decoded['size'], $decoded['unit']) && FileSizeUnit::tryFrom($decoded['unit']) !== null) {
            return ['size' => (float) $decoded['size'], 'unit' => $decoded['unit']];
        }

        return $default;
    }

    /**
     * Configured maximum file size converted to kilobytes, the unit
     * Laravel's "max" file validation rule expects.
     *
     * @param  array{size: float, unit: string}  $default
     */
    public function maxFileSizeInKilobytes(string $settingCode, array $default): int
    {
        $maxFileSize = $this->maxFileSize($settingCode, $default);

        return FileSizeUnit::from($maxFileSize['unit'])->toKilobytes($maxFileSize['size']);
    }

    /**
     * Ready-to-use Laravel validation rules for a file upload field.
     *
     * @param  string[]  $defaultTypes
     * @param  array{size: float, unit: string}  $defaultMaxSize
     */
    public function fileValidationRules(
        string $allowedTypesCode,
        array $defaultTypes,
        string $maxSizeCode,
        array $defaultMaxSize,
    ): array {
        $allowedTypes = $this->allowedFileTypes($allowedTypesCode, $defaultTypes);

        return [
            'nullable',
            'file',
            'mimes:'.implode(',', $allowedTypes),
            'mimetypes:'.implode(',', FileType::mimeTypesFor($allowedTypes)),
            'max:'.$this->maxFileSizeInKilobytes($maxSizeCode, $defaultMaxSize),
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
