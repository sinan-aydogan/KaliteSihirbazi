<?php

use App\Models\AuditFirm;
use App\Models\AuditFirmAuditor;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

beforeEach(function () {
    Storage::fake('public');
});

test('an authenticated user can list a firm\'s auditors', function () {
    $user = User::factory()->create();
    $firm = AuditFirm::create(['name' => 'TÜV Belgelendirme']);
    $firm->auditors()->create(['name' => 'Ahmet Yılmaz']);

    $this->actingAs($user)
        ->get(route('audit-firm-auditor.index', $firm))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('Modules/AuditFirm/AuditorsPage')
            ->where('auditors.0.name', 'Ahmet Yılmaz')
        );
});

test('a user can add a firm auditor with a competency document', function () {
    $user = User::factory()->create();
    $firm = AuditFirm::create(['name' => 'TÜV Belgelendirme']);

    $this->actingAs($user)
        ->post(route('audit-firm-auditor.store', $firm), [
            'name' => 'Ahmet Yılmaz',
            'title' => 'Baş Denetçi',
            'competency_documents' => [UploadedFile::fake()->create('yetkinlik.pdf', 100)],
        ])
        ->assertSessionHasNoErrors();

    $auditor = AuditFirmAuditor::first();

    expect($auditor->name)->toBe('Ahmet Yılmaz')
        ->and($auditor->getMedia('competency_documents'))->toHaveCount(1);
});

test('a firm auditor document can be deleted', function () {
    $user = User::factory()->create();
    $firm = AuditFirm::create(['name' => 'TÜV Belgelendirme']);
    $auditor = $firm->auditors()->create(['name' => 'Ahmet Yılmaz']);
    $media = $auditor->addMedia(UploadedFile::fake()->create('ziyaret.pdf', 100))->toMediaCollection('visit_documents');

    $this->actingAs($user)->delete(route('audit-firm-auditor.delete-media', [$auditor, $media->id]));

    expect($auditor->fresh()->getMedia('visit_documents'))->toHaveCount(0);
});

test('a firm auditor can be removed', function () {
    $user = User::factory()->create();
    $firm = AuditFirm::create(['name' => 'TÜV Belgelendirme']);
    $auditor = $firm->auditors()->create(['name' => 'Ahmet Yılmaz']);

    $this->actingAs($user)->delete(route('audit-firm-auditor.destroy', $auditor));

    expect(AuditFirmAuditor::find($auditor->id))->toBeNull();
});
