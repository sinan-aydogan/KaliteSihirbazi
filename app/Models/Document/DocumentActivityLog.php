<?php

namespace App\Models\Document;

use App\Enums\Document\DocumentActivityAction;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DocumentActivityLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'document_id',
        'document_version_id',
        'user_id',
        'action',
        'meta',
    ];

    protected $casts = [
        'action' => DocumentActivityAction::class,
        'meta' => 'array',
    ];

    public function document(): BelongsTo
    {
        return $this->belongsTo(Document::class);
    }

    public function documentVersion(): BelongsTo
    {
        return $this->belongsTo(DocumentVersion::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public static function record(
        Document $document,
        DocumentActivityAction $action,
        ?User $actor = null,
        ?DocumentVersion $version = null,
        array $meta = [],
    ): self {
        return self::create([
            'document_id' => $document->id,
            'document_version_id' => $version?->id,
            'user_id' => $actor?->id,
            'action' => $action,
            'meta' => $meta,
        ]);
    }
}
