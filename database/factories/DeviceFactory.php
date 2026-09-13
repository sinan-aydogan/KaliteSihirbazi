<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Device>
 */
class DeviceFactory extends Factory
{
    public function definition(): array
    {
        return [
            'code' => 'DEV-'.fake()->unique()->numberBetween(1000, 9999),
            'name' => fake()->words(2, true),
            'is_active' => true,
        ];
    }
}
