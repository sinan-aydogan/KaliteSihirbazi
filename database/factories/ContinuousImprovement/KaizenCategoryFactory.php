<?php

namespace Database\Factories\ContinuousImprovement;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ContinuousImprovement\KaizenCategory>
 */
class KaizenCategoryFactory extends Factory
{
    public function definition()
    {
        return [
            'key' => $this->faker->unique()->slug(2),
            'name' => $this->faker->words(2, true),
            'is_protected' => false,
            'sort_order' => 0,
        ];
    }
}
