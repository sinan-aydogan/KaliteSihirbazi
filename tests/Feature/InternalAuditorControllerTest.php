<?php

use App\Models\Department;
use App\Models\InternalAuditor;
use App\Models\User;

test('an authenticated user can list internal auditors', function () {
    $user = User::factory()->create();
    $other = User::factory()->create();
    InternalAuditor::create(['user_id' => $other->id]);

    $this->actingAs($user)
        ->get(route('internal-auditor.index'))
        ->assertOk();
});

test('a user can add an internal auditor and assign departments', function () {
    $candidate = User::factory()->create();
    $department = Department::create(['code' => 'QA', 'name' => 'Kalite', 'type' => 'main']);

    $this->actingAs(User::factory()->create())
        ->post(route('internal-auditor.store'), [
            'user_id' => $candidate->id,
            'is_active' => true,
            'department_ids' => [$department->id],
        ])
        ->assertSessionHasNoErrors();

    $internalAuditor = InternalAuditor::first();

    expect($internalAuditor->user_id)->toBe($candidate->id)
        ->and($internalAuditor->departments)->toHaveCount(1);
});

test('the same user cannot be added as an internal auditor twice', function () {
    $candidate = User::factory()->create();
    InternalAuditor::create(['user_id' => $candidate->id]);

    $this->actingAs(User::factory()->create())
        ->post(route('internal-auditor.store'), ['user_id' => $candidate->id])
        ->assertSessionHasErrors(['user_id']);
});

test('an internal auditor can be removed', function () {
    $user = User::factory()->create();
    $candidate = User::factory()->create();
    $internalAuditor = InternalAuditor::create(['user_id' => $candidate->id]);

    $this->actingAs($user)->delete(route('internal-auditor.destroy', $internalAuditor));

    expect(InternalAuditor::find($internalAuditor->id))->toBeNull();
});
