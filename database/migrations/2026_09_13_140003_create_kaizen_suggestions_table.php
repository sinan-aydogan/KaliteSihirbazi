<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('kaizen_suggestions', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('title');
            $table->text('current_situation');
            $table->text('proposed_solution');
            $table->foreignId('kaizen_category_id')->constrained('kaizen_categories')->restrictOnDelete();
            $table->foreignId('department_id')->nullable()->constrained('departments')->nullOnDelete();
            $table->foreignId('proposed_by_id')->nullable()->constrained('users')->nullOnDelete();
            $table->string('status')->default('submitted');

            $table->foreignId('evaluated_by_id')->nullable()->constrained('users')->nullOnDelete();
            $table->date('evaluated_at')->nullable();
            $table->text('evaluation_note')->nullable();
            $table->text('rejection_reason')->nullable();

            $table->foreignId('responsible_id')->nullable()->constrained('users')->nullOnDelete();
            $table->date('planned_completion_date')->nullable();
            $table->date('completed_at')->nullable();

            $table->decimal('estimated_annual_saving', 12, 2)->nullable();
            $table->decimal('realized_annual_saving', 12, 2)->nullable();
            $table->text('realization_note')->nullable();

            // PDCA cycle (Plan-Do-Check-Act) notes, filled in as the suggestion moves through its lifecycle
            $table->text('plan_note')->nullable();
            $table->text('do_note')->nullable();
            $table->text('check_note')->nullable();
            $table->text('act_note')->nullable();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('kaizen_suggestions');
    }
};
