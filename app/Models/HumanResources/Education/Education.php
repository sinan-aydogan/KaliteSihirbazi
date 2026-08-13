<?php

namespace App\Models\HumanResources\Education;

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
                'is_attend',
                'status',
                'score',
            ])
            ->withTimestamps();
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
