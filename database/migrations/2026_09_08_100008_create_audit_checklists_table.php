<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('audit_checklists', function (Blueprint $table) {
            $table->id();
            $table->foreignId('audit_id')->constrained('audits')->cascadeOnDelete();
            $table->foreignId('audit_checklist_template_id')->nullable()->constrained('audit_checklist_templates')->nullOnDelete();
            $table->timestamps();
        });

        Schema::create('audit_checklist_answers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('audit_checklist_id')->constrained('audit_checklists')->cascadeOnDelete();
            $table->foreignId('audit_checklist_question_id')->constrained('audit_checklist_questions')->cascadeOnDelete();
            $table->string('answer')->nullable();
            $table->text('notes')->nullable();
            $table->foreignId('answered_by_id')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamp('answered_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('audit_checklist_answers');
        Schema::dropIfExists('audit_checklists');
    }
};
