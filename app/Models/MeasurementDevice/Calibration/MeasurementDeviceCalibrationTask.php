<?php

namespace App\Models\MeasurementDevice\Calibration;

use App\Models\CalibrationTechnician;
use App\Models\MeasurementDevice\MeasurementDevice;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class MeasurementDeviceCalibrationTask extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, InteractsWithMedia;

    public const RESULT_PASSED = 'passed';

    public const RESULT_FAILED = 'failed';

    public const TYPE_EXTERNAL = 'external';

    public const TYPE_INTERNAL = 'internal';

    protected $fillable = [
        'planned_date',
        'accomplished_date',
        'measurement_device_id',
        'type',
        'calibration_firm_id',
        'reference_measurement_device_id',
        'performed_by_id',
        'price',
        'currency',
        'status',
        'result',
        'report_number',
        'report_notes',
        'next_calibration_date',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'planned_date' => 'date',
        'accomplished_date' => 'date',
        'next_calibration_date' => 'date',
        'price' => 'decimal:2',
        'status' => 'boolean',
    ];

    // The related measurement device of the task
    public function device(): BelongsTo
    {
        return $this->belongsTo(MeasurementDevice::class, 'measurement_device_id');
    }

    // The related calibration firm of the task (external calibrations only)
    public function firm(): BelongsTo
    {
        return $this->belongsTo(CalibrationFirm::class, 'calibration_firm_id');
    }

    // The reference standard (etalon) used to perform this calibration (internal calibrations only)
    public function referenceDevice(): BelongsTo
    {
        return $this->belongsTo(MeasurementDevice::class, 'reference_measurement_device_id');
    }

    // The technician who performed the calibration
    public function performedBy(): BelongsTo
    {
        return $this->belongsTo(CalibrationTechnician::class, 'performed_by_id');
    }

    // The individual measurement points recorded for this calibration
    public function measurementPoints(): HasMany
    {
        return $this->hasMany(CalibrationMeasurementPoint::class)->orderBy('sequence');
    }

    public function isInternal(): bool
    {
        return $this->type === self::TYPE_INTERNAL;
    }

    // Not yet accomplished and past its planned date
    public function scopeOverdue(Builder $query): Builder
    {
        return $query->where('status', false)->whereDate('planned_date', '<', now()->toDateString());
    }

    // Not yet accomplished, planned within the given number of days from now
    public function scopeUpcoming(Builder $query, int $days): Builder
    {
        return $query->where('status', false)
            ->whereDate('planned_date', '>=', now()->toDateString())
            ->whereDate('planned_date', '<=', now()->addDays($days)->toDateString());
    }
}
