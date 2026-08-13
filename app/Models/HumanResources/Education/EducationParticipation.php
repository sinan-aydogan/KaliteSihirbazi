<?php

namespace App\Models\HumanResources\Education;

use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class EducationParticipation extends Pivot implements HasMedia
{
    use InteractsWithMedia;

    protected $table = 'education_participations';

    protected $fillable = [
        'education_id',
        'user_id',
        'is_attend',
        'status',
        'score',
    ];

    protected $casts = [
        'is_attend' => 'boolean',
        'status' => 'boolean',
        'score' => 'integer',
    ];

    /**
     * Education ilişkisi
     */
    public function education(): BelongsTo
    {
        return $this->belongsTo(Education::class);
    }

    /**
     * User ilişkisi
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Media koleksiyonlarını tanımla
     */
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('education_documents') // Katılımcının eğitim belgeleri
            ->acceptsMimeTypes(['application/pdf', 'image/jpeg', 'image/png', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']);
    }
}
