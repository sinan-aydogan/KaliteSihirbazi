<?php

namespace Database\Seeders;

use App\Models\User;
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
        /*Turkish Admin Version*/
        User::create([
            'username' => 'yonetici',
            'name' => 'Sistem Yöneticisi',
            'email' => 'yonetici@kalitesihirbazi.com.tr',
            'password' => Hash::make('kalitesihirbazi'),
            'locale' => 'tr'
        ]);

        /*English Admin Version*/
        User::create([
            'username' => 'admin',
            'name' => 'System Admin',
            'email' => 'admin@laraquality.dev',
            'password' => Hash::make('laraquality'),
            'locale' => 'en'
        ]);
    }
}
