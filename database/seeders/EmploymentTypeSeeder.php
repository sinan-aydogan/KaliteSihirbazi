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
            'name' => [
                'tr' => 'Tam Zamanlı',
                'en' => 'Full-Time'
            ]
        ]);

        /*Part-time*/
        EmploymentType::create([
            'name' => [
                'tr' => 'Yarı Zamanlı',
                'en' => 'Part-Time'
            ]
        ]);

        /*Daily Wage*/
        EmploymentType::create([
            'name' => [
                'tr' => 'Sözleşmeli',
                'en' => 'Daily-wage'
            ]
        ]);

        /*Seasonal*/
        EmploymentType::create([
            'name' => [
                'tr' => 'Dönemsel',
                'en' => 'Seasonal'
            ]
        ]);
    }
}
