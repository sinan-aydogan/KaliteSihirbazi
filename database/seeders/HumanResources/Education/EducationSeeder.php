<?php

namespace Database\Seeders\HumanResources\Education;

use Illuminate\Database\Seeder;
use App\Models\HumanResources\Education\Education;
use App\Models\HumanResources\Education\EducationType;
use App\Models\HumanResources\Education\EducationInstructor;

class EducationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // eğitmenleri oluştur
        $instructors = EducationInstructor::count() ? EducationInstructor::all() : EducationInstructor::factory()->count(8)->create();

        // eğitim türlerini oluştur
        $educationTypes = EducationType::count() ? EducationType::all() : EducationType::factory()->count(5)->create();

        Education::factory()
            ->count(20)
            ->create()
            ->each(function (Education $education) use ($instructors, $educationTypes) {
                // eğitmen seçiyoruz
                $assignedInstructors = $instructors->random(rand(1, 2));
                // eğitim türü seçiyoruz
                $assignedEducationTypes = $educationTypes->random(rand(1, 2));

                // eğitim türlerini atıyoruz
                $assignedEducationTypes->each(function (EducationType $type) use ($education) {
                    $education->educationTypes()->attach($type->id);
                });

                // eğitmenleri atıyoruz
                $assignedInstructors->each(function (EducationInstructor $instructor) use ($education) {
                    $education->instructors()->attach($instructor->id, [
                        'role' => collect(['Eğitmen', 'Denetmen', 'Uygulama Ustası'])->random()
                    ]);
                });
            });
    }
}
