<?php

namespace App\Models;

use App\Enums\RiskLevel;
use App\Enums\RiskStatus;
use App\Enums\RiskTreatmentStrategy;
use App\Traits\HasSequentialCode;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Risk extends Model
{
    use HasFactory, HasSequentialCode;

    protected $fillable = [
        'title',
        'description',
        'department_id',
        'scope_note',
        'risk_category_id',
        'risk_hazard_class_id',
        'risk_owner_id',
        'identified_by_id',
        'identified_date',
        'initial_probability',
        'initial_impact',
        'initial_score',
        'initial_level',
        'residual_probability',
        'residual_impact',
        'residual_score',
        'residual_level',
        'treatment_strategy',
        'acceptance_justification',
        'status',
        'next_review_date',
        'closed_at',
    ];

    protected $casts = [
        'identified_date' => 'date',
        'next_review_date' => 'date',
        'closed_at' => 'datetime',
        'initial_level' => RiskLevel::class,
        'residual_level' => RiskLevel::class,
        'treatment_strategy' => RiskTreatmentStrategy::class,
        'status' => RiskStatus::class,
    ];

    protected static function booted(): void
    {
        static::creating(function (Risk $risk) {
            if (empty($risk->code)) {
                $risk->code = static::nextCode();
            }
        });
    }

    protected static function nextCode(): string
    {
        return static::nextSequentialCode('RSK');
    }

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    public function riskCategory(): BelongsTo
    {
        return $this->belongsTo(RiskCategory::class);
    }

    public function riskHazardClass(): BelongsTo
    {
        return $this->belongsTo(RiskHazardClass::class);
    }

    public function riskOwner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'risk_owner_id');
    }

    public function identifiedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'identified_by_id');
    }

    public function controls(): HasMany
    {
        return $this->hasMany(RiskControl::class);
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(RiskReview::class)->latest('review_date');
    }

    public function realizedProblems(): HasMany
    {
        return $this->hasMany(Problem::class);
    }
}
