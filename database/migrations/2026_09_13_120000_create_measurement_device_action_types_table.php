<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('measurement_device_action_types', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->string('name');
            $table->boolean('is_protected')->default(false);
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });

        (new \Database\Seeders\MeasurementDevice\Action\MeasurementDeviceActionTypeSeeder())->run();
    }

    public function down(): void
    {
        Schema::dropIfExists('measurement_device_action_types');
    }
};
