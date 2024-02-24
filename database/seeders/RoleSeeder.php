<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
    }
}
