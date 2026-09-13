<?php

namespace App\Models\MeasurementDevice\Action;

use App\Models\MeasurementDevice\MeasurementDevice;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class MeasurementDeviceAction extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'measurement_device_id',
        'measurement_device_action_type_id',
        'started_at',
        'resolved_at',
        'description',
        'recorded_by_id',
    ];

    protected $casts = [
        'started_at' => 'date',
        'resolved_at' => 'date',
    ];

    public function device(): BelongsTo
    {
        return $this->belongsTo(MeasurementDevice::class, 'measurement_device_id');
    }

    public function type(): BelongsTo
    {
        return $this->belongsTo(MeasurementDeviceActionType::class, 'measurement_device_action_type_id');
    }

    public function recordedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'recorded_by_id');
    }
}
