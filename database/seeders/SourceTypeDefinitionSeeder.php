<?php

namespace Database\Seeders;

use App\Models\CapaSourceType;
use App\Models\ProblemSourceType;
use Illuminate\Database\Seeder;

class SourceTypeDefinitionSeeder extends Seeder
{
    public function run(): void
    {
        $problemSourceTypes = [
            ['key' => 'audit_finding', 'name' => 'Denetim Bulgusu', 'sort_order' => 1],
            ['key' => 'customer_complaint', 'name' => 'Müşteri Şikayeti', 'sort_order' => 2],
            ['key' => 'internal_observation', 'name' => 'İç Gözlem', 'sort_order' => 3],
            ['key' => 'supplier', 'name' => 'Tedarikçi', 'sort_order' => 4],
            ['key' => 'risk_realization', 'name' => 'Risk Gerçekleşmesi', 'sort_order' => 5],
            ['key' => 'other', 'name' => 'Diğer', 'sort_order' => 6],
        ];

        foreach ($problemSourceTypes as $type) {
            ProblemSourceType::updateOrCreate(
                ['key' => $type['key']],
                [...$type, 'is_protected' => true]
            );
        }

        $capaSourceTypes = [
            ['key' => 'document_revision_request', 'name' => 'Doküman Revizyon Talebi', 'sort_order' => 1],
            ['key' => 'audit_finding', 'name' => 'Denetim Bulgusu', 'sort_order' => 2],
            ['key' => 'customer_complaint', 'name' => 'Müşteri Şikayeti', 'sort_order' => 3],
            ['key' => 'internal', 'name' => 'İç Kaynaklı', 'sort_order' => 4],
            ['key' => 'other', 'name' => 'Diğer', 'sort_order' => 5],
        ];

        foreach ($capaSourceTypes as $type) {
            CapaSourceType::updateOrCreate(
                ['key' => $type['key']],
                [...$type, 'is_protected' => true]
            );
        }
    }
}
