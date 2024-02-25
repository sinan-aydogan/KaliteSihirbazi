<?php

namespace App\Filament\Resources\Hr\JobDescriptionResource\Pages;

use App\Filament\Resources\Hr\JobDescriptionResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditJobDescription extends EditRecord
{
    use EditRecord\Concerns\Translatable;

    protected static string $resource = JobDescriptionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            Actions\LocaleSwitcher::make()
        ];
    }
}
