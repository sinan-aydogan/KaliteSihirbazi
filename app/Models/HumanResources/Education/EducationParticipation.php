<?php

namespace App\Models\HumanResources\Education;

use App\Enums\RiskControlEffectiveness;
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
        'expires_at',
        'effectiveness_rating',
        'effectiveness_note',
        'effectiveness_evaluated_at',
        'effectiveness_evaluated_by_id',
    ];

    protected $casts = [
        'is_attend' => 'boolean',
        'status' => 'boolean',
        'score' => 'integer',
        'expires_at' => 'date',
        'effectiveness_rating' => RiskControlEffectiveness::class,
        'effectiveness_evaluated_at' => 'date',
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
     * Etkinlik değerlendirmesini yapan kullanıcı
     */
    public function effectivenessEvaluatedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'effectiveness_evaluated_by_id');
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
