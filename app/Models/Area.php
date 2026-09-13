<?php

namespace App\Models;

use App\Models\ContinuousImprovement\FiveSAudit;
use App\Models\ContinuousImprovement\GembaWalk;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Area extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'department_id',
        'responsible_id',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    public function responsible(): BelongsTo
    {
        return $this->belongsTo(User::class, 'responsible_id');
    }

    public function fiveSAudits(): HasMany
    {
        return $this->hasMany(FiveSAudit::class);
    }

    public function gembaWalks(): HasMany
    {
        return $this->hasMany(GembaWalk::class);
    }
}
