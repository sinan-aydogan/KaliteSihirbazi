<?php

namespace Database\Seeders\Dm;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DeviceTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*Caliper*/
        $caliper = new \App\Models\Dm\DeviceType([
            'code' => 'CAL',
            'name' => [
                'tr' => 'Kumpas',
                'en' => 'Caliper'
            ]
        ]);
        $caliper->save();

        /*Tape Meter*/
        $tapeMeter = new \App\Models\Dm\DeviceType([
            'code' => 'TAP',
            'name' => [
                'tr' => 'Şerit Metre',
                'en' => 'Tape Meter'
            ]
        ]);
        $tapeMeter->save();

        /*Scale*/
        $scale = new \App\Models\Dm\DeviceType([
            'code' => 'SCA',
            'name' => [
                'tr' => 'Terazi',
                'en' => 'Scale'
            ]
        ]);
        $scale->save();
    }
}
