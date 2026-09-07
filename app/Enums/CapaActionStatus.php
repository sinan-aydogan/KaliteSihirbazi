<?php

namespace App\Enums;

enum CapaActionStatus: string
{
    case Pending = 'pending';
    case InProgress = 'in_progress';
    case Done = 'done';

    public function label(): string
    {
        return match ($this) {
            self::Pending => 'Bekliyor',
            self::InProgress => 'Devam Ediyor',
            self::Done => 'Tamamlandı',
        };
    }
}
