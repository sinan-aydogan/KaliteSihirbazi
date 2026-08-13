<?php

namespace App\Models\MeasurementDevice;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class MeasurementDeviceType extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'code',
        'name',
        'description',
    ];

    public function measurementDevices(): HasMany
    {
        return $this->hasMany(MeasurementDevice::class);
    }
}
