<?php

use App\Enums\CapaActionStatus;
use App\Enums\CapaStatus;
use App\Models\Capa;
use App\Models\User;

function makeCapa(User $author, User $responsible): Capa
{
    return Capa::create([
        'title' => 'Yanlış etiketleme',
        'type' => 'corrective',
        'description' => 'Sevkiyatta yanlış ürün etiketi kullanıldı.',
        'opened_by_id' => $author->id,
        'responsible_id' => $responsible->id,
        'due_date' => now()->addWeek(),
    ]);
}

test('adding the first action moves an open capa into the action_plan state', function () {
    $author = User::factory()->create();
    $capa = makeCapa($author, $author);

    $this->actingAs($author)
        ->post(route('capa-action.store', $capa), [
            'description' => 'Etiket şablonu güncellenecek',
            'responsible_id' => $author->id,
            'due_date' => now()->addDays(3)->toDateString(),
        ])
        ->assertSessionHasNoErrors();

    expect($capa->fresh()->status)->toBe(CapaStatus::ActionPlan)
        ->and($capa->fresh()->actions)->toHaveCount(1);
});

test('starting the first action moves the capa into in_progress', function () {
    $author = User::factory()->create();
    $capa = makeCapa($author, $author);
    $action = $capa->actions()->create([
        'description' => 'Etiket şablonu güncellenecek',
        'responsible_id' => $author->id,
        'due_date' => now()->addDays(3),
        'status' => 'pending',
    ]);
    $capa->update(['status' => CapaStatus::ActionPlan]);

    $this->actingAs($author)->post(route('capa-action.start', $action));

    expect($action->fresh()->status)->toBe(CapaActionStatus::InProgress)
        ->and($capa->fresh()->status)->toBe(CapaStatus::InProgress);
});

test('a capa cannot be submitted for verification until every action is done', function () {
    $author = User::factory()->create();
    $capa = makeCapa($author, $author);
    $capa->update(['status' => CapaStatus::InProgress]);
    $capa->actions()->create([
        'description' => 'Etiket şablonu güncellenecek',
        'responsible_id' => $author->id,
        'due_date' => now()->addDays(3),
        'status' => 'in_progress',
    ]);

    $this->actingAs($author)->post(route('capa.submit-for-verification', $capa));

    expect($capa->fresh()->status)->toBe(CapaStatus::InProgress);
});

test('a capa moves to pending_verification once all actions are done', function () {
    $author = User::factory()->create();
    $capa = makeCapa($author, $author);
    $capa->update(['status' => CapaStatus::InProgress]);
    $capa->actions()->create([
        'description' => 'Etiket şablonu güncellenecek',
        'responsible_id' => $author->id,
        'due_date' => now()->addDays(3),
        'status' => 'done',
        'completed_at' => now(),
    ]);

    $this->actingAs($author)->post(route('capa.submit-for-verification', $capa));

    expect($capa->fresh()->status)->toBe(CapaStatus::PendingVerification);
});

test('verifying as effective closes the capa effectively', function () {
    $author = User::factory()->create();
    $capa = makeCapa($author, $author);
    $capa->update(['status' => CapaStatus::PendingVerification]);

    $this->actingAs($author)
        ->post(route('capa.verify', $capa), ['is_effective' => true, 'notes' => 'Etkinlik doğrulandı'])
        ->assertSessionHasNoErrors();

    expect($capa->fresh()->status)->toBe(CapaStatus::ClosedEffective)
        ->and($capa->fresh()->closed_at)->not->toBeNull()
        ->and($capa->fresh()->verifications()->count())->toBe(1);
});

test('verifying as ineffective closes the capa ineffectively and it can be reopened', function () {
    $author = User::factory()->create();
    $capa = makeCapa($author, $author);
    $capa->update(['status' => CapaStatus::PendingVerification]);

    $this->actingAs($author)
        ->post(route('capa.verify', $capa), ['is_effective' => false, 'notes' => 'Tekrarlandı']);

    expect($capa->fresh()->status)->toBe(CapaStatus::ClosedIneffective);

    $this->actingAs($author)->post(route('capa.reopen', $capa));

    expect($capa->fresh()->status)->toBe(CapaStatus::InProgress)
        ->and($capa->fresh()->closed_at)->toBeNull();
});
