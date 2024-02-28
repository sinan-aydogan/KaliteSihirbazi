<?php

namespace App\Filament\Resources\Purchase;

use App\Filament\Resources\Purchase\SupplierTypeResource\Pages;
use App\Filament\Resources\Purchase\SupplierTypeResource\RelationManagers;
use App\Models\Purchase\SupplierType;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Concerns\Translatable;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\{Textarea, TextInput};
use Filament\Tables\Columns\{TextColumn};

class SupplierTypeResource extends Resource
{
    use Translatable;

    /*Navigation group*/
    public static function getNavigationGroup(): string
    {
        return trans('navigation.purchase');
    }

    /*Navigation label*/
    public static function getNavigationLabel(): string
    {
        return trans('navigation.supplier_types');
    }

    /*Model label*/
    public static function getModelLabel(): string
    {
        return trans_choice('supplier.type.model_label', 1);
    }

    protected static ?string $model = SupplierType::class;

    protected static ?string $navigationIcon = 'tabler-building-store';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('code')
                    ->label(trans('supplier.type.code'))
                    ->unique(ignoreRecord: true)
                    ->hint(trans('supplier.type.code_hint'))
                    ->extraInputAttributes([
                        'oninput' => 'this.value = this.value.toUpperCase()',
                        'maxlength' => '10',
                    ])
                    ->required(),
                TextInput::make('name')
                    ->label(trans('supplier.type.name'))
                    ->required(),
                Textarea::make('description')
                    ->label(trans('supplier.type.description'))
                    ->rows(3)
                    ->columnSpan(2)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('code')
                    ->label(trans('supplier.type.code'))
                    ->searchable(),
                TextColumn::make('name')
                    ->label(trans('supplier.type.name'))
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
            'index' => Pages\ListSupplierTypes::route('/'),
            'create' => Pages\CreateSupplierType::route('/create'),
            'edit' => Pages\EditSupplierType::route('/{record}/edit'),
        ];
    }
}
