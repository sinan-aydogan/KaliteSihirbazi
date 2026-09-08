<?php

namespace App\Enums;

enum RiskStatus: string
{
    case Identified = 'identified';
    case UnderAnalysis = 'under_analysis';
    case TreatmentPlanned = 'treatment_planned';
    case TreatmentInProgress = 'treatment_in_progress';
    case Monitoring = 'monitoring';
    case ReviewRequired = 'review_required';
    case Closed = 'closed';

    public function label(): string
    {
        return match ($this) {
            self::Identified => 'Tanımlandı',
            self::UnderAnalysis => 'Analiz Ediliyor',
            self::TreatmentPlanned => 'Önlem Planlandı',
            self::TreatmentInProgress => 'Önlem Uygulanıyor',
            self::Monitoring => 'İzleniyor',
            self::ReviewRequired => 'Gözden Geçirme Gerekiyor',
            self::Closed => 'Kapandı',
        };
    }

    public function isClosed(): bool
    {
        return $this === self::Closed;
    }
}
