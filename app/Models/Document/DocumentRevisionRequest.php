<?php

namespace App\Models\Document;

use App\Enums\Document\DocumentRevisionRequestStatus;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DocumentRevisionRequest extends Model
{
    protected $fillable = [
        'document_id',
        'requested_by',
        'reason',
        'status',
        'resolved_by',
        'resolution_note',
        'resolved_at',
        'resulting_version_id',
    ];

    protected function casts(): array
    {
        return [
            'status' => DocumentRevisionRequestStatus::class,
            'resolved_at' => 'datetime',
        ];
    }

    public function document(): BelongsTo
    {
        return $this->belongsTo(Document::class);
    }

    public function requestedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'requested_by');
    }

    public function resolvedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'resolved_by');
    }

    public function resultingVersion(): BelongsTo
    {
        return $this->belongsTo(DocumentVersion::class, 'resulting_version_id');
    }
}
