<?php

namespace App\Filament\Resources\Hr\DepartmentResource\Pages;

use App\Filament\Resources\Hr\DepartmentResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListDepartments extends ListRecords
{
    use ListRecords\Concerns\Translatable;

    protected static string $resource = DepartmentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
            Actions\LocaleSwitcher::make()
        ];
    }
}
