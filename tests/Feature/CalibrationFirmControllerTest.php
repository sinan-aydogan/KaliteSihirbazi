<?php

use App\Models\MeasurementDevice\Calibration\CalibrationFirm;
use App\Models\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTask;
use App\Models\MeasurementDevice\MeasurementDevice;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('calibration firm index renders an inertia page with paginated firms', function () {
    CalibrationFirm::create(['name' => 'Test Kalibrasyon A.Ş.', 'email' => 'info@test.com', 'phone' => '05000000000', 'address' => 'Adres']);

    $this->actingAs(User::factory()->create())
        ->get(route('calibration-firm.index'))
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/MeasurementDevice/Setting/CalibrationFirm/IndexPage')
            ->has('tableData.data', 1)
        );
});

test('calibration firm deleted page renders an inertia page with only trashed firms', function () {
    $firm = CalibrationFirm::create(['name' => 'Silinecek Firma', 'email' => 'x@test.com', 'phone' => '05000000000', 'address' => 'Adres']);
    $firm->delete();

    $this->actingAs(User::factory()->create())
        ->get(route('calibration-firm.deleted'))
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/MeasurementDevice/Setting/CalibrationFirm/DeletedPage')
            ->has('tableData.data', 1)
        );
});

test('a calibration firm with existing tasks cannot be permanently deleted', function () {
    $firm = CalibrationFirm::create(['name' => 'Kullanımda Firma', 'email' => 'y@test.com', 'phone' => '05000000000', 'address' => 'Adres']);
    $device = MeasurementDevice::create(['code' => 'MD-FIRM-001']);
    MeasurementDeviceCalibrationTask::create([
        'planned_date' => now()->toDateString(),
        'measurement_device_id' => $device->id,
        'calibration_firm_id' => $firm->id,
        'status' => false,
    ]);
    $firm->delete();

    $this->actingAs(User::factory()->create())
        ->delete(route('calibration-firm.permanent-delete', $firm))
        ->assertStatus(409);

    expect(CalibrationFirm::onlyTrashed()->find($firm->id))->not->toBeNull();
});
