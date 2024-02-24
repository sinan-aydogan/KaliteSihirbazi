<?php

namespace App\Filament\SystemManagement\Resources\Bm;

use App\Filament\SystemManagement\Resources\Bm\BusinessBranchResource\Pages;
use App\Filament\SystemManagement\Resources\Bm\BusinessBranchResource\RelationManagers;
use App\Models\Bm\BusinessBranch;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\{TextInput, Textarea};
use Filament\Tables\Columns\{TextColumn};

class BusinessBranchResource extends Resource
{
    protected static ?string $model = BusinessBranch::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $modelLabel = 'İşletme Şubesi';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->label('Firma adı')
                    ->required(),
                Textarea::make('description')
                    ->label('Açıklama')
                    ->required(),
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Firma adı')
                    ->searchable()
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBusinessBranches::route('/'),
            'create' => Pages\CreateBusinessBranch::route('/create'),
            'edit' => Pages\EditBusinessBranch::route('/{record}/edit'),
        ];
    }
}
