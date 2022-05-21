<?php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*Production*/
        Department::create([
            'code'=>'URT',
            'name'=>'Üretim',
            'type'=> 'main',
            'user_id'=>1
        ]);

        /*Paste Production*/
        Department::create([
            'code'=>'SUR',
            'name'=>'Salça Üretim',
            'user_id'=>1,
            'department_id'=>Department::where('code', 'URT')->first()->id
        ]);

        /*Pickle Production*/
        Department::create([
            'code'=>'ASV',
            'name'=>'Turşu',
            'user_id'=>1,
            'department_id'=>Department::where('code', 'URT')->first()->id
        ]);

        /*Quality*/
        Department::create([
            'code'=>'KLT',
            'name'=>'Kalite',
            'type'=> 'main',
            'user_id'=>1,
        ]);

        /*Sales*/
        Department::create([
            'code'=>'STP',
            'name'=>'Satış & Pazarlama',
            'type'=> 'main',
            'user_id'=>1,
        ]);

        /*Purchase*/
        Department::create([
            'code'=>'STA',
            'name'=>'Satın Alma',
            'type'=> 'main',
            'user_id'=>1,
        ]);

        /*Accountant*/
        Department::create([
            'code'=>'MUH',
            'name'=>'Muhasebe',
            'type'=> 'main',
            'user_id'=>1,
        ]);

        /*Loading*/
        Department::create([
            'code'=>'SEV',
            'name'=>'Sevkiyat',
            'type'=> 'main',
            'user_id'=>1,
        ]);

        /*Maintenance*/
        Department::create([
            'code'=>'BKM',
            'name'=>'Bakım',
            'type'=> 'main',
            'user_id'=>1,
        ]);
    }
}
