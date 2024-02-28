<?php

namespace App\Models\Purchase;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

class SupplierType extends Model
{
    use HasUuids, HasTranslations, SoftDeletes;

    protected $fillable = [
        'code',
        'name',
        'description',
        'is_active',
    ];

    public array $translatable = [
        'name',
        'description',
    ];
}
