<?php

namespace App\Enums;

enum KaizenSuggestionStatus: string
{
    case Submitted = 'submitted';
    case UnderReview = 'under_review';
    case Approved = 'approved';
    case Rejected = 'rejected';
    case InProgress = 'in_progress';
    case Implemented = 'implemented';
    case Closed = 'closed';

    public function label(): string
    {
        return match ($this) {
            self::Submitted => 'Gönderildi',
            self::UnderReview => 'Değerlendiriliyor',
            self::Approved => 'Onaylandı',
            self::Rejected => 'Reddedildi',
            self::InProgress => 'Uygulanıyor',
            self::Implemented => 'Uygulandı',
            self::Closed => 'Kapatıldı',
        };
    }

    public function isClosed(): bool
    {
        return in_array($this, [self::Rejected, self::Closed], true);
    }
}
