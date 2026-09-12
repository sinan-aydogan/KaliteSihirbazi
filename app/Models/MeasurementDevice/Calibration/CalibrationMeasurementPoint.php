<?php

namespace App\Models\MeasurementDevice\Calibration;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CalibrationMeasurementPoint extends Model
{
    use HasFactory;

    protected $fillable = [
        'measurement_device_calibration_task_id',
        'sequence',
        'unit',
        'nominal_value',
        'measured_value',
        'tolerance',
        'deviation',
        'is_within_tolerance',
    ];

    protected $casts = [
        'nominal_value' => 'decimal:5',
        'measured_value' => 'decimal:5',
        'tolerance' => 'decimal:5',
        'deviation' => 'decimal:5',
        'is_within_tolerance' => 'boolean',
    ];

    public function task(): BelongsTo
    {
        return $this->belongsTo(MeasurementDeviceCalibrationTask::class, 'measurement_device_calibration_task_id');
    }
}
