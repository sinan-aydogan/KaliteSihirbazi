<?php

use App\Models\User;

test('authenticated user can update the active theme', function () {
    $this->actingAs($user = User::factory()->create(['theme' => 'auto']))
        ->post(route('user-theme.update'), ['activeTheme' => 'light'])
        ->assertRedirect();

    expect($user->fresh()->theme)->toBe('light');
});

test('active theme only accepts supported values', function () {
    $this->actingAs($user = User::factory()->create(['theme' => 'auto']))
        ->post(route('user-theme.update'), ['activeTheme' => 'unsupported'])
        ->assertSessionHasErrors('activeTheme', errorBag: 'activeTheme');

    expect($user->fresh()->theme)->toBe('auto');
});

test('authenticated user can update the active language', function () {
    $this->actingAs($user = User::factory()->create(['language' => 'tr']))
        ->post(route('user-language.update'), ['activeLanguage' => 'en'])
        ->assertRedirect();

    expect($user->fresh()->language)->toBe('en');
});
