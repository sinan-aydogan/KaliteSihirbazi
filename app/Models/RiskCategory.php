<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class RiskCategory extends Model
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

    public function risks(): HasMany
    {
        return $this->hasMany(Risk::class);
    }
}
