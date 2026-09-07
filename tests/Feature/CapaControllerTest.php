<?php

use App\Models\Capa;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('an authenticated user can list capas', function () {
    $author = User::factory()->create();
    $responsible = User::factory()->create();

    Capa::create([
        'title' => 'Yanlış etiketleme',
        'type' => 'corrective',
        'description' => 'Sevkiyatta yanlış ürün etiketi kullanıldı.',
        'opened_by_id' => $author->id,
        'responsible_id' => $responsible->id,
        'due_date' => now()->addWeek(),
    ]);

    $this->actingAs($author)
        ->get(route('capa.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/Capa/IndexPage')
            ->where('tableData.data.0.title', 'Yanlış etiketleme')
        );
});

test('an authenticated user can view a capa detail page', function () {
    $author = User::factory()->create();
    $capa = Capa::create([
        'title' => 'Yanlış etiketleme',
        'type' => 'corrective',
        'description' => 'Sevkiyatta yanlış ürün etiketi kullanıldı.',
        'opened_by_id' => $author->id,
        'responsible_id' => $author->id,
        'due_date' => now()->addWeek(),
    ]);
    $capa->actions()->create([
        'description' => 'Etiket şablonu güncellenecek',
        'responsible_id' => $author->id,
        'due_date' => now()->addDays(3),
        'status' => 'pending',
    ]);

    $this->actingAs($author)
        ->get(route('capa.show', $capa))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Modules/Capa/ShowPage')
            ->where('capa.code', $capa->code)
            ->where('capa.actions.0.description', 'Etiket şablonu güncellenecek')
        );
});

test('creating a capa auto-generates a sequential code and opens it', function () {
    $author = User::factory()->create();
    $responsible = User::factory()->create();

    $this->actingAs($author)
        ->post(route('capa.store'), [
            'title' => 'Yanlış etiketleme',
            'type' => 'corrective',
            'description' => 'Sevkiyatta yanlış ürün etiketi kullanıldı.',
            'responsible_id' => $responsible->id,
            'due_date' => now()->addWeek()->toDateString(),
        ])
        ->assertSessionHasNoErrors();

    $capa = Capa::first();

    expect($capa->code)->toBe(sprintf('DOF-%d-001', now()->year))
        ->and($capa->status)->toBe(App\Enums\CapaStatus::Open)
        ->and($capa->opened_by_id)->toBe($author->id);
});

test('creating a capa requires a title, description, responsible and due date', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('capa.store'), [])
        ->assertSessionHasErrors(['title', 'type', 'description', 'responsible_id', 'due_date']);
});

test('a user can update a capa', function () {
    $author = User::factory()->create();
    $responsible = User::factory()->create();
    $capa = Capa::create([
        'title' => 'Yanlış etiketleme',
        'type' => 'corrective',
        'description' => 'Sevkiyatta yanlış ürün etiketi kullanıldı.',
        'opened_by_id' => $author->id,
        'responsible_id' => $responsible->id,
        'due_date' => now()->addWeek(),
    ]);

    $this->actingAs($author)
        ->put(route('capa.update', $capa), [
            'title' => 'Yanlış etiketleme (güncellendi)',
            'type' => 'corrective',
            'description' => $capa->description,
            'responsible_id' => $responsible->id,
            'due_date' => now()->addWeeks(2)->toDateString(),
        ])
        ->assertSessionHasNoErrors();

    expect($capa->fresh()->title)->toBe('Yanlış etiketleme (güncellendi)');
});

test('a capa without actions can be deleted', function () {
    $author = User::factory()->create();
    $capa = Capa::create([
        'title' => 'Yanlış etiketleme',
        'type' => 'corrective',
        'description' => 'Açıklama',
        'opened_by_id' => $author->id,
        'responsible_id' => $author->id,
        'due_date' => now()->addWeek(),
    ]);

    $this->actingAs($author)->delete(route('capa.destroy', $capa));

    expect(Capa::find($capa->id))->toBeNull();
});

test('a capa with actions cannot be deleted', function () {
    $author = User::factory()->create();
    $capa = Capa::create([
        'title' => 'Yanlış etiketleme',
        'type' => 'corrective',
        'description' => 'Açıklama',
        'opened_by_id' => $author->id,
        'responsible_id' => $author->id,
        'due_date' => now()->addWeek(),
    ]);
    $capa->actions()->create([
        'description' => 'Etiket şablonu güncellenecek',
        'responsible_id' => $author->id,
        'due_date' => now()->addDays(3),
        'status' => 'pending',
    ]);

    $this->actingAs($author)->delete(route('capa.destroy', $capa));

    expect(Capa::find($capa->id))->not->toBeNull();
});
