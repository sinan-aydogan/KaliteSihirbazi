<?php

namespace App\Enums;

enum GembaFindingCategory: string
{
    case Safety = 'safety';
    case Quality = 'quality';
    case Delivery = 'delivery';
    case Cost = 'cost';
    case Morale = 'morale';
    case Other = 'other';

    public function label(): string
    {
        return match ($this) {
            self::Safety => 'İş Güvenliği',
            self::Quality => 'Kalite',
            self::Delivery => 'Teslimat/Akış',
            self::Cost => 'Maliyet',
            self::Morale => 'Çalışan Motivasyonu',
            self::Other => 'Diğer',
        };
    }
}
