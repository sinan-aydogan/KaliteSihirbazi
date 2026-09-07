<?php

namespace App\Enums;

enum ProblemSeverity: string
{
    case Low = 'low';
    case Medium = 'medium';
    case High = 'high';
    case Critical = 'critical';
}
