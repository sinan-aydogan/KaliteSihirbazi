<?php

namespace App\Enums;

enum ChecklistAnswerResult: string
{
    case Compliant = 'compliant';
    case NonCompliant = 'non_compliant';
    case NotApplicable = 'not_applicable';
    case Observation = 'observation';

    public function label(): string
    {
        return match ($this) {
            self::Compliant => 'Uygun',
            self::NonCompliant => 'Uygunsuz',
            self::NotApplicable => 'Kapsam Dışı',
            self::Observation => 'Gözlem',
        };
    }
}
