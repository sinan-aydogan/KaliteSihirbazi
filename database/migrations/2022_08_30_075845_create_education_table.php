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
        Schema::create('education', function (Blueprint $table) {
            $table->id();
            $table->foreignId('education_plan_id')->constrained('education_plans')->restrictOnDelete();
            $table->string('name');
            $table->text('description')->nullable();
            $table->date('planned_date');
            $table->date('performed_date')->nullable();
            $table->integer('duration')->comment('Dakika cinsinden süre');
            $table->boolean('is_completed')->default(false);
            $table->boolean('is_cancelled')->default(false);
            $table->text('cancel_reason')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('education');
    }
};
