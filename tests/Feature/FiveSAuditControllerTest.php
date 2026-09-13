<?php

use App\Models\Area;
use App\Models\ContinuousImprovement\FiveSAudit;
use App\Models\ContinuousImprovement\FiveSAuditFinding;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('5S audits index renders with table data', function () {
    FiveSAudit::factory()->create();

    $this->actingAs(User::factory()->create())
        ->get(route('five-s-audit.index'))
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/ContinuousImprovement/FiveS/IndexPage')
            ->has('tableData')
        );
});

test('creating a 5S audit computes the total score automatically', function () {
    $area = Area::factory()->create();

    $this->actingAs(User::factory()->create())
        ->post(route('five-s-audit.store'), [
            'area_id' => $area->id,
            'audit_date' => now()->toDateString(),
            'sort_score' => 4,
            'set_in_order_score' => 3,
            'shine_score' => 5,
            'standardize_score' => 2,
            'sustain_score' => 3,
        ])
        ->assertSessionHasNoErrors();

    $audit = FiveSAudit::first();

    expect($audit)->not->toBeNull()
        ->and($audit->total_score)->toBe(17)
        ->and($audit->code)->toStartWith('5S-');
});

test('a score out of range is rejected', function () {
    $area = Area::factory()->create();

    $this->actingAs(User::factory()->create())
        ->post(route('five-s-audit.store'), [
            'area_id' => $area->id,
            'audit_date' => now()->toDateString(),
            'sort_score' => 6,
            'set_in_order_score' => 3,
            'shine_score' => 5,
            'standardize_score' => 2,
            'sustain_score' => 3,
        ])
        ->assertSessionHasErrors('sort_score');
});

test('updating a 5S audit recomputes the total score', function () {
    $audit = FiveSAudit::factory()->create([
        'sort_score' => 5, 'set_in_order_score' => 5, 'shine_score' => 5, 'standardize_score' => 5, 'sustain_score' => 5,
    ]);

    $this->actingAs(User::factory()->create())
        ->put(route('five-s-audit.update', $audit), [
            'area_id' => $audit->area_id,
            'audit_date' => $audit->audit_date->toDateString(),
            'sort_score' => 1,
            'set_in_order_score' => 1,
            'shine_score' => 1,
            'standardize_score' => 1,
            'sustain_score' => 1,
        ])
        ->assertSessionHasNoErrors();

    expect($audit->refresh()->total_score)->toBe(5);
});

/* ---------- 5S Audit Findings ---------- */

test('a finding can be added to a 5S audit', function () {
    $audit = FiveSAudit::factory()->create();

    $this->actingAs(User::factory()->create())
        ->post(route('five-s-audit-finding.store', $audit), [
            'criterion' => 'shine',
            'description' => 'Zemin kirli',
        ])
        ->assertSessionHasNoErrors();

    expect($audit->findings()->count())->toBe(1);
});

test('a finding can be resolved', function () {
    $finding = FiveSAuditFinding::factory()->create();

    $this->actingAs(User::factory()->create())
        ->post(route('five-s-audit-finding.resolve', $finding), [
            'resolution_note' => 'Temizlik planı güncellendi',
        ])
        ->assertSessionHasNoErrors();

    expect($finding->refresh()->status->value)->toBe('resolved')
        ->and($finding->resolved_at)->not->toBeNull();
});

test('a finding can be deleted', function () {
    $finding = FiveSAuditFinding::factory()->create();

    $this->actingAs(User::factory()->create())
        ->delete(route('five-s-audit-finding.destroy', $finding))
        ->assertSessionHasNoErrors();

    expect(FiveSAuditFinding::find($finding->id))->toBeNull();
});
