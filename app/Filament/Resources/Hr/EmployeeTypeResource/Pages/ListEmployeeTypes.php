<?php

namespace App\Filament\Resources\Hr\EmployeeTypeResource\Pages;

use App\Filament\Resources\Hr\EmployeeTypeResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListEmployeeTypes extends ListRecords
{
    use ListRecords\Concerns\Translatable;

    protected static string $resource = EmployeeTypeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
            Actions\LocaleSwitcher::make()
        ];
    }
}
