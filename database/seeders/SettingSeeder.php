<?php

namespace Database\Seeders;

use App\Enums\DateFormat;
use App\Enums\TimeFormat;
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
            ],
            [
                'code' => 'document_allowed_file_types',
                'module' => 'document',
                'type' => 'json',
                'value' => json_encode(['pdf', 'doc', 'docx', 'xls', 'xlsx'])
            ],
            [
                'code' => 'document_max_file_size',
                'module' => 'document',
                'type' => 'json',
                'value' => json_encode(['size' => 10, 'unit' => 'MB'])
            ],
            /*Global Settings*/
            [
                'code' => 'global_date_format',
                'module' => 'global',
                'type' => 'string',
                'value' => DateFormat::DMY_DOT->value
            ],
            [
                'code' => 'global_time_format',
                'module' => 'global',
                'type' => 'string',
                'value' => TimeFormat::H24->value
            ],
            /*Education Settings*/
            [
                'code' => 'education_allowed_file_types',
                'module' => 'education',
                'type' => 'json',
                'value' => json_encode(['pdf', 'doc', 'docx', 'xls', 'xlsx', 'jpg', 'jpeg', 'png'])
            ],
            [
                'code' => 'education_max_file_size',
                'module' => 'education',
                'type' => 'json',
                'value' => json_encode(['size' => 10, 'unit' => 'MB'])
            ],
            /*Audit Settings*/
            [
                'code' => 'audit_external_requires_internal_first',
                'module' => 'audit',
                'type' => 'json',
                'value' => json_encode(false)
            ],
            [
                'code' => 'audit_internal_prerequisite_window_days',
                'module' => 'audit',
                'type' => 'json',
                'value' => json_encode(365)
            ],
        ];

        foreach ($settings as $s) {
            Setting::updateOrCreate(
                ['code' => $s['code']],
                ['module' => $s['module'], 'type' => $s['type'], 'value' => $s['value']]
            );
        }
    }
}
