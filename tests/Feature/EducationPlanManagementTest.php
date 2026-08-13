<?php

use App\Models\HumanResources\Education\Education;
use App\Models\HumanResources\Education\EducationPlan;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

beforeEach(function () {
    $this->actingAs(User::factory()->create());
});

test('education plan index renders its inertia page', function () {
    $this->get(route('education-plan.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/HumanResources/EducationPlan/IndexPage', false)
            ->has('tableData.data'));
});

test('education plan validates chronology and unique names', function () {
    $this->post(route('education-plan.store'), [
        'name' => 'Annual Plan',
        'start_date' => '2026-12-31',
        'end_date' => '2026-01-01',
    ])->assertSessionHasErrors('end_date');

    $payload = [
        'name' => 'Annual Plan',
        'start_date' => '2026-01-01',
        'end_date' => '2026-12-31',
    ];
    $this->post(route('education-plan.store'), $payload)->assertSessionHasNoErrors();
    $this->post(route('education-plan.store'), $payload)->assertSessionHasErrors('name');
});

test('education plan update allows its unchanged name', function () {
    $plan = EducationPlan::create([
        'name' => 'Annual Plan',
        'start_date' => '2026-01-01',
        'end_date' => '2026-12-31',
    ]);

    $this->put(route('education-plan.update', $plan), [
        'name' => 'Annual Plan',
        'start_date' => '2026-02-01',
        'end_date' => '2026-11-30',
    ])->assertSessionHasNoErrors();
});

test('a plan containing education cannot be permanently deleted', function () {
    $plan = EducationPlan::create([
        'name' => 'Annual Plan',
        'start_date' => '2026-01-01',
        'end_date' => '2026-12-31',
    ]);
    Education::create([
        'education_plan_id' => $plan->id,
        'name' => 'Safety',
        'planned_date' => '2026-06-01',
        'duration' => 60,
    ]);
    $plan->delete();

    $this->delete(route('education-plan.permanent-delete', $plan))->assertConflict();
    $this->assertSoftDeleted('education_plans', ['id' => $plan->id]);
    $this->assertDatabaseHas('education', ['education_plan_id' => $plan->id]);
});
