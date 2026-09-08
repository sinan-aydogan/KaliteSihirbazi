<?php

namespace App\Models;

use App\Enums\ProblemSeverity;
use App\Enums\ProblemSourceType;
use App\Enums\ProblemStatus;
use App\Traits\HasSequentialCode;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Problem extends Model
{
    use HasFactory, HasSequentialCode;

    protected $fillable = [
        'audit_id',
        'audit_checklist_answer_id',
        'risk_id',
        'title',
        'description',
        'source_type',
        'severity',
        'status',
        'detected_by_id',
        'department_id',
        'detected_date',
        'closed_at',
    ];

    protected $casts = [
        'source_type' => ProblemSourceType::class,
        'severity' => ProblemSeverity::class,
        'status' => ProblemStatus::class,
        'detected_date' => 'date',
        'closed_at' => 'datetime',
    ];

    protected static function booted(): void
    {
        static::creating(function (Problem $problem) {
            if (empty($problem->code)) {
                $problem->code = static::nextCode();
            }
        });
    }

    protected static function nextCode(): string
    {
        return static::nextSequentialCode('UYG');
    }

    public function capas(): HasMany
    {
        return $this->hasMany(Capa::class);
    }

    public function audit(): BelongsTo
    {
        return $this->belongsTo(Audit::class);
    }

    public function checklistAnswer(): BelongsTo
    {
        return $this->belongsTo(AuditChecklistAnswer::class, 'audit_checklist_answer_id');
    }

    public function risk(): BelongsTo
    {
        return $this->belongsTo(Risk::class);
    }

    public function detectedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'detected_by_id');
    }

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }
}
