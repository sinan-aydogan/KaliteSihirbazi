<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('five_s_audit_findings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('five_s_audit_id')->constrained('five_s_audits')->cascadeOnDelete();
            $table->string('criterion');
            $table->text('description');
            $table->foreignId('responsible_id')->nullable()->constrained('users')->nullOnDelete();
            $table->date('due_date')->nullable();
            $table->string('status')->default('open');
            $table->date('resolved_at')->nullable();
            $table->text('resolution_note')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('five_s_audit_findings');
    }
};
