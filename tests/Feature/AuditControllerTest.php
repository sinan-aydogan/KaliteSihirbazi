<?php

use App\Models\Audit;
use App\Models\AuditType;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

function makeAuditType(): AuditType
{
    return AuditType::firstOrCreate(
        ['key' => 'certification'],
        ['name' => 'Belgelendirme Denetimi', 'direction' => 'external', 'is_protected' => true]
    );
}

test('an authenticated user can list audits', function () {
    $author = User::factory()->create();
    Audit::create([
        'title' => 'Yıllık ISO 9001 Gözetim Denetimi',
        'audit_type_id' => makeAuditType()->id,
        'auditor_id' => $author->id,
        'planned_date' => now()->addWeek(),
    ]);

    $this->actingAs($author)
        ->get(route('audit.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/Audit/IndexPage')
            ->where('tableData.data.0.title', 'Yıllık ISO 9001 Gözetim Denetimi')
        );
});

test('an authenticated user can view an audit detail page', function () {
    $author = User::factory()->create();
    $audit = Audit::create([
        'title' => 'Yıllık ISO 9001 Gözetim Denetimi',
        'audit_type_id' => makeAuditType()->id,
        'auditor_id' => $author->id,
        'planned_date' => now()->addWeek(),
    ]);

    $this->actingAs($author)
        ->get(route('audit.show', $audit))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/Audit/ShowPage')
            ->where('audit.code', $audit->code)
        );
});

test('creating an audit auto-generates a sequential code and plans it', function () {
    $author = User::factory()->create();
    $auditType = makeAuditType();

    $this->actingAs($author)
        ->post(route('audit.store'), [
            'title' => 'Yıllık ISO 9001 Gözetim Denetimi',
            'audit_type_id' => $auditType->id,
            'planned_date' => now()->addWeek()->toDateString(),
        ])
        ->assertSessionHasNoErrors();

    $audit = Audit::first();

    expect($audit->code)->toBe(sprintf('DNT-%d-001', now()->year))
        ->and($audit->status)->toBe(App\Enums\AuditStatus::Planned)
        ->and($audit->auditor_id)->toBe($author->id);
});

test('sequential code generation skips past a deleted middle gap instead of colliding', function () {
    $author = User::factory()->create();
    $auditType = makeAuditType();

    $first = Audit::create(['title' => 'A', 'audit_type_id' => $auditType->id, 'auditor_id' => $author->id, 'planned_date' => now()]);
    $second = Audit::create(['title' => 'B', 'audit_type_id' => $auditType->id, 'auditor_id' => $author->id, 'planned_date' => now()]);
    $third = Audit::create(['title' => 'C', 'audit_type_id' => $auditType->id, 'auditor_id' => $author->id, 'planned_date' => now()]);
    expect($third->code)->toBe(sprintf('DNT-%d-003', now()->year));

    // Deleting the middle record leaves a gap: only 001 and 003 remain, count()=2.
    // The old count()+1 logic would regenerate '003' here and collide with the unique constraint.
    $second->delete();

    $fourth = Audit::create(['title' => 'D', 'audit_type_id' => $auditType->id, 'auditor_id' => $author->id, 'planned_date' => now()]);

    expect($fourth->code)->toBe(sprintf('DNT-%d-004', now()->year))
        ->and($fourth->code)->not->toBe($first->code)
        ->and($fourth->code)->not->toBe($third->code);
});

test('creating an audit requires a title, audit type and planned date', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('audit.store'), [])
        ->assertSessionHasErrors(['title', 'audit_type_id', 'planned_date']);
});

test('an audit without findings can be deleted', function () {
    $author = User::factory()->create();
    $audit = Audit::create([
        'title' => 'Yıllık ISO 9001 Gözetim Denetimi',
        'audit_type_id' => makeAuditType()->id,
        'auditor_id' => $author->id,
        'planned_date' => now()->addWeek(),
    ]);

    $this->actingAs($author)->delete(route('audit.destroy', $audit));

    expect(Audit::find($audit->id))->toBeNull();
});

test('an audit with findings cannot be deleted', function () {
    $author = User::factory()->create();
    $audit = Audit::create([
        'title' => 'Yıllık ISO 9001 Gözetim Denetimi',
        'audit_type_id' => makeAuditType()->id,
        'auditor_id' => $author->id,
        'planned_date' => now()->addWeek(),
    ]);
    $audit->findings()->create([
        'title' => 'Kalite el kitabı güncel değil',
        'description' => 'Açıklama',
        'source_type' => 'audit_finding',
        'severity' => 'medium',
        'detected_by_id' => $author->id,
        'detected_date' => now(),
    ]);

    $this->actingAs($author)->delete(route('audit.destroy', $audit));

    expect(Audit::find($audit->id))->not->toBeNull();
});
