<?php

namespace Database\Seeders;

use App\Models\Customer;
use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{
    public function run(): void
    {
        $customers = [
            ['code' => 'MST-001', 'name' => 'Akbulut Otomotiv San. ve Tic. A.Ş.', 'contact_name' => 'Ferhat Akbulut', 'phone' => '0212 555 10 21', 'email' => 'kalite@akbulutotomotiv.com.tr'],
            ['code' => 'MST-002', 'name' => 'Deniz Ambalaj Ltd. Şti.', 'contact_name' => 'Sevgi Deniz', 'phone' => '0224 555 33 44', 'email' => 'siparis@denizambalaj.com.tr'],
            ['code' => 'MST-003', 'name' => 'Karel Elektronik San. Tic. A.Ş.', 'contact_name' => 'Okan Karel', 'phone' => '0312 555 77 12', 'email' => 'satinalma@karelelektronik.com.tr'],
            ['code' => 'MST-004', 'name' => 'Yıldız Plastik Enjeksiyon Ltd. Şti.', 'contact_name' => 'Buse Yıldız', 'phone' => '0232 555 90 08', 'email' => 'kalite@yildizplastik.com.tr'],
            ['code' => 'MST-005', 'name' => 'Marmara Beyaz Eşya A.Ş.', 'contact_name' => 'Tolga Marmara', 'phone' => '0262 555 45 60', 'email' => 'tedarik@marmarabeyazesya.com.tr'],
        ];

        foreach ($customers as $customer) {
            Customer::updateOrCreate(['code' => $customer['code']], [...$customer, 'is_active' => true]);
        }
    }
}
