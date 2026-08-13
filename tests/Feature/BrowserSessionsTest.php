<?php

use App\Models\User;
use App\Services\BrowserSessionService;
use Illuminate\Support\Facades\DB;
use Inertia\Testing\AssertableInertia as Assert;

function createBrowserSession(User $user, string $id, string $agent, int $lastActivity): void
{
    DB::table('sessions')->insert([
        'id' => $id,
        'user_id' => $user->id,
        'ip_address' => '127.0.0.1',
        'user_agent' => $agent,
        'payload' => '',
        'last_activity' => $lastActivity,
    ]);
}

test('profile lists database sessions with parsed device details', function () {
    $user = User::factory()->create();
    createBrowserSession($user, 'desktop-session', 'Mozilla/5.0 (Windows NT 10.0) Chrome/124.0', now()->timestamp);
    createBrowserSession($user, 'mobile-session', 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0) Version/17.0 Mobile Safari/604.1', now()->subMinute()->timestamp);

    $this->actingAs($user)
        ->get('/user/profile')
        ->assertInertia(fn (Assert $page) => $page
            ->component('Profile/Show', false)
            ->has('sessions', 2)
            ->where('sessions.0.agent.platform', 'Windows')
            ->where('sessions.0.agent.browser', 'Chrome')
            ->where('sessions.0.agent.is_desktop', true)
            ->where('sessions.1.agent.platform', 'iOS')
            ->where('sessions.1.agent.is_desktop', false));
});

test('other browser sessions can be logged out', function () {
    $this->actingAs($user = User::factory()->create());
    createBrowserSession($user, 'current-session', 'Firefox', now()->timestamp);
    createBrowserSession($user, 'other-session', 'Chrome', now()->subMinute()->timestamp);

    app(BrowserSessionService::class)->deleteOtherSessions($user, 'current-session');

    expect(DB::table('sessions')->where('id', 'current-session')->exists())->toBeTrue()
        ->and(DB::table('sessions')->where('id', 'other-session')->exists())->toBeFalse();

    createBrowserSession($user, 'other-session', 'Chrome', now()->subMinute()->timestamp);

    $response = $this->delete('/user/other-browser-sessions', [
        'password' => 'password',
    ]);

    $response->assertSessionHasNoErrors();
    expect(DB::table('sessions')->where('user_id', $user->id)->exists())->toBeFalse();
});
