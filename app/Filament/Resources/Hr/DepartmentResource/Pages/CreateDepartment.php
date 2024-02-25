<?php

namespace App\Filament\Resources\Hr\DepartmentResource\Pages;

use App\Filament\Resources\Hr\DepartmentResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateDepartment extends CreateRecord
{
    use CreateRecord\Concerns\Translatable;

    protected static string $resource = DepartmentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\LocaleSwitcher::make()
        ];
    }
}
