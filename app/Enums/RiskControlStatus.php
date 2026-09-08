<?php

namespace App\Enums;

enum RiskControlStatus: string
{
    case Planned = 'planned';
    case InProgress = 'in_progress';
    case Completed = 'completed';

    public function label(): string
    {
        return match ($this) {
            self::Planned => 'Planlandı',
            self::InProgress => 'Devam Ediyor',
            self::Completed => 'Tamamlandı',
        };
    }
}
