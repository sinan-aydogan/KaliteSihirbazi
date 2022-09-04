<?php

namespace Database\Seeders;

use App\Models\Employee;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
        $admin = Employee::create([
            'birthday' => '03.09.1987',
            'employment_date' => '14.02.2017',
            'leaving_date' => '14.02.2017',
            'blood_type' => 'AB+',
            'status' => 'working'
        ]);

        $admin->manager()->create([
            'name' => 'Süper Admin',
            'email' => 'yonetici@kalitesihirbazi.com.tr',
            'password' => Hash::make('admin')
        ]);
    }
}
