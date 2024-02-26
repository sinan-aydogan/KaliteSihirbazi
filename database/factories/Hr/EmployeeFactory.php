<?php

namespace Database\Factories\Hr;

use App\Models\Hr\EmployeeType;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Hr\Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $gender = $this->faker->randomElement(['male', 'female']);
        $employee = [
            'gender' => $gender,
            'firstName' => $this->faker->firstName($gender),
            'lastName' => $this->faker->lastName,
            'dateOfBirth' => $this->faker->dateTimeBetween('-60 years', '-18 years'),
            'citizenshipNumber' => $this->faker->unique()->numerify('##########'),
        ];
        return [
            'user_id' => User::factory(1)->create([
                'name' => $employee['firstName'] . ' ' . $employee['lastName'],
                'email' => $employee['firstName'] . '.' . $employee['lastName'] . '@kalitesihirbazi.com.tr',
                'password' => bcrypt('password')
            ])->first()->id,
            'employee_type_id' => EmployeeType::all()->random()->id,
            'citizenship_number' => $employee['citizenshipNumber'],
            'first_name' => $employee['firstName'],
            'last_name' => $employee['lastName'],
            'date_of_birth' => $employee['dateOfBirth'],
            'gender' => $gender
        ];
    }
}
