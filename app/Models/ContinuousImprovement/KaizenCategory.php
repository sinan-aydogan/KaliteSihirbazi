<?php

namespace App\Models\ContinuousImprovement;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class KaizenCategory extends Model
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

    public function suggestions(): HasMany
    {
        return $this->hasMany(KaizenSuggestion::class, 'kaizen_category_id');
    }
}
