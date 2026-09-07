<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Global, cross-module roles. These are the coarse layer of the
     * authorization system — reused beyond Document (DÖF/CAPA, İç Denetim,
     * Risk, ...) rather than re-invented per module.
     *
     * @return void
     */
    public function run()
    {
        foreach (['Sistem Yöneticisi', 'Kalite Yöneticisi'] as $role) {
            Role::findOrCreate($role);
        }
    }
}
