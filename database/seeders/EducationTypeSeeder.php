<?php

namespace Database\Seeders;

use App\Models\HumanResources\Education\EducationType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EducationTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        EducationType::factory()->count(10)->create();
    }
}
