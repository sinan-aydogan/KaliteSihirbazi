<?php

namespace App\Models\Setting;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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

    /**
     * The property types that belong to the modul.
     */
    public function propertyTypes()
    {
        return $this->belongsToMany(PropertyType::class);
    }
}
