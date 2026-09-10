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
            'complaint_source_type_id' => complaintSourceTypeId('customer'),
            'complaint_subject_id' => complaintSubjectId('other'),
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
            'complaint_source_type_id' => complaintSourceTypeId('customer'),
            'complaint_subject_id' => complaintSubjectId('other'),
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
        'complaint_source_type_id' => complaintSourceTypeId('customer'),
        'complaint_subject_id' => complaintSubjectId('other'),
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

test('a customer-sourced complaint requires a customer', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('customer-complaint.store'), [
            'complaint_source_type_id' => complaintSourceTypeId('customer'),
            'complaint_subject_id' => complaintSubjectId('other'),
            'title' => 'Müşterisiz şikayet',
            'description' => 'Açıklama',
            'channel' => 'email',
            'severity' => 'low',
            'received_date' => now()->toDateString(),
        ])
        ->assertSessionHasErrors('customer_id');
});

test('a supplier-sourced complaint requires a supplier and links to it', function () {
    $supplier = \App\Models\Supplier::create(['code' => 'SUP-100', 'name' => 'Test Tedarikçi']);

    $this->actingAs(User::factory()->create())
        ->post(route('customer-complaint.store'), [
            'complaint_source_type_id' => complaintSourceTypeId('supplier'),
            'complaint_subject_id' => complaintSubjectId('other'),
            'title' => 'Tedarikçi şikayeti',
            'description' => 'Açıklama',
            'channel' => 'email',
            'severity' => 'low',
            'received_date' => now()->toDateString(),
        ])
        ->assertSessionHasErrors('supplier_id');

    $this->actingAs(User::factory()->create())
        ->post(route('customer-complaint.store'), [
            'complaint_source_type_id' => complaintSourceTypeId('supplier'),
            'complaint_subject_id' => complaintSubjectId('other'),
            'supplier_id' => $supplier->id,
            'title' => 'Tedarikçi şikayeti',
            'description' => 'Açıklama',
            'channel' => 'email',
            'severity' => 'low',
            'received_date' => now()->toDateString(),
        ])
        ->assertSessionHasNoErrors();

    $complaint = CustomerComplaint::latest('id')->first();

    expect($complaint->supplier_id)->toBe($supplier->id)
        ->and($complaint->customer_id)->toBeNull();
});

test('a distributor-sourced complaint requires a distributor and links to it', function () {
    $distributor = \App\Models\Distributor::create(['code' => 'DIS-100', 'name' => 'Test Dağıtıcı']);

    $this->actingAs(User::factory()->create())
        ->post(route('customer-complaint.store'), [
            'complaint_source_type_id' => complaintSourceTypeId('distributor'),
            'complaint_subject_id' => complaintSubjectId('other'),
            'distributor_id' => $distributor->id,
            'title' => 'Dağıtıcı şikayeti',
            'description' => 'Açıklama',
            'channel' => 'email',
            'severity' => 'low',
            'received_date' => now()->toDateString(),
        ])
        ->assertSessionHasNoErrors();

    $complaint = CustomerComplaint::latest('id')->first();

    expect($complaint->distributor_id)->toBe($distributor->id);
});

test('an internal-sourced complaint needs no customer, supplier or distributor', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('customer-complaint.store'), [
            'complaint_source_type_id' => complaintSourceTypeId('internal'),
            'complaint_subject_id' => complaintSubjectId('other'),
            'title' => 'İç şikayet',
            'description' => 'Açıklama',
            'channel' => 'other',
            'severity' => 'low',
            'received_date' => now()->toDateString(),
        ])
        ->assertSessionHasNoErrors();

    $complaint = CustomerComplaint::latest('id')->first();

    expect($complaint->customer_id)->toBeNull()
        ->and($complaint->supplier_id)->toBeNull()
        ->and($complaint->distributor_id)->toBeNull();
});
