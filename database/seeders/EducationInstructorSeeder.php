<?php

namespace Database\Seeders;

use App\Models\HumanResources\Education\EducationInstructor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EducationInstructorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        EducationInstructor::factory()->count(15)->create();
    }
}
