<?php

namespace App\Models\Setting;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertyType extends Model
{
    use HasFactory;

    /**
     * The modules that belong to the property type.
     */
    public function modules()
    {
        return $this->belongsToMany(Module::class);
    }
}
