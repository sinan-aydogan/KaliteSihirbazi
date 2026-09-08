<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('audit_checklist_questions', function (Blueprint $table) {
            $table->string('question_type')->default('compliance_4')->after('question');
        });

        Schema::table('audit_checklist_answers', function (Blueprint $table) {
            $table->text('value')->nullable()->after('answer');
        });
    }

    public function down(): void
    {
        Schema::table('audit_checklist_answers', function (Blueprint $table) {
            $table->dropColumn('value');
        });

        Schema::table('audit_checklist_questions', function (Blueprint $table) {
            $table->dropColumn('question_type');
        });
    }
};
