<?php

namespace App\Enums;

enum FileSizeUnit: string
{
    case KB = 'KB';
    case MB = 'MB';
    case GB = 'GB';

    /**
     * Convert a size expressed in this unit to whole kilobytes,
     * the unit Laravel's "max" file validation rule expects.
     */
    public function toKilobytes(float $size): int
    {
        $multiplier = match ($this) {
            self::KB => 1,
            self::MB => 1024,
            self::GB => 1024 * 1024,
        };

        return (int) round($size * $multiplier);
    }
}
