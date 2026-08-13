<?php

namespace App\Models\Document;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class DocumentType extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'name',
    ];

    /* Documents */
    public function documents(): HasMany
    {
        return $this->hasMany(Document::class);
    }
}
