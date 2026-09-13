<?php

namespace App\Models;

use App\Models\HumanResources\Education\Education;
use App\Models\HumanResources\Employee\Employee;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class EquipmentOperatorAuthorization extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'education_id',
        'granted_at',
        'expires_at',
        'granted_by_id',
        'note',
    ];

    protected $casts = [
        'granted_at' => 'date',
        'expires_at' => 'date',
    ];

    public function equipment(): MorphTo
    {
        return $this->morphTo();
    }

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }

    public function education(): BelongsTo
    {
        return $this->belongsTo(Education::class);
    }

    public function grantedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'granted_by_id');
    }

    public function isExpired(): bool
    {
        return $this->expires_at !== null && $this->expires_at->isPast();
    }
}
