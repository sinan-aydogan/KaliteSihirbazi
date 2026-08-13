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
        Schema::create('measurement_device_types', function (Blueprint $table) {
            $table->id();
            $table->string('code', 10)->unique();
            $table->string('name', 255);
            $table->string('description', 750)->nullable();
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::table('measurement_devices', function (Blueprint $table) {
            $table->foreign('device_supervisor_id')->references('id')->on('employees')->nullOnDelete();
            $table->foreign('calibration_supervisor_id')->references('id')->on('employees')->nullOnDelete();
            $table->foreign('department_id')->references('id')->on('departments')->nullOnDelete();
            $table->foreign('measurement_device_type_id')->references('id')->on('measurement_device_types')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('measurement_devices', function (Blueprint $table) {
            $table->dropForeign(['device_supervisor_id']);
            $table->dropForeign(['calibration_supervisor_id']);
            $table->dropForeign(['department_id']);
            $table->dropForeign(['measurement_device_type_id']);
        });

        Schema::dropIfExists('measurement_device_types');
    }
};
