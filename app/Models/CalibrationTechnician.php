<?php

namespace App\Models;

use App\Models\MeasurementDevice\MeasurementDeviceType;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class CalibrationTechnician extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = [
        'user_id',
        'is_active',
        'notes',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function measurementDeviceTypes(): BelongsToMany
    {
        return $this->belongsToMany(MeasurementDeviceType::class, 'calibration_technician_measurement_device_type');
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    // Active technicians qualified to calibrate the given device type
    public function scopeQualifiedFor(Builder $query, int $measurementDeviceTypeId): Builder
    {
        return $query->active()->whereHas(
            'measurementDeviceTypes',
            fn (Builder $q) => $q->where('measurement_device_types.id', $measurementDeviceTypeId)
        );
    }
}
