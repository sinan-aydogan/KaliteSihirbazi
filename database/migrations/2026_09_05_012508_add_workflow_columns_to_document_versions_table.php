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
        Schema::table('document_versions', function (Blueprint $table) {
            $table->foreignId('reviewed_by')->nullable()->after('revised_by')->constrained('users')->nullOnDelete();
            $table->timestamp('reviewed_at')->nullable()->after('reviewed_by');
            $table->timestamp('published_at')->nullable()->after('reviewed_at');
        });

        // Pre-existing rows used the ad-hoc 'pending' default; normalize them to
        // the new workflow's starting state so status checks behave consistently.
        DB::table('document_versions')->where('status', 'pending')->update(['status' => 'draft']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('document_versions', function (Blueprint $table) {
            $table->dropConstrainedForeignId('reviewed_by');
            $table->dropColumn(['reviewed_at', 'published_at']);
        });
    }
};
