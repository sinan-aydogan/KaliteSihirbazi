<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('measurement_device_calibration_tasks', function (Blueprint $table) {
            $table->string('result')->nullable()->after('status');
            $table->string('report_number')->nullable()->after('result');
            $table->text('report_notes')->nullable()->after('report_number');
            $table->date('next_calibration_date')->nullable()->after('report_notes');
        });
    }

    public function down(): void
    {
        Schema::table('measurement_device_calibration_tasks', function (Blueprint $table) {
            $table->dropColumn(['result', 'report_number', 'report_notes', 'next_calibration_date']);
        });
    }
};
