<?php

namespace App\Models\Setting;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Module extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'code',
        'name',
        'description',
        'licence_key',
        'status'
    ];

    // Property Types associated with the module
    public function propertyTypes():BelongsToMany
    {
        return $this->belongsToMany(PropertyType::class);
    }
}
