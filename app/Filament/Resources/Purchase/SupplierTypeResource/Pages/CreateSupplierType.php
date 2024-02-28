<?php

namespace App\Filament\Resources\Purchase\SupplierTypeResource\Pages;

use App\Filament\Resources\Purchase\SupplierTypeResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateSupplierType extends CreateRecord
{
    use CreateRecord\Concerns\Translatable;

    protected static string $resource = SupplierTypeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\LocaleSwitcher::make()
        ];
    }
}
