<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AuditChecklistQuestion extends Model
{
    use HasFactory;

    protected $fillable = [
        'audit_checklist_template_id',
        'question',
        'standard_reference',
        'sort_order',
    ];

    protected $casts = [
        'sort_order' => 'integer',
    ];

    public function template(): BelongsTo
    {
        return $this->belongsTo(AuditChecklistTemplate::class, 'audit_checklist_template_id');
    }

    public function answers(): HasMany
    {
        return $this->hasMany(AuditChecklistAnswer::class);
    }
}
