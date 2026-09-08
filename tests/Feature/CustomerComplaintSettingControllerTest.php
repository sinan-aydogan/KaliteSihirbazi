<?php

use App\Models\Setting;
use App\Models\User;

beforeEach(function () {
    Setting::updateOrCreate(['code' => 'complaint_response_sla_days'], ['module' => 'customer_complaint', 'type' => 'json', 'value' => json_encode(3)]);
});

test('an authenticated user can view customer complaint settings', function () {
    $this->actingAs(User::factory()->create())
        ->get(route('customer-complaint-setting.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('Modules/CustomerComplaint/Setting/IndexPage'));
});

test('a user can update the response SLA days setting', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('customer-complaint-setting.update'), [
            'complaint_response_sla_days' => ['value' => 5, 'type' => 'json'],
        ])
        ->assertSessionHasNoErrors();

    expect(json_decode(Setting::where('code', 'complaint_response_sla_days')->value('value')))->toBe(5);
});
