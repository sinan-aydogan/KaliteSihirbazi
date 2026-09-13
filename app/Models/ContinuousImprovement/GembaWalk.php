<?php

namespace App\Models\ContinuousImprovement;

use App\Models\User;
use App\Traits\HasSequentialCode;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class GembaWalk extends Model
{
    use HasFactory, HasSequentialCode, SoftDeletes;

    protected $fillable = [
        'continuous_improvement_area_id',
        'conducted_by_id',
        'walk_date',
        'participants',
        'observations',
        'general_note',
    ];

    protected $casts = [
        'walk_date' => 'date',
    ];

    protected static function booted(): void
    {
        static::creating(function (GembaWalk $walk) {
            if (empty($walk->code)) {
                $walk->code = static::nextCode();
            }
        });
    }

    protected static function nextCode(): string
    {
        return static::nextSequentialCode('GEM');
    }

    public function area(): BelongsTo
    {
        return $this->belongsTo(ImprovementArea::class, 'continuous_improvement_area_id');
    }

    public function conductedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'conducted_by_id');
    }

    public function findings(): HasMany
    {
        return $this->hasMany(GembaWalkFinding::class);
    }
}
