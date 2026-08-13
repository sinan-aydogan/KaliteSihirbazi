<?php

use App\Models\User;

test('user accounts can be deleted', function () {
    $this->actingAs($user = User::factory()->create());

    $response = $this->delete('/user', [
        'password' => 'password',
    ]);

    expect($user->fresh())->toBeNull();
});

test('correct password must be provided before account can be deleted', function () {
    $this->actingAs($user = User::factory()->create());

    $response = $this->delete('/user', [
        'password' => 'wrong-password',
    ]);

    expect($user->fresh())->not->toBeNull();
});
