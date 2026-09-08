<?php

use App\Enums\AuditStatus;
use App\Models\Audit;
use App\Models\AuditScope;
use App\Models\AuditType;
use App\Models\Setting;
use App\Models\User;

function makeAudit(User $auditor): Audit
{
    $auditType = AuditType::firstOrCreate(
        ['key' => 'certification'],
        ['name' => 'Belgelendirme Denetimi', 'direction' => 'external', 'is_protected' => true]
    );

    return Audit::create([
        'title' => 'Yıllık ISO 9001 Gözetim Denetimi',
        'audit_type_id' => $auditType->id,
        'auditor_id' => $auditor->id,
        'planned_date' => now()->addWeek(),
    ]);
}

test('a planned audit can be started', function () {
    $auditor = User::factory()->create();
    $audit = makeAudit($auditor);

    $this->actingAs($auditor)->post(route('audit.start', $audit));

    expect($audit->fresh()->status)->toBe(AuditStatus::InProgress)
        ->and($audit->fresh()->actual_date)->not->toBeNull();
});

test('an audit cannot be started twice', function () {
    $auditor = User::factory()->create();
    $audit = makeAudit($auditor);
    $audit->update(['status' => 'in_progress', 'actual_date' => now()]);

    $this->actingAs($auditor)->post(route('audit.start', $audit));

    expect($audit->fresh()->status)->toBe(AuditStatus::InProgress);
});

test('an in-progress audit can be completed with a result', function () {
    $auditor = User::factory()->create();
    $audit = makeAudit($auditor);
    $audit->update(['status' => 'in_progress', 'actual_date' => now()]);

    $this->actingAs($auditor)
        ->post(route('audit.complete', $audit), [
            'result' => 'passed_with_findings',
            'report_notes' => 'İki küçük uygunsuzluk tespit edildi.',
        ])
        ->assertSessionHasNoErrors();

    expect($audit->fresh()->status)->toBe(AuditStatus::Completed)
        ->and($audit->fresh()->result->value)->toBe('passed_with_findings')
        ->and($audit->fresh()->closed_at)->not->toBeNull();
});

test('completing an audit requires a result', function () {
    $auditor = User::factory()->create();
    $audit = makeAudit($auditor);
    $audit->update(['status' => 'in_progress', 'actual_date' => now()]);

    $this->actingAs($auditor)
        ->post(route('audit.complete', $audit), [])
        ->assertSessionHasErrors(['result']);
});

test('a planned audit can be cancelled', function () {
    $auditor = User::factory()->create();
    $audit = makeAudit($auditor);

    $this->actingAs($auditor)->post(route('audit.cancel', $audit));

    expect($audit->fresh()->status)->toBe(AuditStatus::Cancelled)
        ->and($audit->fresh()->closed_at)->not->toBeNull();
});

test('a completed audit cannot be cancelled', function () {
    $auditor = User::factory()->create();
    $audit = makeAudit($auditor);
    $audit->update(['status' => 'completed', 'result' => 'passed', 'closed_at' => now()]);

    $this->actingAs($auditor)->post(route('audit.cancel', $audit));

    expect($audit->fresh()->status)->toBe(AuditStatus::Completed);
});

test('a finding raised from an audit links back to it and can be viewed from the audit', function () {
    $auditor = User::factory()->create();
    $audit = makeAudit($auditor);
    $audit->update(['status' => 'in_progress', 'actual_date' => now()]);

    $this->actingAs($auditor)
        ->post(route('problem.store'), [
            'audit_id' => $audit->id,
            'title' => 'Kalite el kitabı güncel değil',
            'description' => 'Açıklama',
            'problem_source_type_id' => problemSourceTypeId('audit_finding'),
            'severity' => 'medium',
            'detected_date' => now()->toDateString(),
        ])
        ->assertSessionHasNoErrors();

    expect($audit->fresh()->findings)->toHaveCount(1)
        ->and($audit->fresh()->findings->first()->audit_id)->toBe($audit->id);
});

