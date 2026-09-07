<?php

namespace App\Enums;

enum AccreditationStatus: string
{
    case Active = 'active';
    case Suspended = 'suspended';
    case Withdrawn = 'withdrawn';
}
