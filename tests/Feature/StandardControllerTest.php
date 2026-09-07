<?php

use App\Models\Standard;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('an authenticated user can list standards', function () {
    Standard::create(['name' => 'ISO 9001:2015']);

    $this->actingAs(User::factory()->create())
        ->get(route('standard.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/Standard/IndexPage')
            ->where('tableData.data.0.name', 'ISO 9001:2015')
        );
});

test('a user can create a standard', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('standard.store'), [
            'name' => 'ISO 14001:2015',
            'description' => 'Environmental management systems',
        ])
        ->assertSessionHasNoErrors();

    expect(Standard::where('name', 'ISO 14001:2015')->exists())->toBeTrue();
});

test('creating a standard requires a name', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('standard.store'), ['name' => ''])
        ->assertSessionHasErrors('name');
});

test('a user can update a standard', function () {
    $standard = Standard::create(['name' => 'ISO 9001:2015']);

    $this->actingAs(User::factory()->create())
        ->put(route('standard.update', $standard), [
            'name' => 'ISO 9001:2015 (Updated)',
            'description' => 'Quality management systems',
        ])
        ->assertSessionHasNoErrors();

    expect($standard->fresh()->name)->toBe('ISO 9001:2015 (Updated)');
});

test('a standard without accreditation records can be deleted', function () {
    $standard = Standard::create(['name' => 'ISO 9001:2015']);

    $this->actingAs(User::factory()->create())
        ->delete(route('standard.destroy', $standard));

    expect(Standard::find($standard->id))->toBeNull();
});

test('a standard with accreditation records cannot be deleted', function () {
    $standard = Standard::create(['name' => 'ISO 9001:2015']);
    $standard->companyAccreditations()->create([
        'certification_body' => 'TÜV SÜD',
        'certificate_number' => 'CERT-001',
        'issue_date' => now()->subYear(),
        'expiry_date' => now()->addYear(),
        'status' => 'active',
    ]);

    $this->actingAs(User::factory()->create())
        ->delete(route('standard.destroy', $standard));

    expect(Standard::find($standard->id))->not->toBeNull();
});
