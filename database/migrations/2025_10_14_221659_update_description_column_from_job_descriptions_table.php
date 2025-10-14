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
        Schema::table('job_descriptions', function (Blueprint $table) {
            $table->string('description',750)->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('job_descriptions', function (Blueprint $table) {
            $table->string('description',750)->nullable(false)->change();
        });
    }
};
