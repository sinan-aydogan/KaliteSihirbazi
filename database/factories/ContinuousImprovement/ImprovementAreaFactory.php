<?php

namespace Database\Factories\ContinuousImprovement;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ContinuousImprovement\ImprovementArea>
 */
class ImprovementAreaFactory extends Factory
{
    public function definition()
    {
        return [
            'name' => $this->faker->words(3, true),
            'department_id' => null,
            'responsible_id' => null,
            'is_active' => true,
        ];
    }
}
