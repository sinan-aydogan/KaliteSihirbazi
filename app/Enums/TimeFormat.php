<?php

namespace App\Enums;

/**
 * Canonical list of selectable time display formats. The enum value is the
 * dayjs-style token string used directly by the frontend (see the
 * TIME_FORMAT_OPTIONS constant in resources/js/Stores/useFormat.js) — keep
 * both lists in sync when adding a new preset.
 */
enum TimeFormat: string
{
    case H24 = 'HH:mm';
    case H24_SEC = 'HH:mm:ss';
    case H12 = 'hh:mm A';

    /**
     * The same format expressed with PHP's date()/Carbon token syntax.
     */
    public function carbonFormat(): string
    {
        return match ($this) {
            self::H24 => 'H:i',
            self::H24_SEC => 'H:i:s',
            self::H12 => 'h:i A',
        };
    }

    public static function values(): array
    {
        return array_map(fn (self $format) => $format->value, self::cases());
    }
}
