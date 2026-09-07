<?php

namespace App\Models\Tag;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = [
        'tag_type_id',
        'name',
        'slug',
        'description',
    ];

    public function tagType(): BelongsTo
    {
        return $this->belongsTo(TagType::class);
    }
}
