<?php

namespace Database\Factories\HumanResources\Education;

use App\Models\HumanResources\Education\EducationType;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<EducationType>
 */
class EducationTypeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->unique()->randomElement([
                'İş Sağlığı ve Güvenliği',
                'Teknik Eğitim',
                'Yönetimsel Eğitim',
                'Kişisel Gelişim',
                'Kalite Yönetimi',
                'Çevre Yönetimi',
                'Bilgi Güvenliği',
                'Mesleki Gelişim',
                'Liderlik Eğitimi',
                'İletişim Becerileri',
                'Proje Yönetimi',
                'Satış ve Pazarlama',
                'Finansal Okuryazarlık',
                'Dijital Dönüşüm',
                'Yaratıcılık ve İnovasyon',
            ]),
        ];
    }
}
