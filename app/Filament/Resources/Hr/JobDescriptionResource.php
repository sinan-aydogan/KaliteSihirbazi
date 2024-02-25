<?php

namespace App\Filament\Resources\Hr;

use App\Filament\Resources\Hr\JobDescriptionResource\Pages;
use App\Filament\Resources\Hr\JobDescriptionResource\RelationManagers;
use App\Models\Hr\JobDescription;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Concerns\Translatable;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\{TextInput, RichEditor, Select};
use Filament\Tables\Columns\{TextColumn};

class JobDescriptionResource extends Resource
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
        return trans('navigation.job_descriptions');
    }

    /*Model label*/
    public static function getModelLabel(): string
    {
        return trans('job_description.model_label');
    }

    protected static ?string $model = JobDescription::class;

    protected static ?string $navigationIcon = 'tabler-file';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('code')
                    ->label(trans('job_description.code'))
                    ->unique(ignoreRecord: true)
                    ->hint(trans('job_description.code_hint'))
                    ->extraInputAttributes([
                        'oninput' => 'this.value = this.value.toUpperCase()',
                        'maxlength' => '25',
                    ])
                    ->columnSpan([
                        'sm' => 2,
                        'xl' => 1,
                    ])
                    ->required(),
                TextInput::make('name')
                    ->label(trans('job_description.name'))
                    ->columnSpan([
                        'sm' => 2,
                        'xl' => 1,
                    ])
                    ->required(),
                Select::make('collar_type')
                    ->label(trans('job_description.collar_types.label'))
                    ->options([
                        'white_collar' => trans('job_description.collar_types.white_collar'),
                        'blue_collar' => trans('job_description.collar_types.blue_collar'),
                    ])
                    ->columnSpan([
                        'sm' => 2,
                        'xl' => 2,
                    ])
                    ->required(),
                RichEditor::make('purpose_and_scope')
                    ->label(trans('job_description.purpose_and_scope'))
                    ->toolbarButtons([
                        'blockquote',
                        'bold',
                        'bulletList',
                        'h2',
                        'h3',
                        'italic',
                        'link',
                        'orderedList',
                        'redo',
                        'underline',
                        'undo',
                    ])
                    ->columnSpan([
                        'sm' => 2,
                        'xl' => 1,
                    ]),
                RichEditor::make('powers')
                    ->label(trans('job_description.powers'))
                    ->toolbarButtons([
                        'blockquote',
                        'bold',
                        'bulletList',
                        'h2',
                        'h3',
                        'italic',
                        'link',
                        'orderedList',
                        'redo',
                        'underline',
                        'undo',
                    ])
                    ->columnSpan([
                        'sm' => 2,
                        'xl' => 1,
                    ]),
                RichEditor::make('responsibilities')
                    ->label(trans('job_description.responsibilities'))
                    ->toolbarButtons([
                        'blockquote',
                        'bold',
                        'bulletList',
                        'h2',
                        'h3',
                        'italic',
                        'link',
                        'orderedList',
                        'redo',
                        'underline',
                        'undo',
                    ])
                    ->columnSpan([
                        'sm' => 2,
                        'xl' => 1,
                    ]),
                RichEditor::make('qualifications')
                    ->label(trans('job_description.qualifications'))
                    ->toolbarButtons([
                        'blockquote',
                        'bold',
                        'bulletList',
                        'h2',
                        'h3',
                        'italic',
                        'link',
                        'orderedList',
                        'redo',
                        'underline',
                        'undo',
                    ])
                    ->columnSpan([
                        'sm' => 2,
                        'xl' => 1,
                    ]),
                RichEditor::make('skills')
                    ->label(trans('job_description.skills'))
                    ->toolbarButtons([
                        'blockquote',
                        'bold',
                        'bulletList',
                        'h2',
                        'h3',
                        'italic',
                        'link',
                        'orderedList',
                        'redo',
                        'underline',
                        'undo',
                    ])
                    ->columnSpan([
                        'sm' => 2,
                        'xl' => 1,
                    ]),
                RichEditor::make('physical_demands')
                    ->label(trans('job_description.physical_demands'))
                    ->toolbarButtons([
                        'blockquote',
                        'bold',
                        'bulletList',
                        'h2',
                        'h3',
                        'italic',
                        'link',
                        'orderedList',
                        'redo',
                        'underline',
                        'undo',
                    ])
                    ->columnSpan([
                        'sm' => 2,
                        'xl' => 1,
                    ]),
                RichEditor::make('work_environment')
                    ->label(trans('job_description.work_environment'))
                    ->toolbarButtons([
                        'blockquote',
                        'bold',
                        'bulletList',
                        'h2',
                        'h3',
                        'italic',
                        'link',
                        'orderedList',
                        'redo',
                        'underline',
                        'undo',
                    ])
                    ->columnSpan([
                        'sm' => 2,
                        'xl' => 1,
                    ]),
                RichEditor::make('work_equipments')
                    ->label(trans('job_description.work_equipments'))
                    ->toolbarButtons([
                        'blockquote',
                        'bold',
                        'bulletList',
                        'h2',
                        'h3',
                        'italic',
                        'link',
                        'orderedList',
                        'redo',
                        'underline',
                        'undo',
                    ])
                    ->columnSpan([
                        'sm' => 2,
                        'xl' => 1,
                    ]),
            ])->columns([
                'sm' => 1,
                'xl' => 2
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('code')
                    ->label(trans('job_description.code'))
                    ->searchable(),
                TextColumn::make('name')
                    ->label(trans('job_description.name'))
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
            'index' => Pages\ListJobDescriptions::route('/'),
            'create' => Pages\CreateJobDescription::route('/create'),
            'edit' => Pages\EditJobDescription::route('/{record}/edit'),
        ];
    }
}
