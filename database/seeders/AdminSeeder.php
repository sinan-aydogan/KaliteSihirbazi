<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Turkish user
        $turkishUser = new User([
            'name' => 'Sistem Yöneticisi',
            'email' => 'yonetici@kalitesihirbazi.com.tr',
            'password' => bcrypt('admin'),
            'email_verified_at' => now(),
            'locale' => 'tr',
        ]);
        $turkishUser->save();

        // English user
        $englishUser = new User([
            'name' => 'System Administrator',
            'email' => 'admin@laraquality.dev',
            'password' => bcrypt('admin'),
            'email_verified_at' => now(),
            'locale' => 'en',
        ]);
        $englishUser->save();
    }
}
