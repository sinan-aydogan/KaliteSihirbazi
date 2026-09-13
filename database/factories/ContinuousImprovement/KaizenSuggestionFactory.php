<?php

namespace Database\Factories\ContinuousImprovement;

use App\Models\ContinuousImprovement\KaizenCategory;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ContinuousImprovement\KaizenSuggestion>
 */
class KaizenSuggestionFactory extends Factory
{
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(4),
            'current_situation' => $this->faker->paragraph(),
            'proposed_solution' => $this->faker->paragraph(),
            'kaizen_category_id' => KaizenCategory::factory(),
            'department_id' => null,
            'proposed_by_id' => User::factory(),
            'status' => 'submitted',
        ];
    }
}
