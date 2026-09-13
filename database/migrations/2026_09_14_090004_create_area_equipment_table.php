<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Polymorphic pivot linking an Area to Devices/Machines/MeasurementDevices
     * (each can belong to multiple Areas, and an Area can list all of its
     * equipment across the three types from one table).
     */
    public function up(): void
    {
        Schema::create('area_equipment', function (Blueprint $table) {
            $table->id();
            $table->foreignId('area_id')->constrained()->cascadeOnDelete();
            $table->string('equipment_type');
            $table->unsignedBigInteger('equipment_id');
            $table->timestamps();

            $table->unique(['area_id', 'equipment_type', 'equipment_id'], 'area_equipment_unique');
            $table->index(['equipment_type', 'equipment_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('area_equipment');
    }
};
