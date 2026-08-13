<?php

use App\Models\MeasurementDevice\Calibration\CalibrationFirm;
use App\Models\MeasurementDevice\MeasurementDevice;
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
            $table->date('accomplished_date')->nullable();
            $table->foreignIdFor(MeasurementDevice::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(CalibrationFirm::class)->constrained()->restrictOnDelete();
            $table->decimal('price', 12, 2)->nullable();
            $table->char('currency', 3)->nullable();
            $table->boolean('status')->default(0);
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
