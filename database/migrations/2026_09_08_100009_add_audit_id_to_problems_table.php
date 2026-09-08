<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('problems', function (Blueprint $table) {
            $table->foreignId('audit_id')->nullable()->after('id')->constrained('audits')->nullOnDelete();
            $table->foreignId('audit_checklist_answer_id')->nullable()->after('audit_id')->constrained('audit_checklist_answers')->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('problems', function (Blueprint $table) {
            $table->dropConstrainedForeignId('audit_checklist_answer_id');
            $table->dropConstrainedForeignId('audit_id');
        });
    }
};
