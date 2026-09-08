<?php

namespace App\Enums;

enum CapaStatus: string
{
    case Open = 'open';
    case ActionPlan = 'action_plan';
    case InProgress = 'in_progress';
    case PendingVerification = 'pending_verification';
    case ClosedEffective = 'closed_effective';
    case ClosedIneffective = 'closed_ineffective';

    public function label(): string
    {
        return match ($this) {
            self::Open => 'Açık',
            self::ActionPlan => 'Aksiyon Planlandı',
            self::InProgress => 'Devam Ediyor',
            self::PendingVerification => 'Doğrulama Bekliyor',
            self::ClosedEffective => 'Kapatıldı (Etkili)',
            self::ClosedIneffective => 'Kapatıldı (Etkisiz)',
        };
    }

    public function isClosed(): bool
    {
        return in_array($this, [self::ClosedEffective, self::ClosedIneffective], true);
    }
}
