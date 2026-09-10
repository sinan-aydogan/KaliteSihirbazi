<?php

use App\Models\ComplaintSubject;
use App\Models\User;

test('an authenticated user can list complaint subjects', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('complaint-subject.index'))
        ->assertOk();
});

test('a user can create a custom complaint subject', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('complaint-subject.store'), ['name' => 'Ambalaj'])
        ->assertSessionHasNoErrors();

    $subject = ComplaintSubject::latest('id')->first();

    expect($subject->name)->toBe('Ambalaj')
        ->and($subject->is_protected)->toBeFalse();
});

test('a complaint subject in use cannot be deleted', function () {
    $user = User::factory()->create();
    $customer = \App\Models\Customer::create(['name' => 'Test Müşteri']);
    $subject = ComplaintSubject::create(['key' => 'packaging', 'name' => 'Ambalaj', 'is_protected' => false]);
    $customer->complaints()->create([
        'title' => 'Test şikayeti',
        'description' => 'Açıklama',
        'channel' => 'email',
        'severity' => 'low',
        'received_date' => now(),
        'status' => 'received',
        'reported_by_id' => $user->id,
        'complaint_source_type_id' => complaintSourceTypeId('customer'),
        'complaint_subject_id' => $subject->id,
    ]);

    $this->actingAs($user)->delete(route('complaint-subject.destroy', $subject));

    expect(ComplaintSubject::find($subject->id))->not->toBeNull();
});

test('an unused complaint subject can be deleted', function () {
    $user = User::factory()->create();
    $subject = ComplaintSubject::create(['key' => 'packaging', 'name' => 'Ambalaj', 'is_protected' => false]);

    $this->actingAs($user)->delete(route('complaint-subject.destroy', $subject));

    expect(ComplaintSubject::find($subject->id))->toBeNull();
});
