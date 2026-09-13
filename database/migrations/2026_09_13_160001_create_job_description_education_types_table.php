<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('job_description_education_types', function (Blueprint $table) {
            $table->id();
            $table->foreignId('job_description_id')->constrained('job_descriptions')->cascadeOnDelete();
            $table->foreignId('education_type_id')->constrained('education_types')->cascadeOnDelete();
            $table->timestamps();

            $table->unique(['job_description_id', 'education_type_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('job_description_education_types');
    }
};
