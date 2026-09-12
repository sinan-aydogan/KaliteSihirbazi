<?php

use App\Models\Setting;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up(): void
    {
        Setting::updateOrCreate(
            ['code' => 'calibration_reminder_days'],
            ['module' => 'measurement_device', 'type' => 'json', 'value' => json_encode(30)]
        );
    }

    public function down(): void
    {
        Setting::where('code', 'calibration_reminder_days')->delete();
    }
};
