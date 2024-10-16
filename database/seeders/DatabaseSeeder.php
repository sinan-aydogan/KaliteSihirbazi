<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Database\Seeders\BusinessManagement\Vehicle\VehicleStatusSeeder;
use Database\Seeders\BusinessManagement\Vehicle\VehicleTypeSeeder;
use Database\Seeders\Document\DocumentTypeSeeder;
use Database\Seeders\HumanResources\JobDescription\JobDescriptionSeeder;
use Database\Seeders\MeasurementDevice\Calibration\CalibrationFirmSeeder;
use Database\Seeders\MeasurementDevice\MeasurementDeviceSeeder;
use Database\Seeders\MeasurementDevice\MeasurementDeviceTypeSeeder;
use Database\Seeders\Warehouse\WarehouseSeeder;
use Database\Seeders\Warehouse\WarehouseTypeSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(100)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            AdminSeeder::class,
            ModuleSeeder::class,
            DepartmentSeeder::class,
            WarehouseTypeSeeder::class,
            WarehouseSeeder::class,
            SupplierTypeSeeder::class,
            SupplierTagSeeder::class,
            JobDescriptionSeeder::class,
            MeasurementDeviceTypeSeeder::class,
            MeasurementDeviceSeeder::class,
            CalibrationFirmSeeder::class,
            DocumentTypeSeeder::class,
            SettingSeeder::class,
            VehicleStatusSeeder::class,
            VehicleTypeSeeder::class,
        ]);
    }
}
