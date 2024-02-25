<?php

namespace App\Filament\Resources\Hr;

use App\Filament\Resources\Hr\DepartmentResource\Pages;
use App\Filament\Resources\Hr\DepartmentResource\RelationManagers;
use App\Models\Hr\Department;
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

class DepartmentResource extends Resource
{
    use Translatable;

    protected static ?string $model = Department::class;

    public static function getModelLabel(): string
    {
        return trans_choice('department.model_label', 1);
    }

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('code')
                    ->label(trans('department.code'))
                    ->required()
                    ->extraInputAttributes([
                        'oninput' => 'this.value = this.value.toUpperCase()',
                        'maxlength' => '5',
                    ])
                    ->unique(ignoreRecord: true)
                    ->placeholder('Kod giriniz')
                    ->hint(__('department.code_hint')),
                TextInput::make('name')
                    ->label(trans('department.name'))
                    ->required()
                    ->placeholder('Ad giriniz'),
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('code')
                    ->label('Kod')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('name')
                    ->label('Ad')
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
            'index' => Pages\ListDepartments::route('/'),
            'create' => Pages\CreateDepartment::route('/create'),
            'edit' => Pages\EditDepartment::route('/{record}/edit'),
        ];
    }
}
