<?php

use App\Models\Problem;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('an authenticated user can list problems', function () {
    $author = User::factory()->create();
    Problem::create([
        'title' => 'Yanlış ürün etiketi',
        'description' => 'Sevkiyatta yanlış ürün etiketi kullanıldı.',
        'source_type' => 'internal_observation',
        'severity' => 'medium',
        'detected_by_id' => $author->id,
        'detected_date' => now(),
    ]);

    $this->actingAs($author)
        ->get(route('problem.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/Problem/IndexPage')
            ->where('tableData.data.0.title', 'Yanlış ürün etiketi')
        );
});

test('an authenticated user can view a problem detail page', function () {
    $author = User::factory()->create();
    $problem = Problem::create([
        'title' => 'Yanlış ürün etiketi',
        'description' => 'Sevkiyatta yanlış ürün etiketi kullanıldı.',
        'source_type' => 'internal_observation',
        'severity' => 'medium',
        'detected_by_id' => $author->id,
        'detected_date' => now(),
    ]);

    $this->actingAs($author)
        ->get(route('problem.show', $problem))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/Problem/ShowPage')
            ->where('problem.code', $problem->code)
        );
});

test('creating a problem auto-generates a sequential code and opens it', function () {
    $author = User::factory()->create();

    $this->actingAs($author)
        ->post(route('problem.store'), [
            'title' => 'Yanlış ürün etiketi',
            'description' => 'Sevkiyatta yanlış ürün etiketi kullanıldı.',
            'source_type' => 'internal_observation',
            'severity' => 'medium',
            'detected_date' => now()->toDateString(),
        ])
        ->assertSessionHasNoErrors();

    $problem = Problem::first();

    expect($problem->code)->toBe(sprintf('UYG-%d-001', now()->year))
        ->and($problem->status)->toBe(App\Enums\ProblemStatus::Open)
        ->and($problem->detected_by_id)->toBe($author->id);
});

test('creating a problem requires a title, description, source type, severity and detected date', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('problem.store'), [])
        ->assertSessionHasErrors(['title', 'description', 'source_type', 'severity', 'detected_date']);
});

test('a problem without capas can be deleted', function () {
    $author = User::factory()->create();
    $problem = Problem::create([
        'title' => 'Yanlış ürün etiketi',
        'description' => 'Açıklama',
        'source_type' => 'internal_observation',
        'severity' => 'medium',
        'detected_by_id' => $author->id,
        'detected_date' => now(),
    ]);

    $this->actingAs($author)->delete(route('problem.destroy', $problem));

    expect(Problem::find($problem->id))->toBeNull();
});

test('a problem with capas raised against it cannot be deleted', function () {
    $author = User::factory()->create();
    $problem = Problem::create([
        'title' => 'Yanlış ürün etiketi',
        'description' => 'Açıklama',
        'source_type' => 'internal_observation',
        'severity' => 'medium',
        'detected_by_id' => $author->id,
        'detected_date' => now(),
    ]);
    $problem->capas()->create([
        'title' => 'Etiket şablonu düzeltilecek',
        'type' => 'corrective',
        'description' => 'Açıklama',
        'opened_by_id' => $author->id,
        'responsible_id' => $author->id,
        'due_date' => now()->addWeek(),
    ]);

    $this->actingAs($author)->delete(route('problem.destroy', $problem));

    expect(Problem::find($problem->id))->not->toBeNull();
});
