<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('audits', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('title');
            $table->string('audit_type');
            $table->foreignId('standard_id')->nullable()->constrained('standards')->nullOnDelete();
            $table->foreignId('company_accreditation_id')->nullable()->constrained('company_accreditations')->nullOnDelete();
            $table->foreignId('audit_firm_id')->nullable()->constrained('audit_firms')->nullOnDelete();
            $table->foreignId('auditor_id')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('department_id')->nullable()->constrained('departments')->nullOnDelete();
            $table->text('scope')->nullable();
            $table->date('planned_date');
            $table->date('actual_date')->nullable();
            $table->string('status')->default('planned');
            $table->string('result')->nullable();
            $table->text('report_notes')->nullable();
            $table->timestamp('closed_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('audits');
    }
};
