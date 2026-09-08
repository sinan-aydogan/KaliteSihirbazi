<?php

use App\Models\Audit;
use App\Models\AuditChecklistTemplate;
use App\Models\AuditType;
use App\Models\User;

function makeInternalAuditType(): AuditType
{
    return AuditType::firstOrCreate(
        ['key' => 'internal'],
        ['name' => 'İç Denetim', 'direction' => 'internal', 'is_protected' => true]
    );
}

test('starting an internal audit with a checklist template auto-generates unanswered rows for every question', function () {
    $auditor = User::factory()->create();
    $template = AuditChecklistTemplate::create(['name' => 'ISO 9001 Proses Checklist\'i']);
    $template->questions()->create(['question' => 'Proses akış şeması güncel mi?', 'sort_order' => 1]);
    $template->questions()->create(['question' => 'Kalibrasyon kayıtları eksiksiz mi?', 'sort_order' => 2]);

    $this->actingAs($auditor)
        ->post(route('audit.store'), [
            'title' => 'Üretim Prosesi İç Denetimi',
            'audit_type_id' => makeInternalAuditType()->id,
            'planned_date' => now()->addDay()->toDateString(),
            'checklist_template_id' => $template->id,
        ])
        ->assertSessionHasNoErrors();

    $audit = Audit::first();

    expect($audit->checklists)->toHaveCount(1)
        ->and($audit->checklists->first()->answers)->toHaveCount(2)
        ->and($audit->checklists->first()->answers->first()->answer)->toBeNull();
});

test('answering a checklist question and raising a finding links the problem back to that question', function () {
    $auditor = User::factory()->create();
    $template = AuditChecklistTemplate::create(['name' => 'ISO 9001 Proses Checklist\'i']);
    $question = $template->questions()->create(['question' => 'Proses akış şeması güncel mi?', 'sort_order' => 1]);

    $audit = Audit::create([
        'title' => 'Üretim Prosesi İç Denetimi',
        'audit_type_id' => makeInternalAuditType()->id,
        'auditor_id' => $auditor->id,
        'planned_date' => now(),
        'status' => 'in_progress',
        'actual_date' => now(),
    ]);
    $checklist = $audit->checklists()->create(['audit_checklist_template_id' => $template->id]);
    $answer = $checklist->answers()->create(['audit_checklist_question_id' => $question->id]);

    $this->actingAs($auditor)
        ->put(route('audit-checklist-answer.update', $answer), [
            'answer' => 'non_compliant',
            'notes' => 'Şema 2 yıl önceki revizyonu gösteriyor.',
        ])
        ->assertSessionHasNoErrors();

    expect($answer->fresh()->answer->value)->toBe('non_compliant')
        ->and($answer->fresh()->answered_by_id)->toBe($auditor->id);

    $this->actingAs($auditor)
        ->post(route('problem.store'), [
            'audit_id' => $audit->id,
            'audit_checklist_answer_id' => $answer->id,
            'title' => 'Proses akış şeması güncel değil',
            'description' => 'Şema 2 yıl önceki revizyonu gösteriyor.',
            'source_type' => 'audit_finding',
            'severity' => 'medium',
            'detected_date' => now()->toDateString(),
        ])
        ->assertSessionHasNoErrors();

    expect($answer->fresh()->problem)->not->toBeNull()
        ->and($answer->fresh()->problem->audit_checklist_answer_id)->toBe($answer->id);
});
