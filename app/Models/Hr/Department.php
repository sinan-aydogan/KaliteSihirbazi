<?php

namespace App\Models\Hr;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Department extends Model
{
    use HasFactory, HasUuids, HasTranslations;

    protected $fillable = [
        'code',
        'name'
    ];

    public array $translatable = ['name'];
}
