<?php

use App\Models\CalibrationTechnician;
use App\Models\MeasurementDevice\MeasurementDeviceType;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

beforeEach(function () {
    Storage::fake('public');
});

test('an authenticated user can list calibration technicians', function () {
    $user = User::factory()->create();
    CalibrationTechnician::create(['user_id' => $user->id]);

    $this->actingAs(User::factory()->create())
        ->get(route('calibration-technician.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('Modules/MeasurementDevice/Setting/Technician/IndexPage')
            ->has('tableData.data', 1)
        );
});

test('a technician can be created with a device type scope and a competency document', function () {
    $user = User::factory()->create();
    $type = MeasurementDeviceType::create(['code' => 'KMP', 'name' => 'Kumpas']);

    $this->actingAs(User::factory()->create())
        ->post(route('calibration-technician.store'), [
            'user_id' => $user->id,
            'is_active' => true,
            'measurement_device_type_ids' => [$type->id],
            'competency_documents' => [UploadedFile::fake()->create('yetkinlik.pdf', 100)],
        ])
        ->assertSessionHasNoErrors();

    $technician = CalibrationTechnician::first();

    expect($technician->user_id)->toBe($user->id)
        ->and($technician->measurementDeviceTypes()->pluck('measurement_device_types.id')->all())->toBe([$type->id])
        ->and($technician->getMedia('competency_documents'))->toHaveCount(1);
});

test('the same user cannot be registered as a technician twice', function () {
    $user = User::factory()->create();
    CalibrationTechnician::create(['user_id' => $user->id]);

    $this->actingAs(User::factory()->create())
        ->post(route('calibration-technician.store'), ['user_id' => $user->id])
        ->assertSessionHasErrors('user_id');
});

test('a technician competency document can be deleted', function () {
    $technician = CalibrationTechnician::create(['user_id' => User::factory()->create()->id]);
    $media = $technician->addMedia(UploadedFile::fake()->create('belge.pdf', 100))->toMediaCollection('competency_documents');

    $this->actingAs(User::factory()->create())
        ->delete(route('calibration-technician.delete-media', [$technician, $media->id]));

    expect($technician->fresh()->getMedia('competency_documents'))->toHaveCount(0);
});

test('a technician can be removed', function () {
    $technician = CalibrationTechnician::create(['user_id' => User::factory()->create()->id]);

    $this->actingAs(User::factory()->create())
        ->delete(route('calibration-technician.destroy', $technician));

    expect(CalibrationTechnician::find($technician->id))->toBeNull();
});
