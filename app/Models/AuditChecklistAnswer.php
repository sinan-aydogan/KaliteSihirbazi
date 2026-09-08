<?php

namespace App\Models;

use App\Enums\ChecklistAnswerResult;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class AuditChecklistAnswer extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = [
        'audit_checklist_id',
        'audit_checklist_question_id',
        'answer',
        'value',
        'notes',
        'answered_by_id',
        'answered_at',
    ];

    protected $casts = [
        'answer' => ChecklistAnswerResult::class,
        'answered_at' => 'datetime',
    ];

    public function checklist(): BelongsTo
    {
        return $this->belongsTo(AuditChecklist::class, 'audit_checklist_id');
    }

    public function question(): BelongsTo
    {
        return $this->belongsTo(AuditChecklistQuestion::class, 'audit_checklist_question_id');
    }

    public function problem(): HasOne
    {
        return $this->hasOne(Problem::class);
    }

    public function answeredBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'answered_by_id');
    }
}
