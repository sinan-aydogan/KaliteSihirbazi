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
        Schema::create('education_education_types', function (Blueprint $table) {
            $table->id();
            $table->foreignId('education_id')->constrained('education')->onDelete('cascade');
            $table->foreignId('education_type_id')->constrained('education_types')->onDelete('cascade');
            $table->timestamps();
            
            // Aynı eğitime aynı tür birden fazla kez eklenemez
            $table->unique(['education_id', 'education_type_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('education_education_types');
    }
};
