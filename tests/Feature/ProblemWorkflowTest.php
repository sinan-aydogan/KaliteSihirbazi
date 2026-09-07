<?php

use App\Enums\ProblemStatus;
use App\Models\Problem;
use App\Models\User;

function makeProblem(User $author): Problem
{
    return Problem::create([
        'title' => 'Yanlış ürün etiketi',
        'description' => 'Sevkiyatta yanlış ürün etiketi kullanıldı.',
        'source_type' => 'internal_observation',
        'severity' => 'medium',
        'detected_by_id' => $author->id,
        'detected_date' => now(),
    ]);
}

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
