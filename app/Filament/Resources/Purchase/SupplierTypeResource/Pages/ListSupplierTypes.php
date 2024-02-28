<?php

namespace App\Filament\Resources\Purchase\SupplierTypeResource\Pages;

use App\Filament\Resources\Purchase\SupplierTypeResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListSupplierTypes extends ListRecords
{
    use ListRecords\Concerns\Translatable;

    protected static string $resource = SupplierTypeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
            Actions\LocaleSwitcher::make()
        ];
    }
}
