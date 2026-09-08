<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('capas', function (Blueprint $table) {
            $table->foreignId('problem_id')->nullable()->after('id')->constrained('problems')->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('capas', function (Blueprint $table) {
            $table->dropConstrainedForeignId('problem_id');
        });
    }
};
