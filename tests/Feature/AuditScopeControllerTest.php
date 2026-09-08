<?php

use App\Models\AuditScope;
use App\Models\User;

test('an authenticated user can list audit scopes', function () {
    $user = User::factory()->create();
    AuditScope::create(['key' => 'product', 'name' => 'Ürün', 'is_protected' => true]);

    $this->actingAs($user)
        ->get(route('audit-scope.index'))
        ->assertOk();
});

test('a user can create a custom audit scope', function () {
    $this->actingAs(User::factory()->create())
        ->post(route('audit-scope.store'), ['name' => 'Lojistik'])
        ->assertSessionHasNoErrors();

    $scope = AuditScope::first();

    expect($scope->name)->toBe('Lojistik')
        ->and($scope->is_protected)->toBeFalse();
});

test('a protected audit scope cannot be deleted', function () {
    $user = User::factory()->create();
    $scope = AuditScope::create(['key' => 'product', 'name' => 'Ürün', 'is_protected' => true]);

    $this->actingAs($user)->delete(route('audit-scope.destroy', $scope));

    expect(AuditScope::find($scope->id))->not->toBeNull();
});
