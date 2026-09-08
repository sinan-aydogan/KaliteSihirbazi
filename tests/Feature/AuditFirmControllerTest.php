<?php

use App\Models\AuditFirm;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('an authenticated user can list audit firms', function () {
    $user = User::factory()->create();
    AuditFirm::create(['name' => 'TÜV Belgelendirme']);

    $this->actingAs($user)
        ->get(route('audit-firm.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/AuditFirm/IndexPage')
            ->where('tableData.data.0.name', 'TÜV Belgelendirme')
        );
});

test('a user can create an audit firm', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('audit-firm.store'), [
            'name' => 'TÜV Belgelendirme',
            'email' => 'info@tuv.example',
            'phone' => '02121234567',
            'address' => 'İstanbul',
        ])
        ->assertSessionHasNoErrors();

    expect(AuditFirm::first()->name)->toBe('TÜV Belgelendirme');
});

test('creating an audit firm requires a name', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('audit-firm.store'), [])
        ->assertSessionHasErrors(['name']);
});

test('a user can update an audit firm', function () {
    $user = User::factory()->create();
    $firm = AuditFirm::create(['name' => 'TÜV Belgelendirme']);

    $this->actingAs($user)
        ->put(route('audit-firm.update', $firm), ['name' => 'TÜV Belgelendirme A.Ş.'])
        ->assertSessionHasNoErrors();

    expect($firm->fresh()->name)->toBe('TÜV Belgelendirme A.Ş.');
});

test('an audit firm without audits can be deleted', function () {
    $user = User::factory()->create();
    $firm = AuditFirm::create(['name' => 'TÜV Belgelendirme']);

    $this->actingAs($user)->delete(route('audit-firm.destroy', $firm));

    expect(AuditFirm::find($firm->id))->toBeNull();
});

test('an audit firm with audits cannot be deleted', function () {
    $user = User::factory()->create();
    $firm = AuditFirm::create(['name' => 'TÜV Belgelendirme']);
    $firm->audits()->create([
        'title' => 'Yıllık Gözetim Denetimi',
        'audit_type' => 'certification',
        'planned_date' => now()->addWeek(),
    ]);

    $this->actingAs($user)->delete(route('audit-firm.destroy', $firm));

    expect(AuditFirm::find($firm->id))->not->toBeNull();
});
