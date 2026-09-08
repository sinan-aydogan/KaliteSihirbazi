<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AuditScope extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
        'name',
        'is_protected',
        'sort_order',
    ];

    protected $casts = [
        'is_protected' => 'boolean',
        'sort_order' => 'integer',
    ];

    public function audits(): BelongsToMany
    {
        return $this->belongsToMany(Audit::class, 'audit_audit_scope');
    }

    public function checklistTemplates(): HasMany
    {
        return $this->hasMany(AuditChecklistTemplate::class);
    }
}
