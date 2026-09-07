<?php

namespace App\Models\Document;

use App\Enums\Document\DocumentVersionStatus;
use App\Models\Concerns\HasTags;
use App\Models\Department;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Document extends Model implements HasMedia
{
    use HasFactory;
    use HasTags;
    use InteractsWithMedia;

    protected $fillable = [
        'code',
        'name',
        'description',
        'department_id',
        'document_type_id',
        'creator_id',
        'publishing_status',
        'cancelled_at',
        'cancelled_by',
        'cancellation_reason',
        'superseded_by_document_id',
    ];

    protected function casts(): array
    {
        return [
            'cancelled_at' => 'datetime',
        ];
    }

    /* Document Type */
    public function documentType(): BelongsTo
    {
        return $this->belongsTo(DocumentType::class);
    }

    /* Distribution Points */
    public function distributionPoints(): BelongsToMany
    {
        return $this->belongsToMany(DistributionPoint::class, 'distribution_point_document')->withTimestamps();
    }

    /* Related Department */
    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    /* Creator */
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    /* Versions */
    public function versions(): HasMany
    {
        return $this->hasMany(DocumentVersion::class);
    }

    /* The single currently-published version, if any */
    public function currentVersion(): HasOne
    {
        return $this->hasOne(DocumentVersion::class)->where('status', DocumentVersionStatus::Approved);
    }

    /* Activity log */
    public function activityLogs(): HasMany
    {
        return $this->hasMany(DocumentActivityLog::class)->latest('id');
    }

    /* Revision requests raised against this document */
    public function revisionRequests(): HasMany
    {
        return $this->hasMany(DocumentRevisionRequest::class)->latest('id');
    }

    /* Who cancelled this document, if it was cancelled */
    public function cancelledBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'cancelled_by');
    }

    /* The document that replaces this one, if it was cancelled in its favor */
    public function supersededByDocument(): BelongsTo
    {
        return $this->belongsTo(Document::class, 'superseded_by_document_id');
    }

    /* Documents that were cancelled in favor of this one */
    public function supersedes(): HasMany
    {
        return $this->hasMany(Document::class, 'superseded_by_document_id');
    }

    public function isCancelled(): bool
    {
        return $this->cancelled_at !== null;
    }

    /**
     * Restrict a document query to those the given user is authorized to view:
     * the creator, anyone with a document-type authority (any role), or a
     * member of one of the document's distribution points. Global admins
     * (checked by the caller via the DocumentPolicy) see everything and skip
     * this scope entirely.
     */
    public function scopeVisibleTo($query, User $user)
    {
        $authorizedTypeIds = $user->documentTypeAuthorities()->pluck('document_type_id');
        $distributionPointIds = $user->distributionPoints()->pluck('distribution_points.id');

        return $query->where(function ($q) use ($user, $authorizedTypeIds, $distributionPointIds) {
            $q->where('creator_id', $user->id)
                ->orWhereIn('document_type_id', $authorizedTypeIds);

            if ($distributionPointIds->isNotEmpty()) {
                $q->orWhereHas(
                    'distributionPoints',
                    fn ($dp) => $dp->whereIn('distribution_points.id', $distributionPointIds),
                );
            }
        });
    }
}
