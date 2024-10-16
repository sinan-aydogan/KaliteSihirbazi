<?php

namespace Database\Seeders\BusinessManagement\Vehicle;

use App\Models\BusinessManagement\Vehicle\VehicleType;
use Illuminate\Database\Seeder;

class VehicleTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $vehicleTypes = [
            'Minibüs',
            'Kamyonet',
            'Araba',
        ];

        foreach ($vehicleTypes as $vehicleType) {
            VehicleType::create([
                'name' => $vehicleType,
            ]);
        }
    }
}
