<?php

namespace Database\Seeders;

use App\Models\Hr\EmployeeType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EmployeeTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*Full-time*/
        $fullTime = new EmployeeType([
            'code' => 'full-time',
            'name' => [
                'en' => 'Full-time',
                'tr' => 'Tam Zamanlı',
            ],
        ]);
        $fullTime->save();

        /*Part-time*/
        $partTime = new EmployeeType([
            'code' => 'part-time',
            'name' => [
                'en' => 'Part-time',
                'tr' => 'Yarı Zamanlı',
            ],
        ]);
        $partTime->save();

        /*Intern*/
        $intern = new EmployeeType([
            'code' => 'intern',
            'name' => [
                'en' => 'Intern',
                'tr' => 'Stajyer',
            ],
        ]);
        $intern->save();

        /*Contractor*/
        $contractor = new EmployeeType([
            'code' => 'contractor',
            'name' => [
                'en' => 'Contractor',
                'tr' => 'Sözleşmeli',
            ],
        ]);
        $contractor->save();

        /*Temporary*/
        $temporary = new EmployeeType([
            'code' => 'temporary',
            'name' => [
                'en' => 'Temporary',
                'tr' => 'Geçici',
            ],
        ]);
        $temporary->save();

        /*Freelancer*/
        $freelancer = new EmployeeType([
            'code' => 'freelancer',
            'name' => [
                'en' => 'Freelancer',
                'tr' => 'Serbest Çalışan',
            ],
        ]);
        $freelancer->save();

        /*Remote*/
        $remote = new EmployeeType([
            'code' => 'remote',
            'name' => [
                'en' => 'Remote',
                'tr' => 'Uzaktan',
            ],
        ]);
        $remote->save();

        /*Consultant*/
        $consultant = new EmployeeType([
            'code' => 'consultant',
            'name' => [
                'en' => 'Consultant',
                'tr' => 'Danışman',
            ],
        ]);
        $consultant->save();

        /*Volunteer*/
        $volunteer = new EmployeeType([
            'code' => 'volunteer',
            'name' => [
                'en' => 'Volunteer',
                'tr' => 'Gönüllü',
            ],
        ]);
        $volunteer->save();

        /*Retiree*/
        $retiree = new EmployeeType([
            'code' => 'retiree',
            'name' => [
                'en' => 'Retiree',
                'tr' => 'Emekli',
            ],
        ]);
        $retiree->save();

        /*Other*/
        $other = new EmployeeType([
            'code' => 'other',
            'name' => [
                'en' => 'Other',
                'tr' => 'Diğer',
            ],
        ]);
        $other->save();

    }
}
