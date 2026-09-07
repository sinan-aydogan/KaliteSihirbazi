<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CapaVerification extends Model
{
    use HasFactory;

    protected $fillable = [
        'capa_id',
        'verified_by_id',
        'verification_date',
        'is_effective',
        'notes',
    ];

    protected $casts = [
        'verification_date' => 'date',
        'is_effective' => 'boolean',
    ];

    public function capa(): BelongsTo
    {
        return $this->belongsTo(Capa::class);
    }

    public function verifiedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'verified_by_id');
    }
}
