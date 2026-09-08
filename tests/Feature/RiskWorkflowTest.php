<?php

use App\Models\Department;
use App\Models\Risk;
use App\Models\Setting;
use App\Models\User;

function makeWorkflowRisk(User $user, int $probability = 4, int $impact = 5): Risk
{
    $department = Department::firstOrCreate(['code' => 'URT'], ['name' => 'Üretim', 'type' => 'main']);

    return app(\App\Services\Risk\RiskWorkflowService::class)->create([
        'title' => 'Enjeksiyon presi elektrik kesintisi riski',
        'department_id' => $department->id,
        'identified_date' => now()->toDateString(),
        'initial_probability' => $probability,
        'initial_impact' => $impact,
        'treatment_strategy' => 'mitigate',
    ], $user);
}

test('adding the first control moves an identified risk into treatment planned', function () {
    $user = User::factory()->create();
    $risk = makeWorkflowRisk($user);

    $this->actingAs($user)
        ->post(route('risk-control.store', $risk), ['description' => 'UPS kurulumu'])
        ->assertSessionHasNoErrors();

    expect($risk->fresh()->status->value)->toBe('treatment_planned')
        ->and($risk->controls)->toHaveCount(1);
});

test('moving a control to in progress moves a treatment-planned risk into treatment in progress', function () {
    $user = User::factory()->create();
    $risk = makeWorkflowRisk($user);
    $control = $risk->controls()->create(['description' => 'UPS kurulumu', 'status' => 'planned']);
    $risk->update(['status' => 'treatment_planned']);

    $this->actingAs($user)
        ->put(route('risk-control.update', $control), [
            'description' => 'UPS kurulumu',
            'status' => 'in_progress',
            'effectiveness_rating' => 'not_evaluated',
        ])
        ->assertSessionHasNoErrors();

    expect($risk->fresh()->status->value)->toBe('treatment_in_progress');
});

test('completing a control stamps completed_at', function () {
    $user = User::factory()->create();
    $risk = makeWorkflowRisk($user);
    $control = $risk->controls()->create(['description' => 'UPS kurulumu', 'status' => 'in_progress']);

    $this->actingAs($user)
        ->put(route('risk-control.update', $control), [
            'description' => 'UPS kurulumu',
            'status' => 'completed',
            'effectiveness_rating' => 'effective',
        ])
        ->assertSessionHasNoErrors();

    expect($control->fresh()->completed_at)->not->toBeNull();
});

test('a review concluding the risk is accepted as-is settles the risk into monitoring', function () {
    $user = User::factory()->create();
    $risk = makeWorkflowRisk($user);

    $this->actingAs($user)
        ->post(route('risk-review.store', $risk), [
            'probability' => 2,
            'impact' => 5,
            'controls_adequate' => true,
            'conclusion' => 'risk_accepted_as_is',
        ])
        ->assertSessionHasNoErrors();

    expect($risk->fresh()->status->value)->toBe('monitoring')
        ->and($risk->fresh()->residual_score)->toBe(10)
        ->and($risk->fresh()->residual_level->value)->toBe('medium');
});

test('a review concluding the risk should be reclassified sends it back to analysis', function () {
    $user = User::factory()->create();
    $risk = makeWorkflowRisk($user);

    $this->actingAs($user)
        ->post(route('risk-review.store', $risk), [
            'probability' => 3,
            'impact' => 3,
            'controls_adequate' => true,
            'conclusion' => 'risk_reclassified',
        ])
        ->assertSessionHasNoErrors();

    expect($risk->fresh()->status->value)->toBe('under_analysis');
});

test('raising a problem with source_type risk_realization against a risk opens a pending review and flips the risk to review required', function () {
    $user = User::factory()->create();
    $risk = makeWorkflowRisk($user);

    $this->actingAs($user)
        ->post(route('problem.store'), [
            'risk_id' => $risk->id,
            'title' => 'UPS devreye girmedi, hat durdu',
            'description' => 'Elektrik kesintisinde UPS beklenen sürede devreye girmedi.',
            'source_type' => 'risk_realization',
            'severity' => 'high',
            'detected_date' => now()->toDateString(),
        ])
        ->assertSessionHasNoErrors();

    expect($risk->fresh()->status->value)->toBe('review_required')
        ->and($risk->fresh()->reviews)->toHaveCount(1)
        ->and($risk->fresh()->reviews->first()->trigger->value)->toBe('risk_realized')
        ->and($risk->fresh()->reviews->first()->isPending())->toBeTrue();
});

test('completing the pending realization review with inadequate controls sends the risk back into treatment', function () {
    $user = User::factory()->create();
    $risk = makeWorkflowRisk($user);
    $problem = $risk->realizedProblems()->create([
        'title' => 'UPS devreye girmedi',
        'description' => 'Açıklama',
        'source_type' => 'risk_realization',
        'severity' => 'high',
        'status' => 'open',
        'detected_by_id' => $user->id,
        'detected_date' => now(),
    ]);
    $review = app(\App\Services\Risk\RiskWorkflowService::class)->registerRealization($risk, $problem);

    $this->actingAs($user)
        ->put(route('risk-review.update', $review), [
            'probability' => 4,
            'impact' => 5,
            'controls_adequate' => false,
            'conclusion' => 'controls_reinforced',
            'notes' => 'UPS testleri yetersizdi.',
        ])
        ->assertSessionHasNoErrors();

    expect($risk->fresh()->status->value)->toBe('treatment_in_progress')
        ->and($risk->fresh()->residual_score)->toBe(20);
});

test('the realization review does not open when the module setting is off', function () {
    Setting::updateOrCreate(['code' => 'risk_review_required_on_realization'], ['module' => 'risk', 'type' => 'json', 'value' => json_encode(false)]);

    $user = User::factory()->create();
    $risk = makeWorkflowRisk($user);

    $this->actingAs($user)
        ->post(route('problem.store'), [
            'risk_id' => $risk->id,
            'title' => 'Küçük bir sapma',
            'description' => 'Açıklama',
            'source_type' => 'risk_realization',
            'severity' => 'low',
            'detected_date' => now()->toDateString(),
        ])
        ->assertSessionHasNoErrors();

    expect($risk->fresh()->status->value)->toBe('identified')
        ->and($risk->fresh()->reviews)->toHaveCount(0);
});

test('a risk cannot be closed while a review is pending', function () {
    $user = User::factory()->create();
    $risk = makeWorkflowRisk($user);
    $risk->update(['status' => 'review_required']);

    $this->actingAs($user)->post(route('risk.close', $risk));

    expect($risk->fresh()->status->value)->toBe('review_required');
});

test('a risk without a pending review can be closed', function () {
    $user = User::factory()->create();
    $risk = makeWorkflowRisk($user);
    $risk->update(['status' => 'monitoring']);

    $this->actingAs($user)->post(route('risk.close', $risk))->assertSessionHasNoErrors();

    expect($risk->fresh()->status->value)->toBe('closed')
        ->and($risk->fresh()->closed_at)->not->toBeNull();
});
