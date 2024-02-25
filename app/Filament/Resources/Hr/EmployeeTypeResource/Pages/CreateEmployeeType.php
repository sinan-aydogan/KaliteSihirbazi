<?php

namespace App\Filament\Resources\Hr\EmployeeTypeResource\Pages;

use App\Filament\Resources\Hr\EmployeeTypeResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateEmployeeType extends CreateRecord
{
    use CreateRecord\Concerns\Translatable;

    protected static string $resource = EmployeeTypeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\LocaleSwitcher::make()
        ];
    }
}
