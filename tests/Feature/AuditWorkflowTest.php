<?php

use App\Enums\AuditStatus;
use App\Models\Audit;
use App\Models\User;

function makeAudit(User $auditor): Audit
{
    return Audit::create([
        'title' => 'Yıllık ISO 9001 Gözetim Denetimi',
        'audit_type' => 'certification',
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
            'source_type' => 'audit_finding',
            'severity' => 'medium',
            'detected_date' => now()->toDateString(),
        ])
        ->assertSessionHasNoErrors();

    expect($audit->fresh()->findings)->toHaveCount(1)
        ->and($audit->fresh()->findings->first()->audit_id)->toBe($audit->id);
});
