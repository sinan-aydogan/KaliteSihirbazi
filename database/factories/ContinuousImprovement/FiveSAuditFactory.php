<?php

namespace Database\Factories\ContinuousImprovement;

use App\Models\ContinuousImprovement\ImprovementArea;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ContinuousImprovement\FiveSAudit>
 */
class FiveSAuditFactory extends Factory
{
    public function definition()
    {
        return [
            'continuous_improvement_area_id' => ImprovementArea::factory(),
            'audited_by_id' => User::factory(),
            'audit_date' => $this->faker->date(),
            'sort_score' => 4,
            'set_in_order_score' => 4,
            'shine_score' => 4,
            'standardize_score' => 4,
            'sustain_score' => 4,
            'general_note' => $this->faker->sentence(),
        ];
    }
}
