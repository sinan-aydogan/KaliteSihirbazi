<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('education_education_instructors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('education_id')->constrained('education')->onDelete('cascade');
            $table->foreignId('education_instructor_id')->constrained('education_instructors')->onDelete('cascade');
            $table->string('role')->nullable()->comment('Eğitmen rolü: Eğitmen, Denetmen, Uygulama Ustası vb.');
            $table->timestamps();
            
            // Aynı eğitime aynı eğitmen birden fazla kez eklenemez
            $table->unique(['education_id', 'education_instructor_id'], 'education_instructor_unique');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('education_education_instructors');
    }
};
