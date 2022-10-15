<?php

namespace Database\Seeders\MeasurementDevice\Calibration;

use App\Models\MeasurementDevice\Calibration\CalibrationFirm;
use Illuminate\Database\Seeder;

class CalibrationFirmSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*TailAdminCert*/
        CalibrationFirm::create([
            'name' => 'TailAdmin Cert',
            'email' => 'tailadmincert@kalitesihirbazi.com.tr',
            'address' => 'Ludigortsi / Bulgaristan',
            'phone' => '+359000000'
        ]);

        /*KSC*/
        CalibrationFirm::create([
            'name' => 'KSC',
            'email' => 'ksc@kalitesihirbazi.com.tr',
            'address' => 'Kocaeli / Türkiye',
            'phone' => '+90000000'
        ]);
    }
}
