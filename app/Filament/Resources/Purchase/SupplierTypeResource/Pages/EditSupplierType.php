<?php

namespace App\Filament\Resources\Purchase\SupplierTypeResource\Pages;

use App\Filament\Resources\Purchase\SupplierTypeResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSupplierType extends EditRecord
{
    protected static string $resource = SupplierTypeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
