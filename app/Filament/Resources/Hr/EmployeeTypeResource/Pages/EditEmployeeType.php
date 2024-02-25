<?php

namespace App\Filament\Resources\Hr\EmployeeTypeResource\Pages;

use App\Filament\Resources\Hr\EmployeeTypeResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditEmployeeType extends EditRecord
{
    use EditRecord\Concerns\Translatable;

    protected static string $resource = EmployeeTypeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            Actions\LocaleSwitcher::make()
        ];
    }
}
