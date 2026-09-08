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
