<?php

namespace App\Enums\Document;

enum DocumentVersionStatus: string
{
    case Draft = 'draft';
    case InReview = 'in_review';
    case PendingApproval = 'pending_approval';
    case Approved = 'approved';
    case Rejected = 'rejected';
    case Obsolete = 'obsolete';

    public function label(): string
    {
        return match ($this) {
            self::Draft => 'Taslak',
            self::InReview => 'İncelemede',
            self::PendingApproval => 'Onay Bekliyor',
            self::Approved => 'Onaylı / Yayında',
            self::Rejected => 'Reddedildi',
            self::Obsolete => 'Yürürlükten Kaldırıldı',
        };
    }

    /**
     * Statuses from which the author may (re)submit for review.
     */
    public static function submittableStatuses(): array
    {
        return [self::Draft, self::Rejected];
    }

    public static function values(): array
    {
        return array_map(fn (self $case) => $case->value, self::cases());
    }
}
