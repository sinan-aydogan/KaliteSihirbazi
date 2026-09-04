<?php

namespace App\Enums;

/**
 * Canonical list of file extensions selectable from the FileTypeSelectInput
 * Vue component (resources/js/Components/Form/FileTypeSelectInput.vue).
 * Keep both lists in sync when adding a new type.
 */
enum FileType: string
{
    case PDF = 'pdf';
    case DOC = 'doc';
    case DOCX = 'docx';
    case XLS = 'xls';
    case XLSX = 'xlsx';
    case PPT = 'ppt';
    case PPTX = 'pptx';
    case TXT = 'txt';
    case CSV = 'csv';
    case ZIP = 'zip';
    case RAR = 'rar';
    case JPG = 'jpg';
    case JPEG = 'jpeg';
    case PNG = 'png';
    case GIF = 'gif';
    case WEBP = 'webp';
    case SVG = 'svg';
    case MP4 = 'mp4';
    case MP3 = 'mp3';

    /**
     * The real MIME type(s) this extension corresponds to.
     */
    public function mimeTypes(): array
    {
        return match ($this) {
            self::PDF => ['application/pdf'],
            self::DOC => ['application/msword'],
            self::DOCX => ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
            self::XLS => ['application/vnd.ms-excel'],
            self::XLSX => ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
            self::PPT => ['application/vnd.ms-powerpoint'],
            self::PPTX => ['application/vnd.openxmlformats-officedocument.presentationml.presentation'],
            self::TXT => ['text/plain'],
            self::CSV => ['text/csv', 'text/plain'],
            self::ZIP => ['application/zip', 'application/x-zip-compressed'],
            self::RAR => ['application/vnd.rar', 'application/x-rar-compressed'],
            self::JPG, self::JPEG => ['image/jpeg'],
            self::PNG => ['image/png'],
            self::GIF => ['image/gif'],
            self::WEBP => ['image/webp'],
            self::SVG => ['image/svg+xml'],
            self::MP4 => ['video/mp4'],
            self::MP3 => ['audio/mpeg'],
        };
    }

    /**
     * All extension values, e.g. ['pdf', 'doc', ...].
     */
    public static function values(): array
    {
        return array_map(fn (self $type) => $type->value, self::cases());
    }

    /**
     * All MIME types that any known extension maps to.
     */
    public static function allMimeTypes(): array
    {
        return array_values(array_unique(array_merge(...array_map(
            fn (self $type) => $type->mimeTypes(),
            self::cases()
        ))));
    }

    /**
     * MIME types for a given subset of extensions (unknown extensions are ignored).
     */
    public static function mimeTypesFor(array $extensions): array
    {
        $mimeTypes = [];

        foreach ($extensions as $extension) {
            $type = self::tryFrom(strtolower((string) $extension));

            if ($type !== null) {
                $mimeTypes = array_merge($mimeTypes, $type->mimeTypes());
            }
        }

        return array_values(array_unique($mimeTypes));
    }
}
