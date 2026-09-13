<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('measurement_devices', function (Blueprint $table) {
            $table->string('status')->default('active')->after('measurement_device_type_id');
            $table->timestamp('decommissioned_at')->nullable()->after('status');
            $table->text('decommission_reason')->nullable()->after('decommissioned_at');
            $table->foreignId('decommissioned_by_id')->nullable()->after('decommission_reason')
                ->constrained('users')->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('measurement_devices', function (Blueprint $table) {
            $table->dropConstrainedForeignId('decommissioned_by_id');
            $table->dropColumn(['status', 'decommissioned_at', 'decommission_reason']);
        });
    }
};
