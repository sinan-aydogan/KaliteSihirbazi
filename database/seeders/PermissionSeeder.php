<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Seeds a fixed {module}.{action} permission per module (see
     * config/permission_modules.php) and grants all of them to the
     * pre-existing "Sistem Yöneticisi" bootstrap role (belt-and-suspenders
     * alongside the Gate::before bypass in AuthServiceProvider — this also
     * makes the sidebar/role-matrix show it as having full access).
     */
    public function run(): void
    {
        $actions = ['view', 'create', 'update', 'delete'];

        foreach (array_keys(config('permission_modules')) as $module) {
            foreach ($actions as $action) {
                Permission::findOrCreate("{$module}.{$action}");
            }
        }

        $sistemYoneticisi = Role::findOrCreate('Sistem Yöneticisi');
        $sistemYoneticisi->syncPermissions(Permission::all());
    }
}
