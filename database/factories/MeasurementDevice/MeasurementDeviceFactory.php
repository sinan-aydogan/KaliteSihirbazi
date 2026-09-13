<?php

namespace Database\Factories\MeasurementDevice;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MeasurementDevice\MeasurementDevice>
 */
class MeasurementDeviceFactory extends Factory
{
    public function definition(): array
    {
        return [
            'code' => 'MD-'.fake()->unique()->numberBetween(1000, 9999),
            'status' => \App\Models\MeasurementDevice\MeasurementDevice::STATUS_ACTIVE,
        ];
    }
}
