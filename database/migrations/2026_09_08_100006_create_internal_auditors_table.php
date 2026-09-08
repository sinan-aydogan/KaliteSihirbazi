<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('internal_auditors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unique()->constrained('users')->cascadeOnDelete();
            $table->boolean('is_active')->default(true);
            $table->text('notes')->nullable();
            $table->timestamps();
        });

        Schema::create('internal_auditor_department', function (Blueprint $table) {
            $table->foreignId('internal_auditor_id')->constrained('internal_auditors')->cascadeOnDelete();
            $table->foreignId('department_id')->constrained('departments')->cascadeOnDelete();
            $table->primary(['internal_auditor_id', 'department_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('internal_auditor_department');
        Schema::dropIfExists('internal_auditors');
    }
};
