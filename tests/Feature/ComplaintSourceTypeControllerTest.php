<?php

use App\Models\ComplaintSourceType;
use App\Models\User;

test('an authenticated user can list complaint source types', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('complaint-source-type.index'))
        ->assertOk();
});

test('a user can create a custom complaint source type', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('complaint-source-type.store'), ['name' => 'Bayi'])
        ->assertSessionHasNoErrors();

    $type = ComplaintSourceType::latest('id')->first();

    expect($type->name)->toBe('Bayi')
        ->and($type->is_protected)->toBeFalse();
});

test('a protected complaint source type cannot be deleted', function () {
    $user = User::factory()->create();
    $type = ComplaintSourceType::where('key', 'customer')->firstOrFail();

    $this->actingAs($user)->delete(route('complaint-source-type.destroy', $type));

    expect(ComplaintSourceType::find($type->id))->not->toBeNull();
});

test('a complaint source type in use cannot be deleted', function () {
    $user = User::factory()->create();
    $customer = \App\Models\Customer::create(['name' => 'Test Müşteri']);
    $type = ComplaintSourceType::create(['key' => 'reseller', 'name' => 'Bayi', 'is_protected' => false]);
    $customer->complaints()->create([
        'title' => 'Test şikayeti',
        'description' => 'Açıklama',
        'channel' => 'email',
        'severity' => 'low',
        'received_date' => now(),
        'status' => 'received',
        'reported_by_id' => $user->id,
        'complaint_source_type_id' => $type->id,
        'complaint_subject_id' => complaintSubjectId('other'),
    ]);

    $this->actingAs($user)->delete(route('complaint-source-type.destroy', $type));

    expect(ComplaintSourceType::find($type->id))->not->toBeNull();
});

test('an unused custom complaint source type can be deleted', function () {
    $user = User::factory()->create();
    $type = ComplaintSourceType::create(['key' => 'reseller', 'name' => 'Bayi', 'is_protected' => false]);

    $this->actingAs($user)->delete(route('complaint-source-type.destroy', $type));

    expect(ComplaintSourceType::find($type->id))->toBeNull();
});
