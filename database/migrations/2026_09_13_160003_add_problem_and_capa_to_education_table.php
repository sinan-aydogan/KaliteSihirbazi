<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('education', function (Blueprint $table) {
            $table->foreignId('problem_id')->nullable()->after('education_plan_id')->constrained('problems')->nullOnDelete();
            $table->foreignId('capa_id')->nullable()->after('problem_id')->constrained('capas')->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('education', function (Blueprint $table) {
            $table->dropConstrainedForeignId('problem_id');
            $table->dropConstrainedForeignId('capa_id');
        });
    }
};
