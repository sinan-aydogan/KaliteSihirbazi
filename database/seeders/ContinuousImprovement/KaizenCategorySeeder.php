<?php

namespace Database\Seeders\ContinuousImprovement;

use App\Models\ContinuousImprovement\KaizenCategory;
use Illuminate\Database\Seeder;

class KaizenCategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['key' => 'efficiency', 'name' => 'Verimlilik', 'sort_order' => 1],
            ['key' => 'quality', 'name' => 'Kalite', 'sort_order' => 2],
            ['key' => 'safety', 'name' => 'İş Güvenliği', 'sort_order' => 3],
            ['key' => 'cost', 'name' => 'Maliyet', 'sort_order' => 4],
            ['key' => 'environment', 'name' => 'Çevre', 'sort_order' => 5],
            ['key' => 'ergonomics', 'name' => 'Ergonomi', 'sort_order' => 6],
            ['key' => 'other', 'name' => 'Diğer', 'sort_order' => 7],
        ];

        foreach ($categories as $category) {
            KaizenCategory::updateOrCreate(
                ['key' => $category['key']],
                [...$category, 'is_protected' => $category['key'] === 'other']
            );
        }
    }
}
