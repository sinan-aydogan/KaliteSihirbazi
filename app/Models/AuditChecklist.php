<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AuditChecklist extends Model
{
    use HasFactory;

    protected $fillable = [
        'audit_id',
        'audit_checklist_template_id',
    ];

    public function audit(): BelongsTo
    {
        return $this->belongsTo(Audit::class);
    }

    public function template(): BelongsTo
    {
        return $this->belongsTo(AuditChecklistTemplate::class, 'audit_checklist_template_id');
    }

    public function answers(): HasMany
    {
        return $this->hasMany(AuditChecklistAnswer::class);
    }
}
