<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('audit_audit_scope', function (Blueprint $table) {
            $table->foreignId('audit_id')->constrained('audits')->cascadeOnDelete();
            $table->foreignId('audit_scope_id')->constrained('audit_scopes')->cascadeOnDelete();
            $table->primary(['audit_id', 'audit_scope_id']);
        });

        Schema::create('audit_audit_firm_auditor', function (Blueprint $table) {
            $table->foreignId('audit_id')->constrained('audits')->cascadeOnDelete();
            $table->foreignId('audit_firm_auditor_id')->constrained('audit_firm_auditors')->cascadeOnDelete();
            $table->primary(['audit_id', 'audit_firm_auditor_id'], 'audit_audit_firm_auditor_primary');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('audit_audit_firm_auditor');
        Schema::dropIfExists('audit_audit_scope');
    }
};
