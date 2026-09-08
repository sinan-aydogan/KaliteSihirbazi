<?php

namespace App\Enums;

enum AuditResult: string
{
    case Passed = 'passed';
    case PassedWithFindings = 'passed_with_findings';
    case Failed = 'failed';

    public function label(): string
    {
        return match ($this) {
            self::Passed => 'Başarılı',
            self::PassedWithFindings => 'Bulgularla Başarılı',
            self::Failed => 'Başarısız',
        };
    }
}
