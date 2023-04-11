<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            /*Document Settings*/
            [
                'code' => 'document_naming_rule',
                'module' => 'document',
                'type' => 'string',
                'value' => 'auto'
            ]
        ];

        foreach ($settings as $s) {
            $setting = new Setting();
            $setting['code'] = $s['code'];
            $setting['module'] = $s['module'];
            $setting['type'] = $s['type'];
            $setting['value'] = $s['value'];
            $setting->save();
        }
    }
}
