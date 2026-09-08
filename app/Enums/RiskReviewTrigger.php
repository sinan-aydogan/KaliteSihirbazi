<?php

namespace App\Enums;

enum RiskReviewTrigger: string
{
    case Scheduled = 'scheduled';
    case Manual = 'manual';
    case RiskRealized = 'risk_realized';

    public function label(): string
    {
        return match ($this) {
            self::Scheduled => 'Planlı',
            self::Manual => 'Manuel',
            self::RiskRealized => 'Risk Gerçekleşti',
        };
    }
}
