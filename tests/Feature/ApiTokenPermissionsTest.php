<?php

use App\Models\User;
use Illuminate\Support\Str;

test('api token permissions can be updated', function () {
    $this->actingAs($user = User::factory()->create());

    $token = $user->tokens()->create([
        'name' => 'Test Token',
        'token' => Str::random(40),
        'abilities' => ['create', 'read'],
    ]);

    $response = $this->put('/user/api-tokens/'.$token->id, [
        'name' => $token->name,
        'permissions' => [
            'delete',
            'missing-permission',
        ],
    ]);

    expect($user->fresh()->tokens->first())
        ->can('delete')->toBeTrue()
        ->can('read')->toBeFalse()
        ->can('missing-permission')->toBeFalse();
});
