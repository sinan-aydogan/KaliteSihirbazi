<?php

use App\Models\Area;
use App\Models\ContinuousImprovement\FiveSAudit;
use App\Models\ContinuousImprovement\GembaWalk;
use App\Models\User;

test('a user can create an area', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('area.store'), ['name' => 'Montaj Hattı 1'])
        ->assertSessionHasNoErrors();

    expect(Area::where('name', 'Montaj Hattı 1')->exists())->toBeTrue();
});

test('an area with a 5S audit cannot be deleted', function () {
    $area = Area::factory()->create();
    FiveSAudit::factory()->create(['area_id' => $area->id]);

    $this->actingAs(User::factory()->create())
        ->delete(route('area.destroy', $area));

    expect(Area::find($area->id))->not->toBeNull();
});

test('an area with a gemba walk cannot be deleted', function () {
    $area = Area::factory()->create();
    GembaWalk::factory()->create(['area_id' => $area->id]);

    $this->actingAs(User::factory()->create())
        ->delete(route('area.destroy', $area));

    expect(Area::find($area->id))->not->toBeNull();
});

test('an unused area can be deleted', function () {
    $area = Area::factory()->create();

    $this->actingAs(User::factory()->create())
        ->delete(route('area.destroy', $area))
        ->assertSessionHasNoErrors();

    expect(Area::find($area->id))->toBeNull();
});
