<?php

use App\Models\Customer;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('an authenticated user can list customers', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('customer.store'), ['name' => 'Karel Elektronik San. Tic. A.Ş.']);

    $this->actingAs($user)
        ->get(route('customer.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/Customer/IndexPage')
            ->where('tableData.data.0.name', 'Karel Elektronik San. Tic. A.Ş.')
        );
});

test('a customer with complaints cannot be deleted', function () {
    $user = User::factory()->create();
    $customer = Customer::create(['name' => 'Test Müşteri']);
    $customer->complaints()->create([
        'title' => 'Test şikayeti',
        'description' => 'Açıklama',
        'channel' => 'email',
        'severity' => 'low',
        'received_date' => now(),
        'status' => 'received',
        'reported_by_id' => $user->id,
        'code' => 'SKY-2026-999',
    ]);

    $this->actingAs($user)->delete(route('customer.destroy', $customer));

    expect(Customer::find($customer->id))->not->toBeNull();
});
