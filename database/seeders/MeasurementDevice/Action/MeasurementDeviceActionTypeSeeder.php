<?php

namespace Database\Seeders\MeasurementDevice\Action;

use App\Models\MeasurementDevice\Action\MeasurementDeviceActionType;
use Illuminate\Database\Seeder;

class MeasurementDeviceActionTypeSeeder extends Seeder
{
    public function run(): void
    {
        $types = [
            ['key' => 'sent_to_maintenance', 'name' => 'Bakıma Gönderildi', 'sort_order' => 1],
            ['key' => 'returned_from_maintenance', 'name' => 'Bakımdan Geri Alındı', 'sort_order' => 2],
            ['key' => 'sent_to_calibration', 'name' => 'Kalibrasyona Gönderildi', 'sort_order' => 3],
            ['key' => 'returned_from_calibration', 'name' => 'Kalibrasyondan Geri Alındı', 'sort_order' => 4],
            ['key' => 'malfunctioned', 'name' => 'Arızalandı', 'sort_order' => 5],
            ['key' => 'repaired', 'name' => 'Tamir Edildi', 'sort_order' => 6],
            ['key' => 'other', 'name' => 'Diğer', 'sort_order' => 7],
        ];

        foreach ($types as $type) {
            MeasurementDeviceActionType::updateOrCreate(
                ['key' => $type['key']],
                [...$type, 'is_protected' => $type['key'] === 'other']
            );
        }
    }
}
