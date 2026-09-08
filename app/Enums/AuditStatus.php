<?php

namespace App\Enums;

enum AuditStatus: string
{
    case Planned = 'planned';
    case InProgress = 'in_progress';
    case Completed = 'completed';
    case Cancelled = 'cancelled';

    public function label(): string
    {
        return match ($this) {
            self::Planned => 'Planlandı',
            self::InProgress => 'Devam Ediyor',
            self::Completed => 'Tamamlandı',
            self::Cancelled => 'İptal Edildi',
        };
    }

    public function isClosed(): bool
    {
        return in_array($this, [self::Completed, self::Cancelled], true);
    }
}
