<?php

namespace App\Filament\Resources\Hr\JobDescriptionResource\Pages;

use App\Filament\Resources\Hr\JobDescriptionResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListJobDescriptions extends ListRecords
{
    use ListRecords\Concerns\Translatable;

    protected static string $resource = JobDescriptionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
            Actions\LocaleSwitcher::make()
        ];
    }
}
