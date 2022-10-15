<?php

namespace Database\Seeders\MeasurementDevice;

use App\Models\Department;
use App\Models\HumanResources\Employee\Employee;
use App\Models\MeasurementDevice\MeasurementDevice;
use App\Models\MeasurementDevice\MeasurementDeviceType;
use Illuminate\Database\Seeder;

class MeasurementDeviceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*Caliper*/
        MeasurementDevice::create([
            'code'=>'KM-1',
            'brand'=>'Insize',
            'model'=>'x125',
            'serial_no'=>'123s5888',
            'properties'=>'',
            'purchase_date'=>'14.02.2017',
            'purchase_price'=> 310.5,
            'purchase_price_unit'=>'TRY',
            'device_supervisor_id'=>Employee::where('code', '12345678910')->first()->id,
            'calibration_supervisor_id'=>Employee::where('code', '12345678910')->first()->id,
            'department_id'=>Department::where('code', 'KLT')->first()->id,
            'measurement_device_type_id'=>MeasurementDeviceType::where('code', 'CP')->first()->id
        ]);
    }
}
