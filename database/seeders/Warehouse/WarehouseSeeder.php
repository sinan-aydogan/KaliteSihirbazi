<?php

namespace Database\Seeders\Warehouse;

use App\Models\Warehouse\Warehouse;
use App\Models\Warehouse\WarehouseType;
use Illuminate\Database\Seeder;

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
            'name' => 'Hammadde-1',
            'employee_id' => 1,
            'department_id' => 1,
            'warehouse_type_id' => WarehouseType::where('code', 'IF')->first()->id
        ]);

        //Raw Material Warehouse-2
        Warehouse::create([
            'code' => 'W-RW-2',
            'name' => 'Hammadde-2',
            'employee_id' => 2,
            'department_id' => 1,
            'warehouse_type_id' => WarehouseType::where('code', 'TN')->first()->id
        ]);

        //Finished Products Warehouse-1
        Warehouse::create([
            'code' => 'W-FP-1',
            'name' => 'Bitmiş Ürün-1',
            'employee_id' => 3,
            'department_id' => 6,
            'warehouse_type_id' => WarehouseType::where('code', 'IF')->first()->id
        ]);

        //Semi-finished Products Warehouse-1
        Warehouse::create([
            'code' => 'W-SFP-1',
            'name' => 'Yarı Mamül-1',
            'employee_id' => 3,
            'department_id' => 6,
            'warehouse_type_id' => WarehouseType::where('code', 'OF')->first()->id
        ]);

        //Speared Parts Warehouse-1
        Warehouse::create([
            'code' => 'W-SP-1',
            'name' => 'Yedek Parça Deposu',
            'employee_id' => 4,
            'department_id' => 7,
            'warehouse_type_id' => WarehouseType::where('code', 'IF')->first()->id
        ]);
    }
}
