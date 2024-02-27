<?php

namespace App\Filament\Resources\Dm\DeviceTypeResource\Pages;

use App\Filament\Resources\Dm\DeviceTypeResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateDeviceType extends CreateRecord
{
    use CreateRecord\Concerns\Translatable;

    protected static string $resource = DeviceTypeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\LocaleSwitcher::make()
        ];
    }
}
