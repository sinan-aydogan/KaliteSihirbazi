<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AuditChecklistTemplate extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'audit_scope_id',
        'description',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function auditScope(): BelongsTo
    {
        return $this->belongsTo(AuditScope::class, 'audit_scope_id');
    }

    public function questions(): HasMany
    {
        return $this->hasMany(AuditChecklistQuestion::class)->orderBy('sort_order');
    }
}
