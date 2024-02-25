<?php

namespace App\Filament\Resources\Hr;

use App\Filament\Resources\Hr\EmployeeTypeResource\Pages;
use App\Filament\Resources\Hr\EmployeeTypeResource\RelationManagers;
use App\Models\Hr\EmployeeType;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Concerns\Translatable;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\{TextInput};
use Filament\Tables\Columns\{TextColumn};

class EmployeeTypeResource extends Resource
{
    use Translatable;

    /*Navigation group*/
    public static function getNavigationGroup(): string
    {
        return trans('navigation.human_resources');
    }

    /*Navigation label*/
    public static function getNavigationLabel(): string
    {
        return trans('navigation.employee_types');
    }

    /*Model label*/
    public static function getModelLabel(): string
    {
        return trans_choice('employee.type.model_label', 1);
    }

    protected static ?string $model = EmployeeType::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('code')
                    ->label(trans('employee.type.code'))
                    ->unique(ignoreRecord: true)
                    ->hint(trans('employee.type.code_hint'))
                    ->extraInputAttributes([
                        'oninput' => 'this.value = this.value.toUpperCase()',
                        'maxlength' => '5',
                    ])
                    ->required(),
                TextInput::make('name')
                    ->label(trans('employee.type.name'))
                    ->required(),
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('code')
                    ->label(trans('employee.type.code'))
                    ->searchable(),
                TextColumn::make('name')
                    ->label(trans('employee.type.name'))
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
            'index' => Pages\ListEmployeeTypes::route('/'),
            'create' => Pages\CreateEmployeeType::route('/create'),
            'edit' => Pages\EditEmployeeType::route('/{record}/edit'),
        ];
    }
}
