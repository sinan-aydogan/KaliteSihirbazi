<?php

namespace App\Models\Hr;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

class JobDescription extends Model
{
    use HasFactory, HasUuids, HasTranslations, SoftDeletes;

    /*TODO: Supervisor and Acting Attendants*/
    public $translatable = [
        'name',
        'purpose_and_scope',
        'powers',
        'responsibilities',
        'qualifications',
        'skills',
        'physical_demands',
        'work_environment',
        'work_equipments',
    ];

    protected $fillable = [
        'code',
        'name',
        'collar_type',
        'purpose_and_scope',
        'powers',
        'responsibilities',
        'qualifications',
        'skills',
        'physical_demands',
        'work_environment',
        'work_equipments',
        'status',
    ];

    protected $casts = [
        'status' => 'boolean'
    ];
}
