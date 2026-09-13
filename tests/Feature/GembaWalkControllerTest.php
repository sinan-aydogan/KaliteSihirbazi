<?php

use App\Models\ContinuousImprovement\GembaWalk;
use App\Models\ContinuousImprovement\GembaWalkFinding;
use App\Models\ContinuousImprovement\ImprovementArea;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('gemba walks index renders with table data', function () {
    GembaWalk::factory()->create();

    $this->actingAs(User::factory()->create())
        ->get(route('gemba-walk.index'))
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/ContinuousImprovement/Gemba/IndexPage')
            ->has('tableData')
        );
});

test('a user can record a gemba walk', function () {
    $area = ImprovementArea::factory()->create();

    $this->actingAs(User::factory()->create())
        ->post(route('gemba-walk.store'), [
            'continuous_improvement_area_id' => $area->id,
            'walk_date' => now()->toDateString(),
            'observations' => 'Hat üzerinde WIP birikmiş',
        ])
        ->assertSessionHasNoErrors();

    $walk = GembaWalk::first();

    expect($walk)->not->toBeNull()
        ->and($walk->code)->toStartWith('GEM-');
});

test('observations are required', function () {
    $area = ImprovementArea::factory()->create();

    $this->actingAs(User::factory()->create())
        ->post(route('gemba-walk.store'), [
            'continuous_improvement_area_id' => $area->id,
            'walk_date' => now()->toDateString(),
        ])
        ->assertSessionHasErrors('observations');
});

test('a finding can be added to a gemba walk', function () {
    $walk = GembaWalk::factory()->create();

    $this->actingAs(User::factory()->create())
        ->post(route('gemba-walk-finding.store', $walk), [
            'category' => 'safety',
            'description' => 'Kablo yürüme yolunda',
        ])
        ->assertSessionHasNoErrors();

    expect($walk->findings()->count())->toBe(1);
});

test('a gemba finding can be resolved', function () {
    $finding = GembaWalkFinding::factory()->create();

    $this->actingAs(User::factory()->create())
        ->post(route('gemba-walk-finding.resolve', $finding), [])
        ->assertSessionHasNoErrors();

    expect($finding->refresh()->status->value)->toBe('resolved');
});

test('a gemba finding can be deleted', function () {
    $finding = GembaWalkFinding::factory()->create();

    $this->actingAs(User::factory()->create())
        ->delete(route('gemba-walk-finding.destroy', $finding))
        ->assertSessionHasNoErrors();

    expect(GembaWalkFinding::find($finding->id))->toBeNull();
});
