<?php

namespace App\Enums;

enum CustomerComplaintStatus: string
{
    case Received = 'received';
    case UnderInvestigation = 'under_investigation';
    case Resolved = 'resolved';
    case Closed = 'closed';
    case Reopened = 'reopened';

    public function label(): string
    {
        return match ($this) {
            self::Received => 'Alındı',
            self::UnderInvestigation => 'İnceleniyor',
            self::Resolved => 'Çözüldü',
            self::Closed => 'Kapatıldı',
            self::Reopened => 'Yeniden Açıldı',
        };
    }

    public function isClosed(): bool
    {
        return $this === self::Closed;
    }
}
