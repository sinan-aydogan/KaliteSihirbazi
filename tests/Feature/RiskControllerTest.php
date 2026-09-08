<?php

use App\Models\Department;
use App\Models\Risk;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

function makeRiskDepartment(): Department
{
    return Department::firstOrCreate(['code' => 'URT'], ['name' => 'Üretim', 'type' => 'main']);
}

test('an authenticated user can list risks', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('risk.store'), [
            'title' => 'Enjeksiyon presi elektrik kesintisi riski',
            'department_id' => makeRiskDepartment()->id,
            'identified_date' => now()->toDateString(),
            'initial_probability' => 3,
            'initial_impact' => 4,
            'treatment_strategy' => 'mitigate',
        ]);

    $this->actingAs($user)
        ->get(route('risk.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/Risk/IndexPage')
            ->where('tableData.data.0.title', 'Enjeksiyon presi elektrik kesintisi riski')
        );
});

test('creating a risk auto-generates a sequential code and computes the initial score/level', function () {
    $author = User::factory()->create();

    $this->actingAs($author)
        ->post(route('risk.store'), [
            'title' => 'Enjeksiyon presi elektrik kesintisi riski',
            'department_id' => makeRiskDepartment()->id,
            'identified_date' => now()->toDateString(),
            'initial_probability' => 4,
            'initial_impact' => 5,
            'treatment_strategy' => 'mitigate',
        ])
        ->assertSessionHasNoErrors();

    $risk = Risk::first();

    expect($risk->code)->toBe(sprintf('RSK-%d-001', now()->year))
        ->and($risk->initial_score)->toBe(20)
        ->and($risk->initial_level->value)->toBe('critical')
        ->and($risk->status->value)->toBe('identified')
        ->and($risk->identified_by_id)->toBe($author->id);
});

test('accepting a risk requires a justification', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('risk.store'), [
            'title' => 'Tedarikçi kaynaklı gecikme riski',
            'department_id' => makeRiskDepartment()->id,
            'identified_date' => now()->toDateString(),
            'initial_probability' => 2,
            'initial_impact' => 2,
            'treatment_strategy' => 'accept',
        ])
        ->assertSessionHasErrors(['acceptance_justification']);
});

test('a risk with realized problems cannot be deleted', function () {
    $author = User::factory()->create();
    $risk = Risk::create([
        'title' => 'Test riski',
        'department_id' => makeRiskDepartment()->id,
        'identified_by_id' => $author->id,
        'identified_date' => now(),
        'initial_probability' => 3,
        'initial_impact' => 3,
        'initial_score' => 9,
        'initial_level' => 'medium',
        'treatment_strategy' => 'mitigate',
        'status' => 'identified',
    ]);
    $risk->realizedProblems()->create([
        'title' => 'Gerçekleşen sorun',
        'description' => 'Açıklama',
        'problem_source_type_id' => problemSourceTypeId('risk_realization'),
        'severity' => 'medium',
        'status' => 'open',
        'detected_by_id' => $author->id,
        'detected_date' => now(),
    ]);

    $this->actingAs($author)->delete(route('risk.destroy', $risk));

    expect(Risk::find($risk->id))->not->toBeNull();
});
