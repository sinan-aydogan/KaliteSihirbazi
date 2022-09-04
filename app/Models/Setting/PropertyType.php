<?php

namespace App\Models\Setting;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class PropertyType extends Model
{
    use HasFactory;

    // Modules associated with the property type
    public function modules():BelongsToMany
    {
        return $this->belongsToMany(Module::class);
    }
}
