<?php

namespace App\Models\HumanResources\Education;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class EducationInstructor extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, SoftDeletes;

    protected $fillable = [
        'name',
    ];

    /**
     * Education ilişkisi - Many to Many
     */
    public function educations(): BelongsToMany
    {
        return $this->belongsToMany(Education::class, 'education_education_instructors')
            ->withPivot('role')
            ->withTimestamps();
    }

    /**
     * Media koleksiyonlarını tanımla
     */
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('education_instructor_photo')
            ->singleFile() // Sadece tek fotoğraf
            ->acceptsMimeTypes(['image/jpeg', 'image/png', 'image/jpg']);

        $this->addMediaCollection('education_instructor_documents') // Birden fazla belge
            ->acceptsMimeTypes([
                'application/pdf',
                'image/jpeg',
                'image/png',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/vnd.ms-excel',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            ]);
    }

    /**
     * Media dönüşümlerini tanımla
     */
    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('thumb')
            ->width(150)
            ->height(150)
            ->sharpen(10)
            ->performOnCollections('education_instructor_photo');
    }
}
