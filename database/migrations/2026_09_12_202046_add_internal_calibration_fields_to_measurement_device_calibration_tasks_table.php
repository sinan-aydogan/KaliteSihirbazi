<?php

use App\Models\MeasurementDevice\Calibration\CalibrationFirm;
use App\Models\MeasurementDevice\MeasurementDevice;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('measurement_device_calibration_tasks', function (Blueprint $table) {
            $table->string('type')->default('external')->after('measurement_device_id');
            $table->foreignIdFor(MeasurementDevice::class, 'reference_measurement_device_id')->nullable()->after('calibration_firm_id')
                ->constrained('measurement_devices')->restrictOnDelete();
            $table->foreignId('performed_by_id')->nullable()->after('reference_measurement_device_id')
                ->constrained('calibration_technicians')->nullOnDelete();
        });

        Schema::table('measurement_device_calibration_tasks', function (Blueprint $table) {
            $table->foreignIdFor(CalibrationFirm::class)->nullable()->change();
        });
    }

    public function down(): void
    {
        Schema::table('measurement_device_calibration_tasks', function (Blueprint $table) {
            $table->dropConstrainedForeignId('reference_measurement_device_id');
            $table->dropConstrainedForeignId('performed_by_id');
            $table->dropColumn('type');
        });
    }
};
