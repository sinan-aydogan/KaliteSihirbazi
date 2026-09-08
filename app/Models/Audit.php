<?php

namespace App\Models;

use App\Enums\AuditResult;
use App\Enums\AuditStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Audit extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'audit_type_id',
        'standard_id',
        'company_accreditation_id',
        'audit_firm_id',
        'auditor_id',
        'department_id',
        'scope',
        'planned_date',
        'actual_date',
        'status',
        'result',
        'report_notes',
        'closed_at',
    ];

    protected $casts = [
        'status' => AuditStatus::class,
        'result' => AuditResult::class,
        'planned_date' => 'date',
        'actual_date' => 'date',
        'closed_at' => 'datetime',
    ];

    protected static function booted(): void
    {
        static::creating(function (Audit $audit) {
            if (empty($audit->code)) {
                $audit->code = static::nextCode();
            }
        });
    }

    protected static function nextCode(): string
    {
        $year = now()->year;
        $sequence = static::where('code', 'like', "DNT-{$year}-%")->count() + 1;

        return sprintf('DNT-%d-%03d', $year, $sequence);
    }

    public function auditType(): BelongsTo
    {
        return $this->belongsTo(AuditType::class);
    }

    public function standard(): BelongsTo
    {
        return $this->belongsTo(Standard::class);
    }

    public function companyAccreditation(): BelongsTo
    {
        return $this->belongsTo(CompanyAccreditation::class);
    }

    public function auditFirm(): BelongsTo
    {
        return $this->belongsTo(AuditFirm::class);
    }

    public function auditor(): BelongsTo
    {
        return $this->belongsTo(User::class, 'auditor_id');
    }

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    public function scopes(): BelongsToMany
    {
        return $this->belongsToMany(AuditScope::class, 'audit_audit_scope');
    }

    public function firmAuditors(): BelongsToMany
    {
        return $this->belongsToMany(AuditFirmAuditor::class, 'audit_audit_firm_auditor');
    }

    public function checklists(): HasMany
    {
        return $this->hasMany(AuditChecklist::class);
    }

    public function findings(): HasMany
    {
        return $this->hasMany(Problem::class, 'audit_id');
    }

    public function isOverdue(): bool
    {
        return $this->status === AuditStatus::Planned && $this->planned_date->isPast();
    }
}
