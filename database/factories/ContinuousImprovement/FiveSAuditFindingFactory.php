<?php

namespace Database\Factories\ContinuousImprovement;

use App\Models\ContinuousImprovement\FiveSAudit;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ContinuousImprovement\FiveSAuditFinding>
 */
class FiveSAuditFindingFactory extends Factory
{
    public function definition()
    {
        return [
            'five_s_audit_id' => FiveSAudit::factory(),
            'criterion' => 'general',
            'description' => $this->faker->sentence(),
            'status' => 'open',
        ];
    }
}
