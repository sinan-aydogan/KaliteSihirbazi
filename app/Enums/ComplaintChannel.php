<?php

namespace App\Enums;

enum ComplaintChannel: string
{
    case Phone = 'phone';
    case Email = 'email';
    case Portal = 'portal';
    case InPerson = 'in_person';
    case Letter = 'letter';
    case Other = 'other';

    public function label(): string
    {
        return match ($this) {
            self::Phone => 'Telefon',
            self::Email => 'E-posta',
            self::Portal => 'Müşteri Portalı',
            self::InPerson => 'Yüz Yüze',
            self::Letter => 'Yazılı Mektup',
            self::Other => 'Diğer',
        };
    }
}
