<?php

namespace App\Models;

use App\Models\ContinuousImprovement\FiveSAudit;
use App\Models\ContinuousImprovement\GembaWalk;
use App\Models\MeasurementDevice\MeasurementDevice;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Illuminate\Support\Collection;

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

    // Equipment linked to this area — device/machine/measurement device, "what is in this area"
    public function devices(): MorphToMany
    {
        return $this->morphedByMany(Device::class, 'equipment', 'area_equipment')->withTimestamps();
    }

    public function machines(): MorphToMany
    {
        return $this->morphedByMany(Machine::class, 'equipment', 'area_equipment')->withTimestamps();
    }

    public function measurementDevices(): MorphToMany
    {
        return $this->morphedByMany(MeasurementDevice::class, 'equipment', 'area_equipment')->withTimestamps();
    }

    /**
     * @return Collection<int, Device|Machine|MeasurementDevice>
     */
    public function equipment(): Collection
    {
        return $this->devices->concat($this->machines)->concat($this->measurementDevices);
    }
}
