<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('measurement_device_actions', function (Blueprint $table) {
            $table->foreignId('measurement_device_id')->after('id')->constrained()->cascadeOnDelete();
            $table->foreignId('measurement_device_action_type_id')->after('measurement_device_id')->constrained()->restrictOnDelete();
            $table->date('started_at')->after('measurement_device_action_type_id');
            $table->date('resolved_at')->nullable()->after('started_at');
            $table->text('description')->nullable()->after('resolved_at');
            $table->foreignId('recorded_by_id')->nullable()->after('description')->constrained('users')->nullOnDelete();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::table('measurement_device_actions', function (Blueprint $table) {
            $table->dropConstrainedForeignId('measurement_device_id');
            $table->dropConstrainedForeignId('measurement_device_action_type_id');
            $table->dropConstrainedForeignId('recorded_by_id');
            $table->dropColumn(['started_at', 'resolved_at', 'description', 'deleted_at']);
        });
    }
};
