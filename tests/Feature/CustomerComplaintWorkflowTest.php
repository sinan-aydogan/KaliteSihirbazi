<?php

use App\Models\Customer;
use App\Models\User;

function makeWorkflowComplaint(User $author)
{
    $customer = Customer::create(['name' => 'Karel Elektronik San. Tic. A.Ş.']);

    return app(\App\Services\CustomerComplaint\CustomerComplaintWorkflowService::class)->create([
        'complaint_source_type_id' => complaintSourceTypeId('customer'),
        'complaint_subject_id' => complaintSubjectId('other'),
        'customer_id' => $customer->id,
        'title' => 'PCB kartlarında lehim kaynaklı temassızlık',
        'description' => 'Açıklama',
        'channel' => 'portal',
        'severity' => 'high',
        'received_date' => now()->toDateString(),
    ], $author);
}

test('acknowledging a received complaint moves it into investigation and stamps first_response_at', function () {
    $user = User::factory()->create();
    $complaint = makeWorkflowComplaint($user);

    $this->actingAs($user)
        ->post(route('customer-complaint.acknowledge', $complaint))
        ->assertSessionHasNoErrors();

    expect($complaint->fresh()->status->value)->toBe('under_investigation')
        ->and($complaint->fresh()->first_response_at)->not->toBeNull();
});

test('raising a root-cause problem against a complaint moves it into investigation', function () {
    $user = User::factory()->create();
    $complaint = makeWorkflowComplaint($user);

    $this->actingAs($user)
        ->post(route('problem.store'), [
            'customer_complaint_id' => $complaint->id,
            'title' => 'Lehim hattı sıcaklık profili sapması',
            'description' => 'Açıklama',
            'problem_source_type_id' => problemSourceTypeId('customer_complaint'),
            'severity' => 'high',
            'detected_date' => now()->toDateString(),
        ])
        ->assertSessionHasNoErrors();

    expect($complaint->fresh()->status->value)->toBe('under_investigation')
        ->and($complaint->fresh()->problems)->toHaveCount(1);
});

test('resolving requires a resolution summary and moves status to resolved', function () {
    $user = User::factory()->create();
    $complaint = makeWorkflowComplaint($user);

    $this->actingAs($user)
        ->post(route('customer-complaint.resolve', $complaint), [])
        ->assertSessionHasErrors(['resolution_summary']);

    $this->actingAs($user)
        ->post(route('customer-complaint.resolve', $complaint), [
            'resolution_summary' => 'Lehim istasyonu sıcaklık profili kalibre edildi.',
        ])
        ->assertSessionHasNoErrors();

    expect($complaint->fresh()->status->value)->toBe('resolved');
});

test('closing a resolved complaint stamps customer_notified_at and closed_at', function () {
    $user = User::factory()->create();
    $complaint = makeWorkflowComplaint($user);
    $complaint->update(['status' => 'resolved', 'resolution_summary' => 'Çözüldü.']);

    $this->actingAs($user)
        ->post(route('customer-complaint.close', $complaint), ['customer_satisfaction_rating' => 5])
        ->assertSessionHasNoErrors();

    expect($complaint->fresh()->status->value)->toBe('closed')
        ->and($complaint->fresh()->closed_at)->not->toBeNull()
        ->and($complaint->fresh()->customer_notified_at)->not->toBeNull()
        ->and($complaint->fresh()->customer_satisfaction_rating)->toBe(5);
});

test('a complaint cannot be closed before it is resolved', function () {
    $user = User::factory()->create();
    $complaint = makeWorkflowComplaint($user);

    $this->actingAs($user)->post(route('customer-complaint.close', $complaint));

    expect($complaint->fresh()->status->value)->toBe('received');
});

test('reopening a closed complaint increments the reopened count and clears closed_at', function () {
    $user = User::factory()->create();
    $complaint = makeWorkflowComplaint($user);
    $complaint->update(['status' => 'closed', 'resolution_summary' => 'Çözüldü.', 'closed_at' => now()]);

    $this->actingAs($user)
        ->post(route('customer-complaint.reopen', $complaint), [
            'reopen_reason' => 'Aynı sorun tekrar bildirildi.',
        ])
        ->assertSessionHasNoErrors();

    expect($complaint->fresh()->status->value)->toBe('reopened')
        ->and($complaint->fresh()->reopened_count)->toBe(1)
        ->and($complaint->fresh()->closed_at)->toBeNull();
});

test('a reopened complaint can be resolved again', function () {
    $user = User::factory()->create();
    $complaint = makeWorkflowComplaint($user);
    $complaint->update(['status' => 'reopened', 'reopen_reason' => 'Tekrar bildirildi.', 'reopened_count' => 1]);

    $this->actingAs($user)
        ->post(route('customer-complaint.resolve', $complaint), [
            'resolution_summary' => 'Kök neden tekrar giderildi.',
        ])
        ->assertSessionHasNoErrors();

    expect($complaint->fresh()->status->value)->toBe('resolved');
});
