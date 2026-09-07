<?php

namespace App\Models\Tag;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ModuleTagType extends Model
{
    protected $fillable = [
        'module_key',
        'tag_type_id',
    ];

    public function tagType(): BelongsTo
    {
        return $this->belongsTo(TagType::class);
    }
}
