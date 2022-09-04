<?php

namespace Database\Seeders;

use App\Models\EmploymentType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EmploymentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*Full-time*/
        EmploymentType::create([
            'name' => 'Tam Zamanlı'
        ]);

        /*Part-time*/
        EmploymentType::create([
            'name' => 'Yarı Zamanlı'
        ]);

        /*Daily Wage*/
        EmploymentType::create([
            'name' => 'Yevmiye Usulü'
        ]);

        /*Seasonal*/
        EmploymentType::create([
            'name' => 'Dönemsel'
        ]);
    }
}
