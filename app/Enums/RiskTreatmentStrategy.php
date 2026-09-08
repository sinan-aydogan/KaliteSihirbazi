<?php

namespace App\Enums;

enum RiskTreatmentStrategy: string
{
    case Mitigate = 'mitigate';
    case Accept = 'accept';
    case Transfer = 'transfer';
    case Avoid = 'avoid';

    public function label(): string
    {
        return match ($this) {
            self::Mitigate => 'Azalt',
            self::Accept => 'Kabul Et',
            self::Transfer => 'Transfer Et',
            self::Avoid => 'Kaçın',
        };
    }
}
