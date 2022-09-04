<?php

namespace Database\Seeders;

use App\Models\JobDescriptionCollarType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobDescriptionCollarTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*White-collar*/
        JobDescriptionCollarType::create([
            'code' => 'BY',
            'name' => 'Beyaz Yaka',
        ]);

        /*Blue-collar*/
        JobDescriptionCollarType::create([
            'code' => 'MY',
            'name' => 'Mavi Yaka',
        ]);

        /*Intern*/
        JobDescriptionCollarType::create([
            'code' => 'ST',
            'name' => 'Stajer',
        ]);
    }
}
