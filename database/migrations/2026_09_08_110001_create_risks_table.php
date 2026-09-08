<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('risks', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('title');
            $table->text('description')->nullable();

            $table->foreignId('department_id')->constrained()->cascadeOnDelete();
            $table->string('scope_note')->nullable();
            $table->foreignId('risk_category_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('risk_hazard_class_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('risk_owner_id')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('identified_by_id')->constrained('users')->cascadeOnDelete();
            $table->date('identified_date');

            $table->unsignedTinyInteger('initial_probability');
            $table->unsignedTinyInteger('initial_impact');
            $table->unsignedTinyInteger('initial_score');
            $table->string('initial_level');

            $table->unsignedTinyInteger('residual_probability')->nullable();
            $table->unsignedTinyInteger('residual_impact')->nullable();
            $table->unsignedTinyInteger('residual_score')->nullable();
            $table->string('residual_level')->nullable();

            $table->string('treatment_strategy');
            $table->text('acceptance_justification')->nullable();
            $table->string('status');
            $table->date('next_review_date')->nullable();
            $table->timestamp('closed_at')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('risks');
    }
};
