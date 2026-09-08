<?php

namespace Database\Seeders\Risk;

use App\Models\RiskCategory;
use App\Models\RiskHazardClass;
use Illuminate\Database\Seeder;

class RiskDefinitionSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['key' => 'quality', 'name' => 'Kalite', 'sort_order' => 1],
            ['key' => 'occupational_health_safety', 'name' => 'İSG', 'sort_order' => 2],
            ['key' => 'environmental', 'name' => 'Çevre', 'sort_order' => 3],
            ['key' => 'information_security', 'name' => 'Bilgi Güvenliği', 'sort_order' => 4],
            ['key' => 'financial', 'name' => 'Finansal', 'sort_order' => 5],
            ['key' => 'operational', 'name' => 'Operasyonel', 'sort_order' => 6],
            ['key' => 'strategic', 'name' => 'Stratejik', 'sort_order' => 7],
        ];

        foreach ($categories as $category) {
            RiskCategory::updateOrCreate(
                ['key' => $category['key']],
                [...$category, 'is_protected' => true]
            );
        }

        $hazardClasses = [
            ['key' => 'physical', 'name' => 'Fiziksel', 'sort_order' => 1],
            ['key' => 'chemical', 'name' => 'Kimyasal', 'sort_order' => 2],
            ['key' => 'biological', 'name' => 'Biyolojik', 'sort_order' => 3],
            ['key' => 'ergonomic', 'name' => 'Ergonomik', 'sort_order' => 4],
            ['key' => 'psychosocial', 'name' => 'Psikososyal', 'sort_order' => 5],
            ['key' => 'mechanical', 'name' => 'Mekanik', 'sort_order' => 6],
            ['key' => 'electrical', 'name' => 'Elektriksel', 'sort_order' => 7],
            ['key' => 'fire_explosion', 'name' => 'Yangın/Patlama', 'sort_order' => 8],
            ['key' => 'environmental_impact', 'name' => 'Çevresel Etki', 'sort_order' => 9],
            ['key' => 'information_security_breach', 'name' => 'Bilgi Güvenliği İhlali', 'sort_order' => 10],
            ['key' => 'operational_disruption', 'name' => 'Operasyonel Aksama', 'sort_order' => 11],
            ['key' => 'compliance_legal', 'name' => 'Uygunluk/Yasal', 'sort_order' => 12],
        ];

        foreach ($hazardClasses as $hazardClass) {
            RiskHazardClass::updateOrCreate(
                ['key' => $hazardClass['key']],
                [...$hazardClass, 'is_protected' => true]
            );
        }
    }
}
