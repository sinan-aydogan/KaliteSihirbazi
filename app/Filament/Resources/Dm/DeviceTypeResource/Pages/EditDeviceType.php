<?php

namespace App\Filament\Resources\Dm\DeviceTypeResource\Pages;

use App\Filament\Resources\Dm\DeviceTypeResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditDeviceType extends EditRecord
{
    use EditRecord\Concerns\Translatable;

    protected static string $resource = DeviceTypeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            Actions\LocaleSwitcher::make()
        ];
    }
}
