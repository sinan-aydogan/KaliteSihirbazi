<?php

namespace App\Models\MeasurementDevice;

use App\Models\Department;
use App\Models\HumanResources\Employee\Employee;
use App\Models\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTask;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class MeasurementDevice extends Model
{
    use HasFactory;
    use SoftDeletes;

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
        'measurement_device_type_id'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'properties' => 'array',
        'purchase_date' => 'date',
    ];

    // The supervisor of the device
    public function deviceSupervisor():BelongsTo
    {
        return $this->belongsTo(Employee::class, 'device_supervisor_id',);
    }

    // The supervisor of the calibration
    public function calibrationSupervisor():BelongsTo
    {
        return $this->belongsTo(Employee::class, 'calibration_supervisor_id',);
    }

    // The department of the device
    public function department():BelongsTo
    {
        return $this->belongsTo(Department::class, 'department_id',);
    }

    // The department of the device
    public function type():BelongsTo
    {
        return $this->belongsTo(MeasurementDeviceType::class, 'measurement_device_type_id',);
    }

    // Calibration Tasks
    public function calibrationTasks():hasMany
    {
        return $this->hasMany(MeasurementDeviceCalibrationTask::class);
    }
}
