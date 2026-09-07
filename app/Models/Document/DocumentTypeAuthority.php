<?php

namespace App\Models\Document;

use App\Enums\Document\DocumentAuthorityRole;
use App\Models\Department;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class DocumentTypeAuthority extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'document_type_id',
        'user_id',
        'role',
        'source_department_id',
        'granted_by',
        'revoked_by',
    ];

    protected $casts = [
        'role' => DocumentAuthorityRole::class,
        'deleted_at' => 'datetime',
    ];

    public function documentType(): BelongsTo
    {
        return $this->belongsTo(DocumentType::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Audit-only: the department this grant was copied from via a bulk
     * "add department" action. Never consulted for access control.
     */
    public function sourceDepartment(): BelongsTo
    {
        return $this->belongsTo(Department::class, 'source_department_id');
    }

    public function grantedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'granted_by');
    }

    public function revokedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'revoked_by');
    }
}
