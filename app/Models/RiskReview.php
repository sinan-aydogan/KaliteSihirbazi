<?php

namespace App\Models;

use App\Enums\RiskLevel;
use App\Enums\RiskReviewConclusion;
use App\Enums\RiskReviewTrigger;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RiskReview extends Model
{
    use HasFactory;

    protected $fillable = [
        'risk_id',
        'review_date',
        'reviewed_by_id',
        'trigger',
        'probability',
        'impact',
        'score',
        'level',
        'controls_adequate',
        'conclusion',
        'notes',
        'linked_problem_id',
    ];

    protected $casts = [
        'review_date' => 'date',
        'trigger' => RiskReviewTrigger::class,
        'level' => RiskLevel::class,
        'controls_adequate' => 'boolean',
        'conclusion' => RiskReviewConclusion::class,
    ];

    public function risk(): BelongsTo
    {
        return $this->belongsTo(Risk::class);
    }

    public function reviewedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'reviewed_by_id');
    }

    public function linkedProblem(): BelongsTo
    {
        return $this->belongsTo(Problem::class, 'linked_problem_id');
    }

    public function isPending(): bool
    {
        return is_null($this->conclusion);
    }
}
