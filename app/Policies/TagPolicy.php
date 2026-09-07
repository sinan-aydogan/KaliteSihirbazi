<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

/**
 * The tag pool (types + tags) and each module's enabled-type selection are
 * global structural settings, not per-record permissions - gated to the two
 * global admin roles, same bar as other cross-module configuration.
 */
class TagPolicy
{
    use HandlesAuthorization;

    public function manage(User $user): bool
    {
        return $user->hasRole(['Sistem Yöneticisi', 'Kalite Yöneticisi']);
    }
}
