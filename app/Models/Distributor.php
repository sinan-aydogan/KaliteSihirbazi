<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Distributor extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
        'contact_info',
        'notes',
        'is_active',
    ];

    protected $casts = [
        'contact_info' => 'array',
        'notes' => 'array',
        'is_active' => 'boolean',
    ];

    public function complaints(): HasMany
    {
        return $this->hasMany(CustomerComplaint::class);
    }
}
