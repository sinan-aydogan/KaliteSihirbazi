<?php

namespace Database\Seeders\Audit;

use App\Models\AuditScope;
use App\Models\AuditType;
use Illuminate\Database\Seeder;

class AuditDefinitionSeeder extends Seeder
{
    public function run(): void
    {
        $types = [
            ['key' => 'internal', 'name' => 'İç Denetim', 'direction' => 'internal', 'sort_order' => 1],
            ['key' => 'certification', 'name' => 'Belgelendirme Denetimi', 'direction' => 'external', 'sort_order' => 2],
            ['key' => 'supplier', 'name' => 'Tedarikçi Denetimi', 'direction' => 'external', 'sort_order' => 3],
            ['key' => 'customer', 'name' => 'Müşteri Denetimi', 'direction' => 'external', 'sort_order' => 4],
        ];

        foreach ($types as $type) {
            AuditType::updateOrCreate(
                ['key' => $type['key']],
                [...$type, 'is_protected' => true]
            );
        }

        $scopes = [
            ['key' => 'product', 'name' => 'Ürün', 'sort_order' => 1],
            ['key' => 'system', 'name' => 'Sistem', 'sort_order' => 2],
            ['key' => 'process', 'name' => 'Proses', 'sort_order' => 3],
            ['key' => 'device', 'name' => 'Cihaz', 'sort_order' => 4],
        ];

        foreach ($scopes as $scope) {
            AuditScope::updateOrCreate(
                ['key' => $scope['key']],
                [...$scope, 'is_protected' => true]
            );
        }
    }
}
