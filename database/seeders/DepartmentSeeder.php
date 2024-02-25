<?php

namespace Database\Seeders;

use App\Models\Hr\Department;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*Quality*/
        $quality = new Department([
            'code' => 'QC',
            'name' => [
                'tr' => 'Kalite',
                'en' => 'Quality'
            ]
        ]);
        $quality->save();

        /*Production*/
        $production = new Department([
            'code' => 'PRD',
            'name' => [
                'tr' => 'Üretim',
                'en' => 'Production'
            ]
        ]);
        $production->save();

        /*Sales*/
        $sales = new Department([
            'code' => 'SAL',
            'name' => [
                'tr' => 'Satış',
                'en' => 'Sales'
            ]
        ]);
        $sales->save();

        /*Purchasing*/
        $purchasing = new Department([
            'code' => 'PUR',
            'name' => [
                'tr' => 'Satınalma',
                'en' => 'Purchasing'
            ]
        ]);
        $purchasing->save();

        /*Marketing*/
        $marketing = new Department([
            'code' => 'MAR',
            'name' => [
                'tr' => 'Pazarlama',
                'en' => 'Marketing'
            ]
        ]);
        $marketing->save();

        /*Finance*/
        $finance = new Department([
            'code' => 'FIN',
            'name' => [
                'tr' => 'Finans',
                'en' => 'Finance'
            ]
        ]);
        $finance->save();

        /*Human Resources*/
        $hr = new Department([
            'code' => 'HR',
            'name' => [
                'tr' => 'İnsan Kaynakları',
                'en' => 'Human Resources'
            ]
        ]);
        $hr->save();

        /*Logistics*/
        $logistics = new Department([
            'code' => 'LOG',
            'name' => [
                'tr' => 'Lojistik',
                'en' => 'Logistics'
            ]
        ]);
        $logistics->save();

        /*IT*/
        $it = new Department([
            'code' => 'IT',
            'name' => [
                'tr' => 'Bilgi Teknolojileri',
                'en' => 'Information Technologies'
            ]
        ]);
        $it->save();

        /*R&D*/
        $rd = new Department([
            'code' => 'RD',
            'name' => [
                'tr' => 'Araştırma Geliştirme',
                'en' => 'Research & Development'
            ]
        ]);
        $rd->save();

        /*Administrative Affairs*/
        $general = new Department([
            'code' => 'AF',
            'name' => [
                'tr' => 'İdari İşler',
                'en' => 'Administrative Affairs'
            ]
        ]);
        $general->save();
    }
}
