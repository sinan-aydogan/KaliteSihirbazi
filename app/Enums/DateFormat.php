<?php

namespace App\Enums;

/**
 * Canonical list of selectable date display formats. The enum value is the
 * dayjs-style token string used directly by the frontend (see the
 * DATE_FORMAT_OPTIONS constant in resources/js/Stores/useFormat.js) — keep
 * both lists in sync when adding a new preset.
 */
enum DateFormat: string
{
    case DMY_DOT = 'DD.MM.YYYY';
    case DMY_SLASH = 'DD/MM/YYYY';
    case DMY_DASH = 'DD-MM-YYYY';
    case MDY_SLASH = 'MM/DD/YYYY';
    case YMD_DASH = 'YYYY-MM-DD';

    /**
     * The same format expressed with PHP's date()/Carbon token syntax.
     */
    public function carbonFormat(): string
    {
        return match ($this) {
            self::DMY_DOT => 'd.m.Y',
            self::DMY_SLASH => 'd/m/Y',
            self::DMY_DASH => 'd-m-Y',
            self::MDY_SLASH => 'm/d/Y',
            self::YMD_DASH => 'Y-m-d',
        };
    }

    public static function values(): array
    {
        return array_map(fn (self $format) => $format->value, self::cases());
    }
}
