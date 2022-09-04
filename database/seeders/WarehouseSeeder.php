<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Warehouse;

class WarehouseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Raw Material Warehouse-1
        Warehouse::create([
            'code' => 'W-RW-1',
            'name' => 'Raw Material Warehouse-1',
            'type' => 'import'
        ]);

        //Raw Material Warehouse-2
        Warehouse::create([
            'code' => 'W-RW-2',
            'name' => 'Raw Material Warehouse-2',
            'type' => 'import'
        ]);

        //Finished Products Warehouse-1
        Warehouse::create([
            'code' => 'W-FP-1',
            'name' => 'Finished Products Warehouse-1',
            'type' => 'export'
        ]);

        //Speared Parts Warehouse-1
        Warehouse::create([
            'code' => 'W-SP-1',
            'name' => 'Speared Parts Warehouse-1',
            'type' => 'general'
        ]);
    }
}
