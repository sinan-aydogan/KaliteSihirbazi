<?php

namespace App\Enums;

enum AuditType: string
{
    case Internal = 'internal';
    case Certification = 'certification';
    case Supplier = 'supplier';
    case Customer = 'customer';

    public function label(): string
    {
        return match ($this) {
            self::Internal => 'İç Denetim',
            self::Certification => 'Belgelendirme Denetimi',
            self::Supplier => 'Tedarikçi Denetimi',
            self::Customer => 'Müşteri Denetimi',
        };
    }
}
