<?php

namespace App\Filament\Resources\Dm;

use App\Filament\Resources\Dm\DeviceTypeResource\Pages;
use App\Filament\Resources\Dm\DeviceTypeResource\RelationManagers;
use App\Models\Dm\DeviceType;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Concerns\Translatable;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\{TextInput, Textarea};
use Filament\Tables\Columns\{TextColumn};

class DeviceTypeResource extends Resource
{
    use Translatable;

    protected static ?string $model = DeviceType::class;

    /*Navigation group*/
    public static function getNavigationGroup(): string
    {
        return trans('navigation.device_management');
    }

    /*Navigation label*/
    public static function getNavigationLabel(): string
    {
        return trans('navigation.device_types');
    }

    /*Model label*/
    public static function getModelLabel(): string
    {
        return trans_choice('device_management.type.model_label', 1);
    }

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('code')
                    ->label(trans('device_management.type.code'))
                    ->unique(ignoreRecord: true)
                    ->hint(trans('device_management.type.code_hint'))
                    ->extraInputAttributes([
                        'oninput' => 'this.value = this.value.toUpperCase()',
                        'maxlength' => '5',
                    ])
                    ->required(),
                TextInput::make('name')
                    ->label(trans('device_management.type.name'))
                    ->required(),
                Textarea::make('description')
                    ->label(trans('device_management.type.description'))
                    ->rows(3)
                    ->columnSpan(2)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('code')
                    ->label(trans('device_management.type.code'))
                    ->searchable(),
                TextColumn::make('name')
                    ->label(trans('device_management.type.name'))
                    ->searchable(),
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
            'index' => Pages\ListDeviceTypes::route('/'),
            'create' => Pages\CreateDeviceType::route('/create'),
            'edit' => Pages\EditDeviceType::route('/{record}/edit'),
        ];
    }
}
