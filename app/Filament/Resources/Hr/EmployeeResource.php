<?php

namespace App\Filament\Resources\Hr;

use App\Filament\Resources\Hr\EmployeeResource\Pages;
use App\Filament\Resources\Hr\EmployeeResource\RelationManagers;
use App\Models\Hr\Employee;
use App\Models\Hr\EmployeeType;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Concerns\Translatable;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\{Checkbox, TextInput, Select, DatePicker};
use Filament\Tables\Columns\{TextColumn, IconColumn};

class EmployeeResource extends Resource
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
        return trans('navigation.employees');
    }

    /*Model label*/
    public static function getModelLabel(): string
    {
        return trans_choice('employee.model_label', 1);
    }

    protected static ?string $model = Employee::class;

    protected static ?string $navigationIcon = 'tabler-users-group';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('citizenship_number')
                    ->label(trans('employee.citizenship_number'))
                    ->unique(ignoreRecord: true)
                    ->extraInputAttributes([
                        'maxlength' => '25',
                    ])
                    ->required(),
                Select::make('employee_type_id')
                    ->label(trans('employee.type.model_label'))
                    ->options(EmployeeType::all()->pluck('name', 'id')->toArray())
                    ->required(),
                TextInput::make('first_name')
                    ->label(trans('employee.first_name'))
                    ->required(),
                TextInput::make('last_name')
                    ->label(trans('employee.last_name'))
                    ->required(),
                DatePicker::make('date_of_birth')
                    ->label(trans('employee.date_of_birth'))
                    ->native(false)
                    ->required(),
                Select::make('gender')
                    ->label(trans('employee.gender'))
                    ->options([
                        'male' => trans('employee.genders.male'),
                        'female' => trans('employee.genders.female')
                    ])
                    ->required()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('citizenship_number')
                    ->label(trans('employee.citizenship_number')),
                TextColumn::make('full_name')
                    ->label(trans('employee.full_name'))
                    ->searchable(),
                TextColumn::make('employeeType.name')
                    ->label(trans('employee.type.model_label')),
                IconColumn::make('gender')
                    ->label(trans('employee.gender'))
                    ->icon(fn (string $state): string => match ($state) {
                        'female' => 'tabler-venus',
                        'male' => 'tabler-mars',
                    })
                    ->color(fn (string $state): string => match ($state) {
                        'female' => 'pink',
                        'male' => 'blue',
                    })
            ])
            ->filters([
                SelectFilter::make('gender')
                    ->options([
                        'male' => trans('employee.genders.male'),
                        'female' => trans('employee.genders.female')
                    ]),
                SelectFilter::make('employee_type_id')
                    ->label(trans('employee.type.model_label'))
                    ->options(EmployeeType::all()->pluck('name', 'id')->toArray())
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
            'index' => Pages\ListEmployees::route('/'),
            'create' => Pages\CreateEmployee::route('/create'),
            'edit' => Pages\EditEmployee::route('/{record}/edit'),
        ];
    }
}
