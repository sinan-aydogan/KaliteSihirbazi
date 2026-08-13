<?php

use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('unimplemented module menu routes render a coming soon page without exposing fake CRUD', function (string $module) {
    $this->actingAs(User::factory()->create())
        ->get(route($module.'.index'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('ComingSoon', false));

    expect(app('router')->has($module.'.store'))->toBeFalse()
        ->and(app('router')->has($module.'.deleted'))->toBeFalse()
        ->and(app('router')->has($module.'.permanent-delete'))->toBeFalse();
})->with([
    'audit-firm',
    'problem',
    'capa-action',
    'product-tree',
    'audit',
    'improvement-work',
    'device',
    'machine',
    'customer',
    'product',
    'raw-material',
    'consumable-material',
    'certificate',
    'standard',
    'take-time-off',
    'document-revision-request',
    'document-action',
]);
