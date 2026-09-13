<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Which employees are authorized to operate a given piece of equipment
     * (Device/Machine/MeasurementDevice, via the equipment_type/id morph
     * pair) — distinct from an Area's "responsible" person. Optionally
     * traces back to the Education record that granted the authorization.
     */
    public function up(): void
    {
        Schema::create('equipment_operator_authorizations', function (Blueprint $table) {
            $table->id();
            $table->string('equipment_type');
            $table->unsignedBigInteger('equipment_id');
            $table->foreignId('employee_id')->constrained()->cascadeOnDelete();
            $table->foreignId('education_id')->nullable()->constrained('education')->nullOnDelete();
            $table->date('granted_at');
            $table->date('expires_at')->nullable();
            $table->foreignId('granted_by_id')->nullable()->constrained('users')->nullOnDelete();
            $table->text('note')->nullable();
            $table->timestamps();

            $table->unique(['equipment_type', 'equipment_id', 'employee_id'], 'equipment_operator_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('equipment_operator_authorizations');
    }
};
