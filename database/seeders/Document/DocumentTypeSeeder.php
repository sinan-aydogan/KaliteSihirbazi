<?php

namespace Database\Seeders\Document;

use Illuminate\Database\Seeder;

class DocumentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $types = [
            [
                'code' => 'FR',
                'name' => 'Form',
            ],
            [
                'code' => 'QP',
                'name' => 'Quality Plan',
            ],
            [
                'code' => 'PR',
                'name' => 'Procedure',
            ],
            [
                'code' => 'WM',
                'name' => 'Working Manual',
            ]
        ];

        foreach ($types as $type) {
            \App\Models\Document\DocumentType::create($type);
        }
    }
}
