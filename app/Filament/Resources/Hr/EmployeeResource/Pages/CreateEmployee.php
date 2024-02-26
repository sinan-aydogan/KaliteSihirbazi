<?php

namespace App\Filament\Resources\Hr\EmployeeResource\Pages;

use App\Filament\Resources\Hr\EmployeeResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateEmployee extends CreateRecord
{
    protected static string $resource = EmployeeResource::class;
}
