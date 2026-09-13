<?php

namespace App\Models;

use App\Models\HumanResources\Employee\Employee;
use App\Traits\HasAreas;
use App\Traits\HasOperatorAuthorizations;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Machine extends Model
{
    use HasAreas, HasFactory, HasOperatorAuthorizations, SoftDeletes;

    protected $fillable = [
        'code',
        'name',
        'machine_type_id',
        'department_id',
        'responsible_id',
        'brand',
        'model',
        'serial_no',
        'is_active',
        'notes',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function type(): BelongsTo
    {
        return $this->belongsTo(MachineType::class, 'machine_type_id');
    }

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    public function responsible(): BelongsTo
    {
        return $this->belongsTo(Employee::class, 'responsible_id');
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }
}
