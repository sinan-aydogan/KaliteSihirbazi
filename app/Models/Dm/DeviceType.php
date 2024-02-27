<?php

namespace App\Models\Dm;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class DeviceType extends Model
{
    use HasUuids, HasTranslations;

    public array $translatable = ['name', 'description'];

    protected $fillable = ['code', 'name', 'description'];
}
