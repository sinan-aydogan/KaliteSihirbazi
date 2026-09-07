<?php

use App\Models\CompanyAccreditation;
use App\Models\Standard;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia as Assert;

beforeEach(function () {
    Storage::fake('public');
    $this->standard = Standard::create(['name' => 'ISO 9001:2015']);
});

test('an authenticated user can list a standard\'s accreditation records', function () {
    $this->standard->companyAccreditations()->create([
        'certification_body' => 'TÜV SÜD',
        'certificate_number' => 'CERT-001',
        'issue_date' => now()->subYear(),
        'expiry_date' => now()->addYear(),
        'status' => 'active',
    ]);

    $this->actingAs(User::factory()->create())
        ->get(route('company-accreditation.index', $this->standard))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/Standard/AccreditationsPage')
            ->where('accreditations.0.certificate_number', 'CERT-001')
            ->where('accreditations.0.is_expired', false)
        );
});

test('an expired accreditation record is flagged as expired', function () {
    $this->standard->companyAccreditations()->create([
        'certification_body' => 'TÜV SÜD',
        'certificate_number' => 'CERT-002',
        'issue_date' => now()->subYears(3),
        'expiry_date' => now()->subYear(),
        'status' => 'active',
    ]);

    $this->actingAs(User::factory()->create())
        ->get(route('company-accreditation.index', $this->standard))
        ->assertInertia(fn (Assert $page) => $page
            ->where('accreditations.0.is_expired', true)
        );
});

test('a user can create an accreditation record with a certificate file', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('company-accreditation.store', $this->standard), [
            'certification_body' => 'TÜV SÜD',
            'certificate_number' => 'CERT-003',
            'issue_date' => now()->subMonth()->toDateString(),
            'expiry_date' => now()->addYears(2)->toDateString(),
            'status' => 'active',
            'certificate_file' => UploadedFile::fake()->create('certificate.pdf', 100, 'application/pdf'),
        ])
        ->assertSessionHasNoErrors();

    $accreditation = CompanyAccreditation::where('certificate_number', 'CERT-003')->firstOrFail();
    expect($accreditation->standard_id)->toBe($this->standard->id)
        ->and($accreditation->getFirstMedia('certificate'))->not->toBeNull();
});

test('expiry date must not be before issue date', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('company-accreditation.store', $this->standard), [
            'certification_body' => 'TÜV SÜD',
            'certificate_number' => 'CERT-004',
            'issue_date' => now()->toDateString(),
            'expiry_date' => now()->subDay()->toDateString(),
            'status' => 'active',
        ])
        ->assertSessionHasErrors('expiry_date');
});

test('a user can update an accreditation record', function () {
    $accreditation = $this->standard->companyAccreditations()->create([
        'certification_body' => 'TÜV SÜD',
        'certificate_number' => 'CERT-005',
        'issue_date' => now()->subYear(),
        'expiry_date' => now()->addYear(),
        'status' => 'active',
    ]);

    $this->actingAs(User::factory()->create())
        ->put(route('company-accreditation.update', $accreditation), [
            'certification_body' => 'TÜV SÜD',
            'certificate_number' => 'CERT-005',
            'issue_date' => $accreditation->issue_date->toDateString(),
            'expiry_date' => $accreditation->expiry_date->toDateString(),
            'status' => 'suspended',
        ])
        ->assertSessionHasNoErrors();

    expect($accreditation->fresh()->status)->toBe(\App\Enums\AccreditationStatus::Suspended);
});

test('a user can delete an accreditation record', function () {
    $accreditation = $this->standard->companyAccreditations()->create([
        'certification_body' => 'TÜV SÜD',
        'certificate_number' => 'CERT-006',
        'issue_date' => now()->subYear(),
        'expiry_date' => now()->addYear(),
        'status' => 'active',
    ]);

    $this->actingAs(User::factory()->create())
        ->delete(route('company-accreditation.destroy', $accreditation));

    expect(CompanyAccreditation::find($accreditation->id))->toBeNull();
});
