<?php

namespace App\Enums;

enum ChecklistQuestionType: string
{
    case Compliance4 = 'compliance_4';
    case YesNo = 'yes_no';
    case Rating1to5 = 'rating_1_5';
    case Numeric = 'numeric';
    case Text = 'text';
    case FileEvidence = 'file_evidence';

    public function label(): string
    {
        return match ($this) {
            self::Compliance4 => 'Uygunluk (Uygun/Uygunsuz/Kapsam Dışı/Gözlem)',
            self::YesNo => 'Evet/Hayır',
            self::Rating1to5 => 'Puanlama (1-5)',
            self::Numeric => 'Sayısal Ölçüm',
            self::Text => 'Serbest Metin',
            self::FileEvidence => 'Kanıt/Fotoğraf Yükleme',
        };
    }
}
