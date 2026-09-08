<?php

namespace App\Models;

use App\Enums\CapaSourceType;
use App\Enums\CapaStatus;
use App\Enums\CapaType;
use App\Traits\HasSequentialCode;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Capa extends Model
{
    use HasFactory, HasSequentialCode;

    protected $fillable = [
        'problem_id',
        'title',
        'type',
        'description',
        'source_type',
        'source_id',
        'root_cause',
        'status',
        'opened_by_id',
        'responsible_id',
        'due_date',
        'closed_at',
    ];

    protected $casts = [
        'type' => CapaType::class,
        'source_type' => CapaSourceType::class,
        'status' => CapaStatus::class,
        'due_date' => 'date',
        'closed_at' => 'datetime',
    ];

    protected static function booted(): void
    {
        static::creating(function (Capa $capa) {
            if (empty($capa->code)) {
                $capa->code = static::nextCode();
            }
        });
    }

    protected static function nextCode(): string
    {
        return static::nextSequentialCode('DOF');
    }

    public function problem(): BelongsTo
    {
        return $this->belongsTo(Problem::class);
    }

    public function actions(): HasMany
    {
        return $this->hasMany(CapaAction::class);
    }

    public function verifications(): HasMany
    {
        return $this->hasMany(CapaVerification::class);
    }

    public function openedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'opened_by_id');
    }

    public function responsible(): BelongsTo
    {
        return $this->belongsTo(User::class, 'responsible_id');
    }

    public function isOverdue(): bool
    {
        return ! $this->status->isClosed() && $this->due_date->isPast();
    }
}
