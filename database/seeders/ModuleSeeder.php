<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Setting\Module;
use Illuminate\Support\Str;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Module::create([
            "code" => "Core",
            "name" => "Core Modules",
            "description" => "Management of the core content",
            "licence_key" => Str::random(12),
            "status" => true
        ]);

        Module::create([
            "code" => "WRH",
            "name" => "Stock Management",
            "description" => "Management of the stocks",
            "licence_key" => Str::random(12),
            "status" => true
        ]);

        Module::create([
            "code" => "VHC",
            "name" => "Vehicle Management",
            "description" => "Control of the vehicles",
            "licence_key" => Str::random(12),
            "status" => true
        ]);

        Module::create([
            "code" => "HRM",
            "name" => "Human Resources",
            "description" => "Management of the staff",
            "licence_key" => Str::random(12),
            "status" => true
        ]);

        Module::create([
            "code" => "MNT",
            "name" => "Maintenance Management",
            "description" => "Management of the machines and the maintenance orders",
            "licence_key" => Str::random(12),
            "status" => true
        ]);

        Module::create([
            "code" => "PT",
            "name" => "Product Tree",
            "description" => "Management of the product trees",
            "licence_key" => Str::random(12),
            "status" => true
        ]);

        Module::create([
            "code" => "MDO",
            "name" => "Measurement Devices Ownership",
            "description" => "Management of the Measurement Devices Ownership",
            "licence_key" => Str::random(12),
            "status" => true
        ]);

        Module::create([
            "code" => "PER",
            "name" => "Periodical Event Reminders",
            "description" => "Reminder feature for periodical events",
            "licence_key" => Str::random(12),
            "status" => true
        ]);

        Module::create([
            "code" => "CIS",
            "name" => "Continues Improvement System",
            "description" => "Kai zen management for continues improvement of the business",
            "licence_key" => Str::random(12),
            "status" => true
        ]);
    }
}
