<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SupplierType;

class SupplierTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*Raw Material Supplier*/
        SupplierType::create([
            'code'=> 'RM',
            'name'=> 'Raw Material Supplier'
        ]);

        /*Consumable Material Supplier*/
        SupplierType::create([
            'code'=> 'CM',
            'name'=> 'Consumable Material Supplier'
        ]);

        /*Separate Parts Supplier*/
        SupplierType::create([
            'code'=> 'SP',
            'name'=> 'Separate Parts Supplier'
        ]);

        /*Transport Service Provider*/
        SupplierType::create([
            'code'=> 'TS',
            'name'=> 'Transport Service Provider'
        ]);

        /*Maintenance Service Provider*/
        SupplierType::create([
            'code'=> 'MS',
            'name'=> 'Maintenance Service Provider'
        ]);
    }
}
