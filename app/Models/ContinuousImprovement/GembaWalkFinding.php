<?php

namespace App\Models\ContinuousImprovement;

use App\Enums\GembaFindingCategory;
use App\Enums\ImprovementFindingStatus;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class GembaWalkFinding extends Model
{
    use HasFactory;

    protected $fillable = [
        'gemba_walk_id',
        'category',
        'description',
        'responsible_id',
        'due_date',
        'status',
        'resolved_at',
        'resolution_note',
    ];

    protected $casts = [
        'category' => GembaFindingCategory::class,
        'status' => ImprovementFindingStatus::class,
        'due_date' => 'date',
        'resolved_at' => 'date',
    ];

    public function walk(): BelongsTo
    {
        return $this->belongsTo(GembaWalk::class, 'gemba_walk_id');
    }

    public function responsible(): BelongsTo
    {
        return $this->belongsTo(User::class, 'responsible_id');
    }
}
