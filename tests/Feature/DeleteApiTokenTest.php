<?php

use App\Models\User;
use Illuminate\Support\Str;

test('api tokens can be deleted', function () {
    $this->actingAs($user = User::factory()->create());

    $token = $user->tokens()->create([
        'name' => 'Test Token',
        'token' => Str::random(40),
        'abilities' => ['create', 'read'],
    ]);

    $response = $this->delete('/user/api-tokens/'.$token->id);

    expect($user->fresh()->tokens)->toHaveCount(0);
});
