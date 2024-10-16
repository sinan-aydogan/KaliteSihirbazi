<?php

namespace App\Models\BusinessManagement\Vehicle;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Vehicle extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'vehicle_type_id',
        'vehicle_status_id',
        'brand',
        'model',
        'production_year',
        'purchase_date',
        'purchase_description',
        'disposing_date',
        'disposing_reason',
        'disposing_description',
        'notes',
    ];

    protected $casts = [
        'purchase_date' => 'datetime',
        'disposing_date' => 'datetime',
    ];

    public function vehicleType(): BelongsTo
    {
        return $this->belongsTo(VehicleType::class);
    }

    public function vehicleStatus(): BelongsTo
    {
        return $this->belongsTo(VehicleStatus::class);
    }
}
