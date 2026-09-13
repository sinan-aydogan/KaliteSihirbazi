<?php

namespace App\Http\Controllers;

use App\Models\Device;
use App\Models\Machine;
use App\Models\MeasurementDevice\MeasurementDevice;
use App\Support\ModulePermission;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class EquipmentAreaController extends Controller
{
    /**
     * @var array<string, class-string<Model>>
     */
    private const EQUIPMENT_MODELS = [
        'device' => Device::class,
        'machine' => Machine::class,
        'measurement-device' => MeasurementDevice::class,
    ];

    public function update(Request $request, string $equipmentType, int $equipmentId): RedirectResponse
    {
        $equipment = $this->resolveEquipment($equipmentType, $equipmentId);

        abort_unless(ModulePermission::allows($request->user(), $equipmentType, 'update'), 403);

        $data = $request->validate([
            'area_ids' => 'array',
            'area_ids.*' => 'exists:areas,id',
        ]);

        $equipment->areas()->sync($data['area_ids'] ?? []);

        return back(303);
    }

    private function resolveEquipment(string $equipmentType, int $equipmentId): Model
    {
        abort_unless(array_key_exists($equipmentType, self::EQUIPMENT_MODELS), 404);

        return self::EQUIPMENT_MODELS[$equipmentType]::findOrFail($equipmentId);
    }
}
