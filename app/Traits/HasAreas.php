<?php

namespace App\Traits;

use App\Models\Area;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

/**
 * Lets a piece of equipment (Device/Machine/MeasurementDevice) belong to
 * multiple Areas at once, via the shared `area_equipment` polymorphic pivot
 * — answers "where can I find this device" (see also Area::equipmentQuery()
 * for the reverse "what equipment is in this area" lookup).
 */
trait HasAreas
{
    public function areas(): MorphToMany
    {
        return $this->morphToMany(Area::class, 'equipment', 'area_equipment')->withTimestamps();
    }
}
