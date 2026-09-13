<?php

namespace App\Services\MeasurementDevice;

use App\Models\MeasurementDevice\MeasurementDevice;
use App\Models\User;
use RuntimeException;

class MeasurementDeviceWorkflowService
{
    public function decommission(MeasurementDevice $device, string $reason, User $user): MeasurementDevice
    {
        if (! $device->isActive()) {
            throw new RuntimeException('Bu cihaz zaten kullanım dışı.');
        }

        $device->update([
            'status' => MeasurementDevice::STATUS_DECOMMISSIONED,
            'decommissioned_at' => now(),
            'decommission_reason' => $reason,
            'decommissioned_by_id' => $user->id,
        ]);

        return $device;
    }

    public function reactivate(MeasurementDevice $device): MeasurementDevice
    {
        if ($device->isActive()) {
            throw new RuntimeException('Bu cihaz zaten aktif.');
        }

        $device->update([
            'status' => MeasurementDevice::STATUS_ACTIVE,
            'decommissioned_at' => null,
            'decommission_reason' => null,
            'decommissioned_by_id' => null,
        ]);

        return $device;
    }
}
