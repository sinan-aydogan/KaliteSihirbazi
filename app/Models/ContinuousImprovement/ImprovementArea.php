<?php

namespace App\Models\ContinuousImprovement;

use App\Models\Department;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ImprovementArea extends Model
{
    use HasFactory;

    protected $table = 'continuous_improvement_areas';

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
        return $this->hasMany(FiveSAudit::class, 'continuous_improvement_area_id');
    }

    public function gembaWalks(): HasMany
    {
        return $this->hasMany(GembaWalk::class, 'continuous_improvement_area_id');
    }
}
