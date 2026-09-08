<?php

namespace App\Enums;

enum ProblemStatus: string
{
    case Open = 'open';
    case UnderReview = 'under_review';
    case CapaRaised = 'capa_raised';
    case ClosedWithoutCapa = 'closed_without_capa';
    case Closed = 'closed';

    public function label(): string
    {
        return match ($this) {
            self::Open => 'Açık',
            self::UnderReview => 'İnceleniyor',
            self::CapaRaised => 'DÖF Açıldı',
            self::ClosedWithoutCapa => 'DÖF Gerektirmeden Kapatıldı',
            self::Closed => 'Kapatıldı',
        };
    }

    public function isClosed(): bool
    {
        return in_array($this, [self::ClosedWithoutCapa, self::Closed], true);
    }
}
