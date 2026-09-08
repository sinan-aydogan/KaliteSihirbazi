<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('problems', function (Blueprint $table) {
            $table->foreignId('risk_id')->nullable()->after('audit_checklist_answer_id')->constrained()->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('problems', function (Blueprint $table) {
            $table->dropConstrainedForeignId('risk_id');
        });
    }
};
