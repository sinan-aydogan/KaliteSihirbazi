<?php

namespace App\Filament\Resources\Hr\JobDescriptionResource\Pages;

use App\Filament\Resources\Hr\JobDescriptionResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateJobDescription extends CreateRecord
{
    use CreateRecord\Concerns\Translatable;

    protected static string $resource = JobDescriptionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\LocaleSwitcher::make()
        ];
    }
}
