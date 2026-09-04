<?php

namespace App\Services\Setting;

use App\Models\Setting;

/**
 * Persists a batch of generic settings coming from a settings page form,
 * where each field is posted as `{code: {value, type}}` (see e.g.
 * Document/Setting/IndexPage.vue and Setting/TimeSetting.vue). Shared by
 * every settings controller that edits rows in the generic `settings` table
 * so the value <-> storage-format handling (json_encode for array/object
 * values) lives in exactly one place.
 */
class SettingBulkUpdater
{
    /**
     * @param  array<string, array{value: mixed, type: string}>  $payload
     */
    public function update(array $payload): void
    {
        foreach ($payload as $code => $entry) {
            $setting = Setting::where('code', $code)->first();

            if (!$setting || !is_array($entry) || !array_key_exists('value', $entry)) {
                continue;
            }

            $setting->value = ($entry['type'] ?? null) === 'json'
                ? json_encode($entry['value'])
                : $entry['value'];
            $setting->save();
        }
    }
}
