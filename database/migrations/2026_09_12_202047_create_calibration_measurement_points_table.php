<?php

use App\Models\MeasurementDevice\Calibration\MeasurementDeviceCalibrationTask;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('calibration_measurement_points', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(MeasurementDeviceCalibrationTask::class)->constrained()->cascadeOnDelete();
            $table->unsignedInteger('sequence')->default(1);
            $table->string('unit')->nullable();
            $table->decimal('nominal_value', 15, 5);
            $table->decimal('measured_value', 15, 5);
            $table->decimal('tolerance', 15, 5)->nullable();
            $table->decimal('deviation', 15, 5);
            $table->boolean('is_within_tolerance')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('calibration_measurement_points');
    }
};
