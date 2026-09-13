<?php

namespace App\Models\ContinuousImprovement;

use App\Models\User;
use App\Traits\HasSequentialCode;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class FiveSAudit extends Model
{
    use HasFactory, HasSequentialCode, SoftDeletes;

    protected $fillable = [
        'continuous_improvement_area_id',
        'audited_by_id',
        'audit_date',
        'sort_score',
        'set_in_order_score',
        'shine_score',
        'standardize_score',
        'sustain_score',
        'total_score',
        'general_note',
    ];

    protected $casts = [
        'audit_date' => 'date',
        'sort_score' => 'integer',
        'set_in_order_score' => 'integer',
        'shine_score' => 'integer',
        'standardize_score' => 'integer',
        'sustain_score' => 'integer',
        'total_score' => 'integer',
    ];

    protected static function booted(): void
    {
        static::creating(function (FiveSAudit $audit) {
            if (empty($audit->code)) {
                $audit->code = static::nextCode();
            }

            $audit->total_score = $audit->sort_score + $audit->set_in_order_score + $audit->shine_score
                + $audit->standardize_score + $audit->sustain_score;
        });

        static::updating(function (FiveSAudit $audit) {
            $audit->total_score = $audit->sort_score + $audit->set_in_order_score + $audit->shine_score
                + $audit->standardize_score + $audit->sustain_score;
        });
    }

    protected static function nextCode(): string
    {
        return static::nextSequentialCode('5S');
    }

    public function area(): BelongsTo
    {
        return $this->belongsTo(ImprovementArea::class, 'continuous_improvement_area_id');
    }

    public function auditedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'audited_by_id');
    }

    public function findings(): HasMany
    {
        return $this->hasMany(FiveSAuditFinding::class);
    }
}
