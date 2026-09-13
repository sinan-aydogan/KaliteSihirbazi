<?php

namespace App\Enums;

enum FiveSCriterion: string
{
    case Sort = 'sort';
    case SetInOrder = 'set_in_order';
    case Shine = 'shine';
    case Standardize = 'standardize';
    case Sustain = 'sustain';
    case General = 'general';

    public function label(): string
    {
        return match ($this) {
            self::Sort => 'Sınıflandır (Seiri)',
            self::SetInOrder => 'Düzenle (Seiton)',
            self::Shine => 'Temizlik (Seiso)',
            self::Standardize => 'Standartlaştır (Seiketsu)',
            self::Sustain => 'Disiplin/Sürdürme (Shitsuke)',
            self::General => 'Genel',
        };
    }
}
