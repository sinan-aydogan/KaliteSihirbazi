<?php

namespace Database\Factories\HumanResources\Education;

use App\Models\HumanResources\Education\EducationPlan;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<EducationPlan>
 */
class EducationPlanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $startDate = $this->faker->dateTimeBetween('now', '+6 months');
        $endDate = $this->faker->dateTimeBetween($startDate, '+1 year');

        return [
            'name' => $this->faker->unique()->numerify('####').' Yılı '.$this->faker->randomElement(['Teknik', 'Yönetimsel', 'Kişisel Gelişim', 'İSG', 'Kalite']).' Eğitim Planı',
            'start_date' => $startDate->format('Y-m-d'),
            'end_date' => $endDate->format('Y-m-d'),
            'description' => $this->faker->paragraph(3),
        ];
    }
}