test('creating an external audit with no recent internal coverage warns when the prerequisite setting is on', function () {
    Setting::updateOrCreate(['code' => 'audit_external_requires_internal_first'], ['module' => 'audit', 'type' => 'json', 'value' => json_encode(true)]);
    Setting::updateOrCreate(['code' => 'audit_internal_prerequisite_window_days'], ['module' => 'audit', 'type' => 'json', 'value' => json_encode(365)]);

    $auditor = User::factory()->create();
    $scope = AuditScope::firstOrCreate(['key' => 'process'], ['name' => 'Proses', 'is_protected' => true]);
    $externalType = AuditType::firstOrCreate(['key' => 'certification'], ['name' => 'Belgelendirme Denetimi', 'direction' => 'external', 'is_protected' => true]);

    $response = $this->actingAs($auditor)
        ->post(route('audit.store'), [
            'title' => 'Yıllık Gözetim Denetimi',
            'audit_type_id' => $externalType->id,
            'planned_date' => now()->addWeek()->toDateString(),
            'scope_ids' => [$scope->id],
        ]);

    $response->assertSessionHasNoErrors();
    expect(session('message')['type'])->toBe('warning');
});

test('creating an external audit does not warn when a recent internal audit covers the same scope', function () {
    Setting::updateOrCreate(['code' => 'audit_external_requires_internal_first'], ['module' => 'audit', 'type' => 'json', 'value' => json_encode(true)]);
    Setting::updateOrCreate(['code' => 'audit_internal_prerequisite_window_days'], ['module' => 'audit', 'type' => 'json', 'value' => json_encode(365)]);

    $auditor = User::factory()->create();
    $scope = AuditScope::firstOrCreate(['key' => 'process'], ['name' => 'Proses', 'is_protected' => true]);
    $internalType = AuditType::firstOrCreate(['key' => 'internal'], ['name' => 'İç Denetim', 'direction' => 'internal', 'is_protected' => true]);
    $externalType = AuditType::firstOrCreate(['key' => 'certification'], ['name' => 'Belgelendirme Denetimi', 'direction' => 'external', 'is_protected' => true]);

    $internalAudit = Audit::create([
        'title' => 'Proses İç Denetimi',
        'audit_type_id' => $internalType->id,
        'auditor_id' => $auditor->id,
        'planned_date' => now()->subMonth(),
        'status' => 'completed',
        'closed_at' => now()->subWeek(),
    ]);
    $internalAudit->scopes()->sync([$scope->id]);

    $response = $this->actingAs($auditor)
        ->post(route('audit.store'), [
            'title' => 'Yıllık Gözetim Denetimi',
            'audit_type_id' => $externalType->id,
            'planned_date' => now()->addWeek()->toDateString(),
            'scope_ids' => [$scope->id],
        ]);

    $response->assertSessionHasNoErrors();
    expect(session('message')['type'])->toBe('success');
});

test('the prerequisite warning does not apply when the setting is off', function () {
    Setting::updateOrCreate(['code' => 'audit_external_requires_internal_first'], ['module' => 'audit', 'type' => 'json', 'value' => json_encode(false)]);

    $auditor = User::factory()->create();
    $scope = AuditScope::firstOrCreate(['key' => 'process'], ['name' => 'Proses', 'is_protected' => true]);
    $externalType = AuditType::firstOrCreate(['key' => 'certification'], ['name' => 'Belgelendirme Denetimi', 'direction' => 'external', 'is_protected' => true]);

    $response = $this->actingAs($auditor)
        ->post(route('audit.store'), [
            'title' => 'Yıllık Gözetim Denetimi',
            'audit_type_id' => $externalType->id,
            'planned_date' => now()->addWeek()->toDateString(),
            'scope_ids' => [$scope->id],
        ]);

    $response->assertSessionHasNoErrors();
    expect(session('message')['type'])->toBe('success');
});
