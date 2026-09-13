<?php

namespace App\Enums;

enum ImprovementFindingStatus: string
{
    case Open = 'open';
    case InProgress = 'in_progress';
    case Resolved = 'resolved';

    public function label(): string
    {
        return match ($this) {
            self::Open => 'Açık',
            self::InProgress => 'Devam Ediyor',
            self::Resolved => 'Çözüldü',
        };
    }

    public function isResolved(): bool
    {
        return $this === self::Resolved;
    }
}
