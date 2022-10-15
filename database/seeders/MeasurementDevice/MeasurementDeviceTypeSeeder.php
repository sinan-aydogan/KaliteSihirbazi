<?php

namespace Database\Seeders\MeasurementDevice;

use App\Models\MeasurementDevice\MeasurementDeviceType;
use Illuminate\Database\Seeder;

class MeasurementDeviceTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*Precision Scale*/
        MeasurementDeviceType::create([
            'code'=>'PS',
            'name'=> 'Hassas Terazi',
            'description'=> 'Malzemeleri hassas tartmak için kullanılan ölçü aleti'
        ]);

        /*Drying Oven*/
        MeasurementDeviceType::create([
            'code'=>'DO',
            'name'=> 'Etüv',
            'description'=> 'Malzemeleri kurutmak için kullanılan fırın'
        ]);

        /*Stopwatch*/
        MeasurementDeviceType::create([
            'code'=>'SW',
            'name'=> 'Kronometre',
            'description'=> 'Süre takibinde, zamanı hassas olarak ölçmeye yarayan ölçü aleti'
        ]);

        /*Tape*/
        MeasurementDeviceType::create([
            'code'=>'TP',
            'name'=> 'Şerit Metre',
            'description'=> 'Uzunluğu kaba olarak ölçmeye yarayan ölçü aleti'
        ]);

        /*Caliper*/
        MeasurementDeviceType::create([
            'code'=>'CP',
            'name'=> 'Kumpas',
            'description'=> 'Uzunluğu hassas olarak ölçmeye yarayan ölçü aleti'
        ]);
    }
}
