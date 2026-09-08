<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class AuditFirmAuditor extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = [
        'audit_firm_id',
        'name',
        'title',
        'email',
        'phone',
    ];

    public function auditFirm(): BelongsTo
    {
        return $this->belongsTo(AuditFirm::class);
    }

    public function audits(): BelongsToMany
    {
        return $this->belongsToMany(Audit::class, 'audit_audit_firm_auditor');
    }
}
