<?php

namespace App\Models;

use App\Enums\CapaActionStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CapaAction extends Model
{
    use HasFactory;

    protected $fillable = [
        'capa_id',
        'description',
        'responsible_id',
        'due_date',
        'completed_at',
        'status',
    ];

    protected $casts = [
        'due_date' => 'date',
        'completed_at' => 'datetime',
        'status' => CapaActionStatus::class,
    ];

    public function capa(): BelongsTo
    {
        return $this->belongsTo(Capa::class);
    }

    public function responsible(): BelongsTo
    {
        return $this->belongsTo(User::class, 'responsible_id');
    }

    public function isOverdue(): bool
    {
        return $this->status !== CapaActionStatus::Done && $this->due_date->isPast();
    }
}
