<?php

namespace Database\Factories\MeasurementDevice\Action;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MeasurementDevice\Action\MeasurementDeviceActionType>
 */
class MeasurementDeviceActionTypeFactory extends Factory
{
    public function definition()
    {
        $name = $this->faker->unique()->words(2, true);

        return [
            'key' => Str::slug($name, '_'),
            'name' => $name,
            'is_protected' => false,
            'sort_order' => $this->faker->numberBetween(0, 20),
        ];
    }
}
