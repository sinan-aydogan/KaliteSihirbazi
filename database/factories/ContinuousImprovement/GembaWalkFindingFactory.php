<?php

namespace Database\Factories\ContinuousImprovement;

use App\Models\ContinuousImprovement\GembaWalk;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ContinuousImprovement\GembaWalkFinding>
 */
class GembaWalkFindingFactory extends Factory
{
    public function definition()
    {
        return [
            'gemba_walk_id' => GembaWalk::factory(),
            'category' => 'other',
            'description' => $this->faker->sentence(),
            'status' => 'open',
        ];
    }
}
