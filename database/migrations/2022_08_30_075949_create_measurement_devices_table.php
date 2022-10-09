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
        Schema::create('measurement_devices', function (Blueprint $table) {
            $table->id();
            $table->string('code',10)->unique();
            $table->string('brand',255)->nullable();
            $table->string('model',255)->nullable();
            $table->string('serial_no',255)->nullable();
            $table->json('properties')->nullable();
            $table->date('purchase_date')->nullable();
            $table->string('purchase_price')->nullable();
            $table->string('purchase_price_unit')->nullable();
            $table->foreignId('device_supervisor_id')->nullable();
            $table->foreignId('calibration_supervisor_id')->nullable();
            $table->foreignIdFor(\App\Models\Department::class)->nullable();
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
        Schema::dropIfExists('measurement_devices');
    }
};
