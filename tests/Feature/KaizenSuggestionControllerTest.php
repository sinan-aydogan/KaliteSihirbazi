<?php

use App\Models\ContinuousImprovement\KaizenCategory;
use App\Models\ContinuousImprovement\KaizenSuggestion;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

function kaizenCategoryId(string $key = 'efficiency'): int
{
    return KaizenCategory::where('key', $key)->first()->id;
}

test('kaizen suggestions index renders with table data and kanban columns', function () {
    KaizenSuggestion::factory()->create(['kaizen_category_id' => kaizenCategoryId()]);

    $this->actingAs(User::factory()->create())
        ->get(route('kaizen-suggestion.index'))
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/ContinuousImprovement/Kaizen/IndexPage')
            ->has('tableData')
            ->has('kanbanColumns')
            ->has('kaizenCategories')
        );
});

test('a user can create a kaizen suggestion', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('kaizen-suggestion.store'), [
            'title' => 'Vardiya devir formunu dijitalleştir',
            'current_situation' => 'Kağıt form kullanılıyor, kayıp oluyor',
            'proposed_solution' => 'Tablet üzerinden dijital form',
            'kaizen_category_id' => kaizenCategoryId(),
        ])
        ->assertSessionHasNoErrors();

    $suggestion = KaizenSuggestion::first();

    expect($suggestion)->not->toBeNull()
        ->and($suggestion->status->value)->toBe('submitted')
        ->and($suggestion->proposed_by_id)->toBe($user->id)
        ->and($suggestion->code)->toStartWith('KZN-');
});

test('a full kaizen suggestion workflow can be completed', function () {
    $suggestion = KaizenSuggestion::factory()->create(['kaizen_category_id' => kaizenCategoryId(), 'status' => 'submitted']);
    $user = User::factory()->create();

    $this->actingAs($user)->post(route('kaizen-suggestion.mark-under-review', $suggestion))->assertSessionHasNoErrors();
    expect($suggestion->refresh()->status->value)->toBe('under_review');

    $this->actingAs($user)->post(route('kaizen-suggestion.approve', $suggestion), [
        'evaluation_note' => 'Uygulanabilir',
    ])->assertSessionHasNoErrors();
    expect($suggestion->refresh()->status->value)->toBe('approved')
        ->and($suggestion->evaluated_by_id)->toBe($user->id);

    $this->actingAs($user)->post(route('kaizen-suggestion.start', $suggestion), [
        'plan_note' => 'Tablet tedarik edilecek',
    ])->assertSessionHasNoErrors();
    expect($suggestion->refresh()->status->value)->toBe('in_progress')
        ->and($suggestion->plan_note)->toBe('Tablet tedarik edilecek');

    $this->actingAs($user)->post(route('kaizen-suggestion.implement', $suggestion), [
        'realized_annual_saving' => 1500,
        'act_note' => 'Tüm vardiyalara yayıldı',
    ])->assertSessionHasNoErrors();
    expect($suggestion->refresh()->status->value)->toBe('implemented')
        ->and((float) $suggestion->realized_annual_saving)->toBe(1500.0)
        ->and($suggestion->completed_at)->not->toBeNull();

    $this->actingAs($user)->post(route('kaizen-suggestion.close', $suggestion))->assertSessionHasNoErrors();
    expect($suggestion->refresh()->status->value)->toBe('closed');
});

test('rejecting a suggestion requires a rejection reason', function () {
    $suggestion = KaizenSuggestion::factory()->create(['kaizen_category_id' => kaizenCategoryId(), 'status' => 'submitted']);

    $this->actingAs(User::factory()->create())
        ->post(route('kaizen-suggestion.reject', $suggestion), [])
        ->assertSessionHasErrors('rejection_reason');
});

test('a rejected suggestion cannot be approved', function () {
    $suggestion = KaizenSuggestion::factory()->create(['kaizen_category_id' => kaizenCategoryId(), 'status' => 'rejected']);

    $this->actingAs(User::factory()->create())
        ->post(route('kaizen-suggestion.approve', $suggestion), []);

    expect($suggestion->refresh()->status->value)->toBe('rejected');
});

test('a suggestion can be rejected with a reason', function () {
    $suggestion = KaizenSuggestion::factory()->create(['kaizen_category_id' => kaizenCategoryId(), 'status' => 'submitted']);

    $this->actingAs(User::factory()->create())
        ->post(route('kaizen-suggestion.reject', $suggestion), [
            'rejection_reason' => 'Bütçe uygun değil',
        ])
        ->assertSessionHasNoErrors();

    expect($suggestion->refresh()->status->value)->toBe('rejected')
        ->and($suggestion->rejection_reason)->toBe('Bütçe uygun değil');
});

/* ---------- Kaizen Category (dynamic type) ---------- */

test('a user can create a kaizen category', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('kaizen-category.store'), ['name' => 'Enerji Tasarrufu'])
        ->assertSessionHasNoErrors();

    $category = KaizenCategory::where('name', 'Enerji Tasarrufu')->first();

    expect($category)->not->toBeNull()
        ->and($category->key)->toBe('enerji_tasarrufu')
        ->and($category->is_protected)->toBeFalse();
});

test('the protected other category cannot be deleted', function () {
    $category = KaizenCategory::where('key', 'other')->first();

    $this->actingAs(User::factory()->create())
        ->delete(route('kaizen-category.destroy', $category));

    expect(KaizenCategory::find($category->id))->not->toBeNull();
});

test('a category with suggestions cannot be deleted', function () {
    $category = KaizenCategory::factory()->create();
    KaizenSuggestion::factory()->create(['kaizen_category_id' => $category->id]);

    $this->actingAs(User::factory()->create())
        ->delete(route('kaizen-category.destroy', $category));

    expect(KaizenCategory::find($category->id))->not->toBeNull();
});

test('an unused category can be deleted', function () {
    $category = KaizenCategory::factory()->create();

    $this->actingAs(User::factory()->create())
        ->delete(route('kaizen-category.destroy', $category))
        ->assertSessionHasNoErrors();

    expect(KaizenCategory::find($category->id))->toBeNull();
});
