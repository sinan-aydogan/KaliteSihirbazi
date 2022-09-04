<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'code' => Str::random(11),
            'name' => $this->faker->name(),
            'department_id' => $this->faker->numberBetween(2, 5),
            'birthday' => $this->faker->dateTimeBetween('-60 years', '-18 years'),
            'employment_date' => $this->faker->dateTimeBetween('-18 years', 'now'),
            'blood_type' => $this->faker->randomElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
            'status' => $this->faker->randomElement(['working', 'retired', 'fired', 'left']),
        ];
    }
}
