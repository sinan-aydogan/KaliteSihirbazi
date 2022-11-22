<?php

namespace App\Models\MeasurementDevice\Calibration;

use App\Models\MeasurementDevice\MeasurementDevice;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;


class CalibrationFirm extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'address'
    ];

    // Sub-departments of the department
    public function tasks():HasMany
    {
        return $this->hasMany(CalibrationTask::class);
    }

    // Related Devices
    public function relatedDevices():BelongsToMany
    {
        return $this->belongsToMany(MeasurementDevice::class);
    }
}
