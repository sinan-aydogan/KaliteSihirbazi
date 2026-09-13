<?php

namespace Database\Factories\MeasurementDevice\Action;

use App\Models\MeasurementDevice\Action\MeasurementDeviceActionType;
use App\Models\MeasurementDevice\MeasurementDevice;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MeasurementDevice\Action\MeasurementDeviceAction>
 */
class MeasurementDeviceActionFactory extends Factory
{
    public function definition()
    {
        return [
            'measurement_device_id' => MeasurementDevice::factory(),
            'measurement_device_action_type_id' => MeasurementDeviceActionType::factory(),
            'started_at' => $this->faker->date(),
            'resolved_at' => null,
            'description' => $this->faker->sentence(),
            'recorded_by_id' => User::factory(),
        ];
    }
}
