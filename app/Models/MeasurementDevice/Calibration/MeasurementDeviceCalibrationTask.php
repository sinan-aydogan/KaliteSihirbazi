<?php

namespace App\Models\MeasurementDevice\Calibration;

use App\Models\MeasurementDevice\MeasurementDevice;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class MeasurementDeviceCalibrationTask extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'planned_date',
        'accomplished_date',
        'measurement_device_id',
        'calibration_firm_id',
        'price',
        'currency',
        'status',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'planned_date' => 'date',
        'accomplished_date' => 'date',
        'price' => 'float',
        'status' => 'boolean',
    ];

    // The related measurement device of the task
    public function device():BelongsTo
    {
        return $this->belongsTo(MeasurementDevice::class, 'measurement_device_id',);
    }

    // The related calibration firm of the task
    public function firm():BelongsTo
    {
        return $this->belongsTo(CalibrationFirm::class, 'calibration_firm_id',);
    }
}
