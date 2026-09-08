<?php

namespace App\Models;

use App\Enums\RiskControlEffectiveness;
use App\Enums\RiskControlStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RiskControl extends Model
{
    use HasFactory;

    protected $fillable = [
        'risk_id',
        'description',
        'responsible_id',
        'due_date',
        'status',
        'completed_at',
        'effectiveness_rating',
    ];

    protected $casts = [
        'due_date' => 'date',
        'completed_at' => 'datetime',
        'status' => RiskControlStatus::class,
        'effectiveness_rating' => RiskControlEffectiveness::class,
    ];

    public function risk(): BelongsTo
    {
        return $this->belongsTo(Risk::class);
    }

    public function responsible(): BelongsTo
    {
        return $this->belongsTo(User::class, 'responsible_id');
    }
}
