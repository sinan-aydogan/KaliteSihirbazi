<?php

namespace Database\Seeders;

use App\Models\WarehouseType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WarehouseTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*Tent*/
        WarehouseType::create([
            'code'=>'TN',
            'name' => 'Çadır'
        ]);

        /*Open Field*/
        WarehouseType::create([
            'code'=>'OF',
            'name' => 'Açık Alan'
        ]);

        /*Indoor Field*/
        WarehouseType::create([
            'code'=>'IF',
            'name' => 'Kapalı Alan'
        ]);

        /*Cold-storage Warehouse*/
        WarehouseType::create([
            'code'=>'CS',
            'name' => 'Soğuk Hava Deposu'
        ]);
    }
}
