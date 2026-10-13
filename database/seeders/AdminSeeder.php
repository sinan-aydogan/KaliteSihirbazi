<?php

namespace Database\Seeders;

use App\Models\HumanResources\Employee\Employee;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $employee = Employee::firstOrCreate(
            ['code' => '12345678910'],
            [
                'has_account' => true,
                'birthday' => '03.09.1987',
                'employment_date' => '14.02.2017',
                'leaving_date' => '14.02.2017',
                'blood_type' => 'AB+',
                'status' => 'working',
            ]
        );

        $account = User::firstOrCreate(
            ['email' => 'yonetici@kalitesihirbazi.com.tr'],
            [
                'name' => 'Süper Admin',
                'password' => Hash::make('admin'),
            ]
        );

        if (!$account->accountable_id) {
            $employee->account()->save($account);
        }

        $account->assignRole('Sistem Yöneticisi');
    }
}
