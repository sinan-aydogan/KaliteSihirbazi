<?php

namespace Database\Seeders;

use App\Models\SupplierTag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SupplierTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*Well*/
        SupplierTag::create([
            'name' => 'Well',
        ]);

        /*Cash*/
        SupplierTag::create([
            'name' => 'Cash',
        ]);

        /*Poor Quality*/
        SupplierTag::create([
            'name' => 'Poor Quality',
        ]);

        /*Poor Transport*/
        SupplierTag::create([
            'name' => 'Poor Transport',
        ]);
    }
}
