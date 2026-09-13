<?php

namespace App\Models\ContinuousImprovement;

use App\Enums\FiveSCriterion;
use App\Enums\ImprovementFindingStatus;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FiveSAuditFinding extends Model
{
    use HasFactory;

    protected $fillable = [
        'five_s_audit_id',
        'criterion',
        'description',
        'responsible_id',
        'due_date',
        'status',
        'resolved_at',
        'resolution_note',
    ];

    protected $casts = [
        'criterion' => FiveSCriterion::class,
        'status' => ImprovementFindingStatus::class,
        'due_date' => 'date',
        'resolved_at' => 'date',
    ];

    public function audit(): BelongsTo
    {
        return $this->belongsTo(FiveSAudit::class, 'five_s_audit_id');
    }

    public function responsible(): BelongsTo
    {
        return $this->belongsTo(User::class, 'responsible_id');
    }
}
