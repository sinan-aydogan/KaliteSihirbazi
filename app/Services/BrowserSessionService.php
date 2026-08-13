<?php

namespace App\Services;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\DB;

class BrowserSessionService
{
    /**
     * @return list<array{
     *     agent: array{is_desktop: bool, platform: string|null, browser: string|null},
     *     ip_address: string|null,
     *     is_current_device: bool,
     *     last_active: string
     * }>
     */
    public function forUser(User $user, string $currentSessionId): array
    {
        $sessions = $this->query()
            ->where('user_id', $user->getKey())
            ->orderByDesc('last_activity')
            ->get()
            ->map(function (object $session) use ($currentSessionId): array {
                $userAgent = data_get($session, 'user_agent');
                $ipAddress = data_get($session, 'ip_address');
                $sessionId = data_get($session, 'id');
                $lastActivity = data_get($session, 'last_activity');

                return [
                    'agent' => $this->agent(is_string($userAgent) ? $userAgent : null),
                    'ip_address' => is_string($ipAddress) ? $ipAddress : null,
                    'is_current_device' => is_string($sessionId) && hash_equals($sessionId, $currentSessionId),
                    'last_active' => Carbon::createFromTimestamp(
                        is_numeric($lastActivity) ? (int) $lastActivity : 0,
                    )->diffForHumans(),
                ];
            })
            ->all();

        return array_values($sessions);
    }

    public function deleteOtherSessions(User $user, string $currentSessionId): int
    {
        return $this->query()
            ->where('user_id', $user->getKey())
            ->where('id', '!=', $currentSessionId)
            ->delete();
    }

    private function query(): Builder
    {
        return DB::connection(config('session.connection'))
            ->table(config('session.table', 'sessions'));
    }

    /**
     * @return array{is_desktop: bool, platform: string|null, browser: string|null}
     */
    private function agent(?string $userAgent): array
    {
        $userAgent ??= '';

        return [
            'is_desktop' => ! preg_match('/Mobile|Android|iPhone|iPad|iPod/i', $userAgent),
            'platform' => match (true) {
                str_contains($userAgent, 'Windows') => 'Windows',
                str_contains($userAgent, 'Android') => 'Android',
                str_contains($userAgent, 'iPhone'), str_contains($userAgent, 'iPad') => 'iOS',
                str_contains($userAgent, 'Macintosh'), str_contains($userAgent, 'Mac OS') => 'macOS',
                str_contains($userAgent, 'Linux') => 'Linux',
                default => null,
            },
            'browser' => match (true) {
                preg_match('/Edg\//i', $userAgent) === 1 => 'Edge',
                preg_match('/OPR\//i', $userAgent) === 1 => 'Opera',
                preg_match('/Chrome\//i', $userAgent) === 1 => 'Chrome',
                preg_match('/Firefox\//i', $userAgent) === 1 => 'Firefox',
                preg_match('/Safari\//i', $userAgent) === 1 => 'Safari',
                default => null,
            },
        ];
    }
}
