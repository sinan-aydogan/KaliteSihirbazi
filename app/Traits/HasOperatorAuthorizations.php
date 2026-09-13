<?php

namespace App\Traits;

use App\Models\EquipmentOperatorAuthorization;
use App\Models\HumanResources\Employee\Employee;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Carbon;

/**
 * Which employees are authorized to operate this piece of equipment
 * (Device/Machine/MeasurementDevice) — distinct from an Area's
 * "responsible" person, and optionally traced back to the Education
 * record that granted it.
 */
trait HasOperatorAuthorizations
{
    public function operatorAuthorizations(): MorphMany
    {
        return $this->morphMany(EquipmentOperatorAuthorization::class, 'equipment');
    }

    public function isOperatorAuthorized(Employee $employee): bool
    {
        return $this->operatorAuthorizations()
            ->where('employee_id', $employee->id)
            ->where(fn ($query) => $query->whereNull('expires_at')->orWhere('expires_at', '>=', Carbon::today()))
            ->exists();
    }
}
