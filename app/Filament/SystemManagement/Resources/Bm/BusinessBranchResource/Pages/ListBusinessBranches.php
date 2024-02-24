<?php

namespace App\Filament\SystemManagement\Resources\Bm\BusinessBranchResource\Pages;

use App\Filament\SystemManagement\Resources\Bm\BusinessBranchResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListBusinessBranches extends ListRecords
{
    protected static string $resource = BusinessBranchResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
