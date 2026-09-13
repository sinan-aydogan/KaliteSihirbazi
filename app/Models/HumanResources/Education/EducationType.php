<?php

namespace App\Models\HumanResources\Education;

use App\Models\HumanResources\JobDescription\JobDescription;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class EducationType extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'validity_months',
    ];

    protected $casts = [
        'validity_months' => 'integer',
    ];

    /**
     * Education ilişkisi - Many to Many
     */
    public function educations(): BelongsToMany
    {
        return $this->belongsToMany(Education::class, 'education_education_types');
    }

    /**
     * Bu eğitim türünü zorunlu kılan görev tanımları - Many to Many
     */
    public function jobDescriptions(): BelongsToMany
    {
        return $this->belongsToMany(JobDescription::class, 'job_description_education_types');
    }
}
