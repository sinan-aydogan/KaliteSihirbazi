<?php

namespace Database\Seeders;

use App\Models\Bm\BusinessBranch;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BusinessBranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*Business center*/
        $businessCenter = new BusinessBranch([
            'name' => 'Ana Merkez',
            'description' => 'Ana merkez ofisi'
        ]);
        $businessCenter->save();
    }
}
