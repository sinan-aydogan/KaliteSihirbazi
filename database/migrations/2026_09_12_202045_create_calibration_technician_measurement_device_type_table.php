<?php

use App\Models\MeasurementDevice\MeasurementDeviceType;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('calibration_technician_measurement_device_type', function (Blueprint $table) {
            $table->id();
            $table->foreignId('calibration_technician_id')->constrained()->cascadeOnDelete();
            $table->foreignIdFor(MeasurementDeviceType::class)->constrained()->cascadeOnDelete();
            $table->timestamps();

            $table->unique(['calibration_technician_id', 'measurement_device_type_id'], 'calibration_technician_device_type_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('calibration_technician_measurement_device_type');
    }
};
