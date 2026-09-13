<?php

namespace App\Models\HumanResources\Education;

use App\Models\Capa;
use App\Models\Problem;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Education extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, SoftDeletes;

    protected $table = 'education';

    protected $fillable = [
        'education_plan_id',
        'problem_id',
        'capa_id',
        'name',
        'description',
        'planned_date',
        'performed_date',
        'duration',
        'is_completed',
        'is_cancelled',
        'cancel_reason',
    ];

    protected $casts = [
        'planned_date' => 'date',
        'performed_date' => 'date',
        'is_completed' => 'boolean',
        'is_cancelled' => 'boolean',
    ];

    /**
     * EducationPlan ilişkisi
     */
    public function educationPlan(): BelongsTo
    {
        return $this->belongsTo(EducationPlan::class);
    }

    /**
     * Bu eğitimin doğduğu uygunsuzluk (varsa)
     */
    public function problem(): BelongsTo
    {
        return $this->belongsTo(Problem::class);
    }

    /**
     * Bu eğitimin doğduğu DÖF (varsa)
     */
    public function capa(): BelongsTo
    {
        return $this->belongsTo(Capa::class);
    }

    /**
     * EducationType ilişkisi - Many to Many
     */
    public function educationTypes(): BelongsToMany
    {
        return $this->belongsToMany(EducationType::class, 'education_education_types')->withTimestamps();
    }

    /**
     * EducationInstructor ilişkisi - Many to Many
     */
    public function instructors(): BelongsToMany
    {
        return $this->belongsToMany(EducationInstructor::class, 'education_education_instructors')
            ->withPivot('role')
            ->withTimestamps();
    }

    /**
     * Katılımcılar ilişkisi - EducationParticipation üzerinden
     */
    public function participations(): HasMany
    {
        return $this->hasMany(EducationParticipation::class);
    }

    /**
     * Katılımcı kullanıcılar
     */
    public function participants(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'education_participations')
            ->using(EducationParticipation::class)
            ->withPivot([
                'id',
                'is_attend',
                'status',
                'score',
                'expires_at',
                'effectiveness_rating',
                'effectiveness_note',
                'effectiveness_evaluated_at',
                'effectiveness_evaluated_by_id',
            ])
            ->withTimestamps();
    }

    /**
     * En kısa geçerlilik süresi (ay) - birden fazla eğitim türü varsa en erken dolan esas alınır
     */
    public function shortestValidityMonths(): ?int
    {
        return $this->educationTypes->pluck('validity_months')->filter()->min();
    }

    /**
     * Media koleksiyonlarını tanımla
     */
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('documents') // Eğitim dokümanları
            ->acceptsMimeTypes(['application/pdf', 'image/jpeg', 'image/png', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']);
    }
}
