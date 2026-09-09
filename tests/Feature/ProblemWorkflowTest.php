<?php

use App\Enums\ProblemStatus;
use App\Models\Problem;
use App\Models\User;

function makeProblem(User $author): Problem
{
    return Problem::create([
        'title' => 'Yanlış ürün etiketi',
        'description' => 'Sevkiyatta yanlış ürün etiketi kullanıldı.',
        'problem_source_type_id' => problemSourceTypeId('internal_observation'),
        'severity' => 'medium',
        'detected_by_id' => $author->id,
        'detected_date' => now(),
    ]);
}

test('an immediate action can be recorded on a problem regardless of status', function () {
    $author = User::factory()->create();
    $problem = makeProblem($author);

    $this->actingAs($author)
        ->post(route('problem.immediate-action', $problem), [
            'immediate_action' => 'Etkilenen parti karantinaya alındı.',
        ])
        ->assertSessionHasNoErrors();

    expect($problem->fresh()->immediate_action)->toBe('Etkilenen parti karantinaya alındı.')
        ->and($problem->fresh()->immediate_action_by_id)->toBe($author->id)
        ->and($problem->fresh()->immediate_action_at)->not->toBeNull()
        ->and($problem->fresh()->status)->toBe(ProblemStatus::Open);
});

test('recording an immediate action requires a description', function () {
    $author = User::factory()->create();
    $problem = makeProblem($author);

    $this->actingAs($author)
        ->post(route('problem.immediate-action', $problem), [])
        ->assertSessionHasErrors(['immediate_action']);
});

test('an immediate action can be amended after it was first recorded', function () {
    $author = User::factory()->create();
    $problem = makeProblem($author);
    $problem->update(['immediate_action' => 'İlk kayıt.', 'immediate_action_at' => now(), 'immediate_action_by_id' => $author->id]);

    $this->actingAs($author)
        ->post(route('problem.immediate-action', $problem), [
            'immediate_action' => 'Güncellenmiş kayıt.',
        ])
        ->assertSessionHasNoErrors();

    expect($problem->fresh()->immediate_action)->toBe('Güncellenmiş kayıt.');
});

test('raising a capa against a problem moves it into the capa_raised state', function () {
    $author = User::factory()->create();
    $problem = makeProblem($author);

    $this->actingAs($author)
        ->post(route('capa.store'), [
            'problem_id' => $problem->id,
            'title' => 'Etiket şablonu düzeltilecek',
            'type' => 'corrective',
            'description' => 'Açıklama',
            'responsible_id' => $author->id,
            'due_date' => now()->addWeek()->toDateString(),
        ])
        ->assertSessionHasNoErrors();

    expect($problem->fresh()->status)->toBe(ProblemStatus::CapaRaised)
        ->and($problem->fresh()->capas)->toHaveCount(1)
        ->and($problem->fresh()->capas->first()->problem_id)->toBe($problem->id);
});

test('a problem can be marked under review then closed without a capa', function () {
    $author = User::factory()->create();
    $problem = makeProblem($author);

    $this->actingAs($author)->post(route('problem.mark-under-review', $problem));
    expect($problem->fresh()->status)->toBe(ProblemStatus::UnderReview);

    $this->actingAs($author)->post(route('problem.close-without-capa', $problem));
    expect($problem->fresh()->status)->toBe(ProblemStatus::ClosedWithoutCapa)
        ->and($problem->fresh()->closed_at)->not->toBeNull();
});

test('a problem with an open capa cannot be closed', function () {
    $author = User::factory()->create();
    $problem = makeProblem($author);
    $problem->update(['status' => ProblemStatus::CapaRaised]);
    $problem->capas()->create([
        'title' => 'Etiket şablonu düzeltilecek',
        'type' => 'corrective',
        'description' => 'Açıklama',
        'opened_by_id' => $author->id,
        'responsible_id' => $author->id,
        'due_date' => now()->addWeek(),
        'status' => 'in_progress',
    ]);

    $this->actingAs($author)->post(route('problem.close', $problem));

    expect($problem->fresh()->status)->toBe(ProblemStatus::CapaRaised);
});

test('a problem can be closed once every raised capa is closed', function () {
    $author = User::factory()->create();
    $problem = makeProblem($author);
    $problem->update(['status' => ProblemStatus::CapaRaised]);
    $problem->capas()->create([
        'title' => 'Etiket şablonu düzeltilecek',
        'type' => 'corrective',
        'description' => 'Açıklama',
        'opened_by_id' => $author->id,
        'responsible_id' => $author->id,
        'due_date' => now()->addWeek(),
        'status' => 'closed_effective',
        'closed_at' => now(),
    ]);

    $this->actingAs($author)->post(route('problem.close', $problem));

    expect($problem->fresh()->status)->toBe(ProblemStatus::Closed)
        ->and($problem->fresh()->closed_at)->not->toBeNull();
});
