<?php

namespace Database\Seeders\RoleManagement;

use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       include('./database/seeders/RoleManagement/Permissions/DepartmentPermissions.php');
    }
}
