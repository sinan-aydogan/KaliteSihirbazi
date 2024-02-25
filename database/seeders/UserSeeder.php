<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*Human Resources Turkish Supervisor*/
        $hrTrSupervisor = new User([
            'name' => 'İnsan Kaynakları Sorumlusu',
            'email' => 'ik@kalitesihirbazi.com.tr',
            'password' => bcrypt('insankaynaklari'),
            'email_verified_at' => now(),
            'locale' => 'tr'
        ]);
        $hrTrSupervisor->save();
        $hrTrSupervisor->assignRole('Human Resources');

        /*Human Resources English Supervisor*/
        $hrEnSupervisor = new User([
            'name' => 'Human Resources Supervisor',
            'email' => 'hr@laraquality.dev',
            'password' => bcrypt('humanresources'),
            'email_verified_at' => now(),
            'locale' => 'en'
        ]);
        $hrEnSupervisor->save();
        $hrEnSupervisor->assignRole('Human Resources');

    }
}
