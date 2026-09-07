<?php

namespace App\Models\Tag;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TagType extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
        'name',
        'description',
    ];

    public function tags(): HasMany
    {
        return $this->hasMany(Tag::class);
    }

    public function moduleTagTypes(): HasMany
    {
        return $this->hasMany(ModuleTagType::class);
    }
}
