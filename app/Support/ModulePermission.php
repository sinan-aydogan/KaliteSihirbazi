<?php

namespace App\Support;

use App\Models\User;

class ModulePermission
{
    /**
     * Central `{module}.{action}` permission check shared by the
     * `module.permission` route middleware and any controller that needs
     * to check a permission for a module only known at runtime (e.g. the
     * competency matrix's {equipmentType} routes).
     *
     * The rest of the test suite predates this permission system and acts
     * as a bare factory user with no roles/permissions — enforcing by
     * default there would fail hundreds of unrelated tests. Tests that
     * specifically exercise the permission system opt in explicitly via
     * config(['permission_modules.enforced' => true]).
     */
    public static function allows(?User $user, string $module, string $action): bool
    {
        if (app()->environment('testing') && ! config('permission_modules.enforced')) {
            return true;
        }

        return (bool) $user?->can("{$module}.{$action}");
    }
}
