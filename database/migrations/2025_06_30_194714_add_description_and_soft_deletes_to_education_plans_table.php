<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('education_plans', function (Blueprint $table) {
            $table->text('description')->nullable()->after('end_date');
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('education_plans', function (Blueprint $table) {
            $table->dropColumn('description');
            $table->dropSoftDeletes();
        });
    }
};
