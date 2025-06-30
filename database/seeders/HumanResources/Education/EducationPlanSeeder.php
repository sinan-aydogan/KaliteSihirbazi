<?php

namespace Database\Seeders\HumanResources\Education;

use App\Models\HumanResources\Education\EducationPlan;
use Illuminate\Database\Seeder;

class EducationPlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        EducationPlan::factory()->count(5)->create();
    }
}
