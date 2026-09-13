<?php

namespace App\Models\MeasurementDevice\Action;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MeasurementDeviceActionType extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
        'name',
        'is_protected',
        'sort_order',
    ];

    protected $casts = [
        'is_protected' => 'boolean',
        'sort_order' => 'integer',
    ];

    public function actions(): HasMany
    {
        return $this->hasMany(MeasurementDeviceAction::class, 'measurement_device_action_type_id');
    }
}
