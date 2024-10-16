<?php

namespace Database\Seeders\BusinessManagement\Vehicle;

use App\Models\BusinessManagement\Vehicle\VehicleStatus;
use Illuminate\Database\Seeder;

class VehicleStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $vehicleStatuses = [
            'Aktif',
            'Kullanım Dışı',
            'Bakımda',
            'Satıldı',
        ];

        foreach ($vehicleStatuses as $vehicleStatus) {
            VehicleStatus::create([
                'name' => $vehicleStatus,
            ]);
        }
    }
}
