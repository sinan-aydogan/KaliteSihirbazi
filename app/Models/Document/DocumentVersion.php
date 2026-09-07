<?php

namespace App\Models\Document;

use App\Enums\Document\DocumentVersionStatus;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class DocumentVersion extends Model
{
    use HasFactory;

    protected $fillable = [
        'document_id',
        'revised_by',
        'reviewed_by',
        'approved_by',
        'version',
        'revision_reason',
        'revision_detail',
        'status',
        'reviewed_at',
        'published_at',
    ];

    protected $casts = [
        'version' => 'integer',
        'status' => DocumentVersionStatus::class,
        'reviewed_at' => 'datetime',
        'published_at' => 'datetime',
    ];

    public function document(): BelongsTo
    {
        return $this->belongsTo(Document::class);
    }

    public function revisedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'revised_by');
    }

    public function reviewedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'reviewed_by');
    }

    public function approvedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

    public function readAcknowledgments(): HasMany
    {
        return $this->hasMany(DocumentReadAcknowledgment::class);
    }
}
