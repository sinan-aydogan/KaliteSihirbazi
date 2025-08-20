<?php

namespace App\Models\HumanResources\Education;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class EducationType extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
    ];

    /**
     * Education ilişkisi - Many to Many
     */
    public function educations(): BelongsToMany
    {
        return $this->belongsToMany(Education::class, 'education_education_types');
    }
}
