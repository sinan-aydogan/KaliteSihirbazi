<?php

use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

test('profile information can be updated', function () {
    $this->actingAs($user = User::factory()->create());

    $response = $this->put('/user/profile-information', [
        'name' => 'Test Name',
        'email' => 'test@example.com',
    ]);

    expect($user->fresh())
        ->name->toEqual('Test Name')
        ->email->toEqual('test@example.com');
});

test('profile avatar is stored as a single webp conversion', function () {
    Storage::fake('public');
    $this->actingAs($user = User::factory()->create());

    $this->post('/user/profile-information', [
        '_method' => 'PUT',
        'name' => $user->name,
        'email' => $user->email,
        'photo' => UploadedFile::fake()->image('avatar.png', 900, 700),
    ])->assertSessionHasNoErrors();

    $avatar = $user->fresh()->getFirstMedia(User::AVATAR_COLLECTION);

    expect($avatar)->not->toBeNull()
        ->and($avatar->hasGeneratedConversion('avatar'))->toBeTrue()
        ->and(pathinfo($avatar->getPath('avatar'), PATHINFO_EXTENSION))->toBe('webp');

    $this->post('/user/profile-information', [
        '_method' => 'PUT',
        'name' => $user->name,
        'email' => $user->email,
        'photo' => UploadedFile::fake()->image('replacement.jpg', 600, 600),
    ])->assertSessionHasNoErrors();

    expect($user->fresh()->getMedia(User::AVATAR_COLLECTION))->toHaveCount(1);
});

test('profile avatar can be removed', function () {
    Storage::fake('public');
    $this->actingAs($user = User::factory()->create());
    $user->addMedia(UploadedFile::fake()->image('avatar.jpg'))
        ->toMediaCollection(User::AVATAR_COLLECTION);

    $this->delete(route('current-user-photo.destroy'))->assertRedirect();

    expect($user->fresh()->getFirstMedia(User::AVATAR_COLLECTION))->toBeNull();
});
