<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\HumanResources\Employee\Employee;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $employeeId = Employee::where('code', '12345678910')->value('id');

        /* Production */
        Department::create([
            'code' => 'URT',
            'name' => 'Üretim',
            'type' => 'main',
            'employee_id' => $employeeId,
        ]);

        /* Quality */
        Department::create([
            'code' => 'KLT',
            'name' => 'Kalite',
            'type' => 'main',
            'employee_id' => $employeeId,
        ]);

        /* Sales */
        Department::create([
            'code' => 'STP',
            'name' => 'Satış & Pazarlama',
            'type' => 'main',
            'employee_id' => $employeeId,
        ]);

        /* Purchase */
        Department::create([
            'code' => 'STA',
            'name' => 'Satın Alma',
            'type' => 'main',
            'employee_id' => $employeeId,
        ]);

        /* Accountant */
        Department::create([
            'code' => 'MUH',
            'name' => 'Muhasebe',
            'type' => 'main',
            'employee_id' => $employeeId,
        ]);

        /* Loading */
        Department::create([
            'code' => 'SEV',
            'name' => 'Sevkiyat',
            'type' => 'main',
            'employee_id' => $employeeId,
        ]);

        /* Maintenance */
        Department::create([
            'code' => 'BKM',
            'name' => 'Bakım',
            'type' => 'main',
            'employee_id' => $employeeId,
        ]);
    }
}
