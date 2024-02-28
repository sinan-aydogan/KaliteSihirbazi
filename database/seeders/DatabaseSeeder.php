<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Hr\Employee;
use Database\Seeders\Dm\DeviceTypeSeeder;
use Database\Seeders\Purchase\SupplierTypeSeeder;
use Database\Seeders\RoleManagement\PermissionSeeder;
use Database\Seeders\RoleManagement\RoleSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            BusinessBranchSeeder::class,
            DepartmentSeeder::class,
            EmployeeTypeSeeder::class,
            JobDescriptionSeeder::class,
            RoleSeeder::class,
            PermissionSeeder::class,
            AdminSeeder::class,
            UserSeeder::class,
            DeviceTypeSeeder::class,
            SupplierTypeSeeder::class
        ]);

        Employee::factory(20)->create();

        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
