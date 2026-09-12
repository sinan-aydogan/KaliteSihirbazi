<?php

use App\Models\MeasurementDevice\MeasurementDevice;
use App\Models\User;

test('an active device can be decommissioned with a reason', function () {
    $device = MeasurementDevice::create(['code' => 'MD-DECOM-001']);

    $this->actingAs(User::factory()->create())
        ->post(route('measurement-device.decommission', $device), [
            'reason' => 'Cihaz kalibrasyon sonucunda uygunsuz çıktı.',
        ])
        ->assertSessionHasNoErrors();

    $device->refresh();

    expect($device->status)->toBe(MeasurementDevice::STATUS_DECOMMISSIONED)
        ->and($device->decommission_reason)->toBe('Cihaz kalibrasyon sonucunda uygunsuz çıktı.')
        ->and($device->decommissioned_at)->not->toBeNull()
        ->and($device->decommissioned_by_id)->not->toBeNull()
        ->and($device->isActive())->toBeFalse();
});

test('decommissioning requires a reason', function () {
    $device = MeasurementDevice::create(['code' => 'MD-DECOM-002']);

    $this->actingAs(User::factory()->create())
        ->post(route('measurement-device.decommission', $device), [])
        ->assertSessionHasErrors('reason');

    expect($device->fresh()->isActive())->toBeTrue();
});

test('a device cannot be decommissioned twice', function () {
    $device = MeasurementDevice::create(['code' => 'MD-DECOM-003']);
    $device->update(['status' => MeasurementDevice::STATUS_DECOMMISSIONED, 'decommissioned_at' => now(), 'decommission_reason' => 'Zaten kullanım dışı.']);

    $this->actingAs(User::factory()->create())
        ->post(route('measurement-device.decommission', $device), ['reason' => 'Tekrar deneme.']);

    expect(session('message.type'))->toBe('danger');
});

test('a decommissioned device can be reactivated, clearing decommission fields', function () {
    $device = MeasurementDevice::create(['code' => 'MD-REACT-001']);
    $device->update([
        'status' => MeasurementDevice::STATUS_DECOMMISSIONED,
        'decommissioned_at' => now(),
        'decommission_reason' => 'Test.',
        'decommissioned_by_id' => User::factory()->create()->id,
    ]);

    $this->actingAs(User::factory()->create())
        ->post(route('measurement-device.reactivate', $device))
        ->assertSessionHasNoErrors();

    $device->refresh();

    expect($device->isActive())->toBeTrue()
        ->and($device->decommissioned_at)->toBeNull()
        ->and($device->decommission_reason)->toBeNull()
        ->and($device->decommissioned_by_id)->toBeNull();
});

test('an already active device cannot be reactivated', function () {
    $device = MeasurementDevice::create(['code' => 'MD-REACT-002']);

    $this->actingAs(User::factory()->create())
        ->post(route('measurement-device.reactivate', $device));

    expect(session('message.type'))->toBe('danger');
});
