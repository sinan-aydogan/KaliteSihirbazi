<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('risk_reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('risk_id')->constrained()->cascadeOnDelete();
            $table->date('review_date');
            $table->foreignId('reviewed_by_id')->nullable()->constrained('users')->nullOnDelete();
            $table->string('trigger');

            $table->unsignedTinyInteger('probability')->nullable();
            $table->unsignedTinyInteger('impact')->nullable();
            $table->unsignedTinyInteger('score')->nullable();
            $table->string('level')->nullable();

            $table->boolean('controls_adequate')->nullable();
            $table->string('conclusion')->nullable();
            $table->text('notes')->nullable();

            $table->foreignId('linked_problem_id')->nullable()->constrained('problems')->nullOnDelete();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('risk_reviews');
    }
};
