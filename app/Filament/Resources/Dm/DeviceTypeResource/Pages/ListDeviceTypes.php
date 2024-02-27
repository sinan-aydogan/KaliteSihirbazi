<?php

namespace App\Filament\Resources\Dm\DeviceTypeResource\Pages;

use App\Filament\Resources\Dm\DeviceTypeResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListDeviceTypes extends ListRecords
{
    use ListRecords\Concerns\Translatable;

    protected static string $resource = DeviceTypeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
            Actions\LocaleSwitcher::make()
        ];
    }
}
