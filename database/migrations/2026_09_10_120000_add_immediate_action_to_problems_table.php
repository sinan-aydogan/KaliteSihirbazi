<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('problems', function (Blueprint $table) {
            $table->text('immediate_action')->nullable()->after('description');
            $table->timestamp('immediate_action_at')->nullable()->after('immediate_action');
            $table->foreignId('immediate_action_by_id')->nullable()->after('immediate_action_at')
                ->constrained('users')->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('problems', function (Blueprint $table) {
            $table->dropConstrainedForeignId('immediate_action_by_id');
            $table->dropColumn(['immediate_action', 'immediate_action_at']);
        });
    }
};
