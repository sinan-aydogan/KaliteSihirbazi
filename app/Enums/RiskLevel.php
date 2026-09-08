<?php

namespace App\Enums;

enum RiskLevel: string
{
    case Low = 'low';
    case Medium = 'medium';
    case High = 'high';
    case Critical = 'critical';

    public function label(): string
    {
        return match ($this) {
            self::Low => 'Düşük',
            self::Medium => 'Orta',
            self::High => 'Yüksek',
            self::Critical => 'Kritik',
        };
    }

    public static function forScore(int $score, int $mediumThreshold, int $highThreshold, int $criticalThreshold): self
    {
        return match (true) {
            $score >= $criticalThreshold => self::Critical,
            $score >= $highThreshold => self::High,
            $score >= $mediumThreshold => self::Medium,
            default => self::Low,
        };
    }
}
