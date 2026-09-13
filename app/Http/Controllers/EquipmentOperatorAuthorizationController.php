<?php

namespace App\Http\Controllers;

use App\Models\Device;
use App\Models\EquipmentOperatorAuthorization;
use App\Models\Machine;
use App\Models\MeasurementDevice\MeasurementDevice;
use App\Support\ModulePermission;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class EquipmentOperatorAuthorizationController extends Controller
{
    /**
     * @var array<string, class-string<Model>>
     */
    private const EQUIPMENT_MODELS = [
        'device' => Device::class,
        'machine' => Machine::class,
        'measurement-device' => MeasurementDevice::class,
    ];

    public function store(Request $request, string $equipmentType, int $equipmentId): RedirectResponse
    {
        $equipment = $this->resolveEquipment($equipmentType, $equipmentId);

        abort_unless(ModulePermission::allows($request->user(), $equipmentType, 'update'), 403);

        $data = $this->validated($request);

        $equipment->operatorAuthorizations()->create([
            ...$data,
            'granted_by_id' => auth()->id(),
        ]);

        return back(303);
    }

    public function update(Request $request, string $equipmentType, int $equipmentId, EquipmentOperatorAuthorization $authorization): RedirectResponse
    {
        $this->resolveEquipment($equipmentType, $equipmentId);

        abort_unless(ModulePermission::allows($request->user(), $equipmentType, 'update'), 403);

        $authorization->update($this->validated($request));

        return back(303);
    }

    public function destroy(Request $request, string $equipmentType, int $equipmentId, EquipmentOperatorAuthorization $authorization): RedirectResponse
    {
        $this->resolveEquipment($equipmentType, $equipmentId);

        abort_unless(ModulePermission::allows($request->user(), $equipmentType, 'delete'), 403);

        $authorization->delete();

        return back(303);
    }

    private function validated(Request $request): array
    {
        return $request->validate([
            'employee_id' => 'required|exists:employees,id',
            'education_id' => 'nullable|exists:education,id',
            'granted_at' => 'required|date',
            'expires_at' => 'nullable|date|after:granted_at',
            'note' => 'nullable|string|max:1000',
        ]);
    }

    private function resolveEquipment(string $equipmentType, int $equipmentId): Model
    {
        abort_unless(array_key_exists($equipmentType, self::EQUIPMENT_MODELS), 404);

        return self::EQUIPMENT_MODELS[$equipmentType]::findOrFail($equipmentId);
    }
}
