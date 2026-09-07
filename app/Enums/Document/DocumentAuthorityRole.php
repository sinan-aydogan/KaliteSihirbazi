<?php

namespace App\Enums\Document;

enum DocumentAuthorityRole: string
{
    case Author = 'author';
    case Reviewer = 'reviewer';
    case Approver = 'approver';
    case Viewer = 'viewer';

    public function label(): string
    {
        return match ($this) {
            self::Author => 'Yazar',
            self::Reviewer => 'İnceleyen',
            self::Approver => 'Onaylayan',
            self::Viewer => 'Görüntüleyici',
        };
    }

    public static function values(): array
    {
        return array_map(fn (self $case) => $case->value, self::cases());
    }
}
