<?php

namespace App\Models\Document;

use App\Enums\Document\DocumentAuthorityRole;
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

    /* Authorities (author/reviewer/approver/viewer) granted for this document type */
    public function authorities(): HasMany
    {
        return $this->hasMany(DocumentTypeAuthority::class);
    }

    public function authoritiesOfRole(DocumentAuthorityRole $role): HasMany
    {
        return $this->authorities()->where('role', $role);
    }
}
