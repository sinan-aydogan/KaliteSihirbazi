<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ComplaintSourceType extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
        'name',
        'is_protected',
        'sort_order',
    ];

    protected $casts = [
        'is_protected' => 'boolean',
        'sort_order' => 'integer',
    ];

    public function complaints(): HasMany
    {
        return $this->hasMany(CustomerComplaint::class);
    }
}
