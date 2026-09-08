<?php

use App\Models\Customer;
use App\Models\CustomerComplaint;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

function makeComplaintCustomer(): Customer
{
    return Customer::create(['name' => 'Karel Elektronik San. Tic. A.Ş.']);
}

test('an authenticated user can list customer complaints', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('customer-complaint.store'), [
            'customer_id' => makeComplaintCustomer()->id,
            'title' => 'Eksik parça şikayeti',
            'description' => 'Açıklama',
            'channel' => 'email',
            'severity' => 'low',
            'received_date' => now()->toDateString(),
        ]);

    $this->actingAs($user)
        ->get(route('customer-complaint.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/CustomerComplaint/IndexPage')
            ->where('tableData.data.0.title', 'Eksik parça şikayeti')
        );
});

test('creating a complaint auto-generates a sequential code, sets status received, and computes the SLA due date from the setting', function () {
    \App\Models\Setting::updateOrCreate(['code' => 'complaint_response_sla_days'], ['module' => 'customer_complaint', 'type' => 'json', 'value' => json_encode(5)]);
    $author = User::factory()->create();
    $receivedDate = now()->toDateString();

    $this->actingAs($author)
        ->post(route('customer-complaint.store'), [
            'customer_id' => makeComplaintCustomer()->id,
            'title' => 'Eksik parça şikayeti',
            'description' => 'Açıklama',
            'channel' => 'email',
            'severity' => 'low',
            'received_date' => $receivedDate,
        ])
        ->assertSessionHasNoErrors();

    $complaint = CustomerComplaint::first();

    expect($complaint->code)->toBe(sprintf('SKY-%d-001', now()->year))
        ->and($complaint->status->value)->toBe('received')
        ->and($complaint->reported_by_id)->toBe($author->id)
        ->and($complaint->response_due_date->toDateString())->toBe(now()->addDays(5)->toDateString());
});

test('a complaint with linked root-cause problems cannot be deleted', function () {
    $user = User::factory()->create();
    $complaint = makeComplaintCustomer()->complaints()->create([
        'code' => 'SKY-2026-999',
        'title' => 'Test şikayeti',
        'description' => 'Açıklama',
        'channel' => 'email',
        'severity' => 'low',
        'received_date' => now(),
        'status' => 'received',
        'reported_by_id' => $user->id,
    ]);
    $complaint->problems()->create([
        'title' => 'Kök neden araştırması',
        'description' => 'Açıklama',
        'problem_source_type_id' => problemSourceTypeId('customer_complaint'),
        'severity' => 'low',
        'status' => 'open',
        'detected_by_id' => $user->id,
        'detected_date' => now(),
    ]);

    $this->actingAs($user)->delete(route('customer-complaint.destroy', $complaint));

    expect(CustomerComplaint::find($complaint->id))->not->toBeNull();
});
