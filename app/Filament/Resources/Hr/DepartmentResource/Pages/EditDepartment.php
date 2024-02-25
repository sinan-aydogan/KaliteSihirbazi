<?php

namespace App\Filament\Resources\Hr\DepartmentResource\Pages;

use App\Filament\Resources\Hr\DepartmentResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditDepartment extends EditRecord
{
    use EditRecord\Concerns\Translatable;

    protected static string $resource = DepartmentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            Actions\LocaleSwitcher::make()
        ];
    }
}
