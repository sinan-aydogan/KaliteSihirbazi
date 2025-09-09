<?php

namespace Database\Factories\HumanResources\Education;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\HumanResources\Education\EducationPlan;
use App\Models\HumanResources\Education\EducationType;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HumanResources\Education\Education>
 */
class EducationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $isCompleted = $this->faker->boolean(30); // %30 ihtimalle tamamlanmış
        $isCancelled = $isCompleted ? false : $this->faker->boolean(10); // Tamamlanmışsa iptal olmaz

        // Eğitim tamamlanmışsa geçmiş tarihte planlanmış olmalı
        if ($isCompleted) {
            $plannedDate = $this->faker->dateTimeBetween('-6 months', '-1 month');
            $performedDate = $this->faker->dateTimeBetween($plannedDate, 'now');
        } else {
            // Tamamlanmamışsa gelecek tarihte planlanmalı
            $plannedDate = $this->faker->dateTimeBetween('now', '+6 months');
            $performedDate = null;
        }

        return [
            'education_plan_id' => EducationPlan::factory(),
            'name' => $this->faker->randomElement([
                'İş Sağlığı ve Güvenliği Temel Eğitimi',
                'Kalite Yönetim Sistemi Eğitimi',
                'Liderlik ve Ekip Yönetimi',
                'İletişim Becerileri Geliştirme',
                'Proje Yönetimi Temelleri',
                'Dijital Dönüşüm Eğitimi',
                'Müşteri Hizmetleri Eğitimi',
                'Satış Teknikleri',
                'Çevre Yönetimi Eğitimi',
                'Bilgi Güvenliği Farkındalık Eğitimi',
                'Finansal Okuryazarlık',
                'Yaratıcılık ve İnovasyon',
                'Stres Yönetimi',
                'Zaman Yönetimi',
                'Sunum Teknikleri'
            ]),
            'description' => $this->faker->paragraph(3),
            'planned_date' => $plannedDate->format('Y-m-d'),
            'performed_date' => $performedDate ? $performedDate->format('Y-m-d') : null,
            'duration' => $this->faker->randomElement([60, 90, 120, 180, 240, 300, 360, 480]), // Dakika cinsinden
            'is_completed' => $isCompleted,
            'is_cancelled' => $isCancelled,
            'cancel_reason' => $isCancelled ? $this->faker->randomElement([
                'Eğitmen müsait değil',
                'Katılımcı sayısı yetersiz',
                'Teknik problemler',
                'Planlama değişikliği',
                'Bütçe kısıtlaması'
            ]) : null,
        ];
    }
}
