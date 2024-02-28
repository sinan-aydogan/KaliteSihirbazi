<?php

namespace Database\Seeders\RoleManagement;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*Super Admin*/
        $superAdmin = new Role([
            'name' => 'Super Admin',
            'guard_name' => 'web',
        ]);
        $superAdmin->save();

        /*Admin*/
        $admin = new Role([
            'name' => 'Admin',
            'guard_name' => 'web',
        ]);
        $admin->save();

        /*Human Resources*/
        $hr = new Role([
            'name' => 'Human Resources',
            'guard_name' => 'web',
        ]);
        $hr->save();

        /*Purchase*/
        $hr = new Role([
            'name' => 'Purchase',
            'guard_name' => 'web',
        ]);
        $hr->save();
    }
}
