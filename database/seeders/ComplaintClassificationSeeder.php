<?php

namespace Database\Seeders;

use App\Models\ComplaintSourceType;
use App\Models\ComplaintSubject;
use Illuminate\Database\Seeder;

class ComplaintClassificationSeeder extends Seeder
{
    public function run(): void
    {
        $sourceTypes = [
            ['key' => 'internal', 'name' => 'İç', 'sort_order' => 1],
            ['key' => 'customer', 'name' => 'Müşteri', 'sort_order' => 2],
            ['key' => 'supplier', 'name' => 'Tedarikçi', 'sort_order' => 3],
            ['key' => 'distributor', 'name' => 'Dağıtıcı', 'sort_order' => 4],
        ];

        foreach ($sourceTypes as $type) {
            ComplaintSourceType::updateOrCreate(
                ['key' => $type['key']],
                [...$type, 'is_protected' => true]
            );
        }

        $subjects = [
            ['key' => 'product_quality', 'name' => 'Ürün Kalitesi', 'sort_order' => 1],
            ['key' => 'delivery_logistics', 'name' => 'Teslimat / Lojistik', 'sort_order' => 2],
            ['key' => 'billing_payment', 'name' => 'Fatura / Ödeme', 'sort_order' => 3],
            ['key' => 'service_support', 'name' => 'Hizmet / Destek', 'sort_order' => 4],
            ['key' => 'staff_conduct', 'name' => 'Personel Davranışı', 'sort_order' => 5],
            ['key' => 'other', 'name' => 'Diğer', 'sort_order' => 6],
        ];

        foreach ($subjects as $subject) {
            ComplaintSubject::updateOrCreate(
                ['key' => $subject['key']],
                [...$subject, 'is_protected' => false]
            );
        }
    }
}
