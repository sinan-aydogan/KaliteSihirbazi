<?php

namespace App\Enums;

enum RiskControlEffectiveness: string
{
    case NotEvaluated = 'not_evaluated';
    case Ineffective = 'ineffective';
    case PartiallyEffective = 'partially_effective';
    case Effective = 'effective';

    public function label(): string
    {
        return match ($this) {
            self::NotEvaluated => 'Değerlendirilmedi',
            self::Ineffective => 'Etkisiz',
            self::PartiallyEffective => 'Kısmen Etkili',
            self::Effective => 'Etkili',
        };
    }
}
