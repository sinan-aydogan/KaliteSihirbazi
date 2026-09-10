<?php

use App\Models\Distributor;
use App\Models\User;

test('an authenticated user can list distributors', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('distributor.store'), ['code' => 'DIS-001', 'name' => 'Anadolu Dağıtım A.Ş.']);

    $this->actingAs($user)
        ->get(route('distributor.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('Modules/BusinessManagement/Distributor/IndexPage')
            ->where('tableData.data.0.name', 'Anadolu Dağıtım A.Ş.')
        );
});

test('a distributor with complaints cannot be deleted', function () {
    $user = User::factory()->create();
    $distributor = Distributor::create(['code' => 'DIS-002', 'name' => 'Test Dağıtıcı']);
    $distributor->complaints()->create([
        'title' => 'Test şikayeti',
        'description' => 'Açıklama',
        'channel' => 'email',
        'severity' => 'low',
        'received_date' => now(),
        'status' => 'received',
        'reported_by_id' => $user->id,
        'complaint_source_type_id' => complaintSourceTypeId('distributor'),
        'complaint_subject_id' => complaintSubjectId('other'),
    ]);

    $this->actingAs($user)->delete(route('distributor.destroy', $distributor));

    expect(Distributor::find($distributor->id))->not->toBeNull();
});

test('an unused distributor can be deleted', function () {
    $user = User::factory()->create();
    $distributor = Distributor::create(['code' => 'DIS-003', 'name' => 'Silinebilir Dağıtıcı']);

    $this->actingAs($user)->delete(route('distributor.destroy', $distributor));

    expect(Distributor::find($distributor->id))->toBeNull();
});
