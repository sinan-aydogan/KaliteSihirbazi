<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('audit_checklist_templates', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('audit_scope_id')->nullable()->constrained('audit_scopes')->nullOnDelete();
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('audit_checklist_questions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('audit_checklist_template_id')->constrained('audit_checklist_templates')->cascadeOnDelete();
            $table->text('question');
            $table->string('standard_reference')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('audit_checklist_questions');
        Schema::dropIfExists('audit_checklist_templates');
    }
};
