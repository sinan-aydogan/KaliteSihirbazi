<?php

namespace App\Models\ContinuousImprovement;

use App\Enums\KaizenSuggestionStatus;
use App\Models\Department;
use App\Models\User;
use App\Traits\HasSequentialCode;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class KaizenSuggestion extends Model
{
    use HasFactory, HasSequentialCode, SoftDeletes;

    protected $fillable = [
        'title',
        'current_situation',
        'proposed_solution',
        'kaizen_category_id',
        'department_id',
        'proposed_by_id',
        'status',
        'evaluated_by_id',
        'evaluated_at',
        'evaluation_note',
        'rejection_reason',
        'responsible_id',
        'planned_completion_date',
        'completed_at',
        'estimated_annual_saving',
        'realized_annual_saving',
        'realization_note',
        'plan_note',
        'do_note',
        'check_note',
        'act_note',
    ];

    protected $casts = [
        'status' => KaizenSuggestionStatus::class,
        'evaluated_at' => 'date',
        'planned_completion_date' => 'date',
        'completed_at' => 'date',
        'estimated_annual_saving' => 'decimal:2',
        'realized_annual_saving' => 'decimal:2',
    ];

    protected static function booted(): void
    {
        static::creating(function (KaizenSuggestion $suggestion) {
            if (empty($suggestion->code)) {
                $suggestion->code = static::nextCode();
            }
        });
    }

    protected static function nextCode(): string
    {
        return static::nextSequentialCode('KZN');
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(KaizenCategory::class, 'kaizen_category_id');
    }

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    public function proposedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'proposed_by_id');
    }

    public function evaluatedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'evaluated_by_id');
    }

    public function responsible(): BelongsTo
    {
        return $this->belongsTo(User::class, 'responsible_id');
    }
}
