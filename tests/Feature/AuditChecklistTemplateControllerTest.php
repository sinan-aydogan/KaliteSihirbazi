<?php

use App\Models\AuditChecklistTemplate;
use App\Models\User;

test('an authenticated user can list checklist templates', function () {
    $user = User::factory()->create();
    AuditChecklistTemplate::create(['name' => 'ISO 9001 Proses Checklist\'i']);

    $this->actingAs($user)
        ->get(route('audit-checklist-template.index'))
        ->assertOk();
});

test('a user can create a checklist template with questions', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('audit-checklist-template.store'), ['name' => 'ISO 9001 Proses Checklist\'i'])
        ->assertSessionHasNoErrors();

    $template = AuditChecklistTemplate::first();

    $this->actingAs($user)
        ->post(route('audit-checklist-question.store', $template), [
            'question' => 'Proses akış şeması güncel mi?',
            'question_type' => 'compliance_4',
            'standard_reference' => 'ISO 9001 md. 4.4',
        ])
        ->assertSessionHasNoErrors();

    expect($template->fresh()->questions)->toHaveCount(1)
        ->and($template->fresh()->questions->first()->question)->toBe('Proses akış şeması güncel mi?');
});

test('a checklist question can be updated and deleted', function () {
    $user = User::factory()->create();
    $template = AuditChecklistTemplate::create(['name' => 'ISO 9001 Proses Checklist\'i']);
    $question = $template->questions()->create(['question' => 'Eski soru', 'question_type' => 'compliance_4', 'sort_order' => 1]);

    $this->actingAs($user)
        ->put(route('audit-checklist-question.update', $question), ['question' => 'Güncellenmiş soru', 'question_type' => 'compliance_4'])
        ->assertSessionHasNoErrors();

    expect($question->fresh()->question)->toBe('Güncellenmiş soru');

    $this->actingAs($user)->delete(route('audit-checklist-question.destroy', $question));

    expect($template->fresh()->questions)->toHaveCount(0);
});
