<?php

namespace App\Enums\Document;

enum DocumentRevisionRequestStatus: string
{
    case Pending = 'pending';
    case Accepted = 'accepted';
    case Rejected = 'rejected';
    case Completed = 'completed';

    public function label(): string
    {
        return match ($this) {
            self::Pending => 'Bekliyor',
            self::Accepted => 'Kabul Edildi',
            self::Rejected => 'Reddedildi',
            self::Completed => 'Tamamlandı',
        };
    }
}
