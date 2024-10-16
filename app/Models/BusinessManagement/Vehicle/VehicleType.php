<?php

namespace App\Models\BusinessManagement\Vehicle;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class VehicleType extends Model
{
    protected $fillable = ['name'];

    public function vehicles(): HasMany
    {
        return $this->hasMany(Vehicle::class);
    }
}
