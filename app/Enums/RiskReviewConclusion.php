<?php

namespace App\Enums;

enum RiskReviewConclusion: string
{
    case ControlsReinforced = 'controls_reinforced';
    case RiskAcceptedAsIs = 'risk_accepted_as_is';
    case RiskReclassified = 'risk_reclassified';
    case NoChange = 'no_change';

    public function label(): string
    {
        return match ($this) {
            self::ControlsReinforced => 'Önlemler Güçlendirildi',
            self::RiskAcceptedAsIs => 'Risk Olduğu Gibi Kabul Edildi',
            self::RiskReclassified => 'Risk Yeniden Sınıflandırıldı',
            self::NoChange => 'Değişiklik Yok',
        };
    }
}
