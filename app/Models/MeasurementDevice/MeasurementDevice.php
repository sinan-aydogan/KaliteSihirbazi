<?php

namespace App\Models\MeasurementDevice;

use App\Models\Department;
use App\Models\HumanResources\Employee\Employee;
use App\Models\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTask;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class MeasurementDevice extends Model
{
    use HasFactory, SoftDeletes;

    public const STATUS_ACTIVE = 'active';

    public const STATUS_DECOMMISSIONED = 'decommissioned';

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'code',
        'brand',
        'model',
        'serial_no',
        'properties',
        'purchase_date',
        'purchase_price',
        'purchase_price_unit',
        'device_supervisor_id',
        'calibration_supervisor_id',
        'department_id',
        'measurement_device_type_id',
        'status',
        'decommissioned_at',
        'decommission_reason',
        'decommissioned_by_id',
        'is_reference_standard',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'properties' => 'array',
        'purchase_date' => 'date',
        'purchase_price' => 'decimal:2',
        'decommissioned_at' => 'datetime',
        'is_reference_standard' => 'boolean',
    ];

    // The supervisor of the device
    public function deviceSupervisor(): BelongsTo
    {
        return $this->belongsTo(Employee::class, 'device_supervisor_id');
    }

    // The supervisor of the calibration
    public function calibrationSupervisor(): BelongsTo
    {
        return $this->belongsTo(Employee::class, 'calibration_supervisor_id');
    }

    // The department of the device
    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class, 'department_id');
    }

    // The department of the device
    public function type(): BelongsTo
    {
        return $this->belongsTo(MeasurementDeviceType::class, 'measurement_device_type_id');
    }

    // Calibration Tasks
    public function calibrationTasks(): HasMany
    {
        return $this->hasMany(MeasurementDeviceCalibrationTask::class);
    }

    // Internal calibration tasks (of other devices) where this device was used as the reference standard
    public function referencedInCalibrationTasks(): HasMany
    {
        return $this->hasMany(MeasurementDeviceCalibrationTask::class, 'reference_measurement_device_id');
    }

    // The user who decommissioned the device, if any
    public function decommissionedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'decommissioned_by_id');
    }

    public function isActive(): bool
    {
        return $this->status === self::STATUS_ACTIVE;
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_ACTIVE);
    }

    public function scopeReferenceStandard(Builder $query): Builder
    {
        return $query->where('is_reference_standard', true);
    }

    // The reference standard this device is currently traced to, derived from its latest accomplished internal calibration
    public function currentTraceabilityReference(): ?MeasurementDevice
    {
        $latestInternalTask = $this->calibrationTasks()
            ->where('type', MeasurementDeviceCalibrationTask::TYPE_INTERNAL)
            ->where('status', true)
            ->latest('accomplished_date')
            ->first();

        return $latestInternalTask?->referenceDevice;
    }
}
