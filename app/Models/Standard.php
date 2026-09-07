<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Standard extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ];

    public function companyAccreditations(): HasMany
    {
        return $this->hasMany(CompanyAccreditation::class);
    }
}
