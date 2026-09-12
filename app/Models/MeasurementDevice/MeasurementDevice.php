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
}
