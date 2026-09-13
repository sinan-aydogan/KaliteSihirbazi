<?php

namespace Database\Factories\ContinuousImprovement;

use App\Models\ContinuousImprovement\ImprovementArea;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ContinuousImprovement\GembaWalk>
 */
class GembaWalkFactory extends Factory
{
    public function definition()
    {
        return [
            'continuous_improvement_area_id' => ImprovementArea::factory(),
            'conducted_by_id' => User::factory(),
            'walk_date' => $this->faker->date(),
            'participants' => $this->faker->name(),
            'observations' => $this->faker->paragraph(),
        ];
    }
}
