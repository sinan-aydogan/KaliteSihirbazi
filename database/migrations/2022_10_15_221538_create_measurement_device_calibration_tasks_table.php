<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('measurement_device_calibration_tasks', function (Blueprint $table) {
            $table->id();
            $table->date('planned_date');
            $table->date('accomplished_date');
            $table->foreignIdFor(\App\Models\MeasurementDevice\MeasurementDevice::class);
            $table->foreignIdFor(\App\Models\MeasurementDevice\Calibration\CalibrationFirm::class);
            $table->float('price')->nullable();
            $table->string('currency')->nullable();
            $table->boolean('status')->default(1);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('measurement_device_calibration_tasks');
    }
};
