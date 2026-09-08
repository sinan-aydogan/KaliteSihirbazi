<?php

namespace App\Traits;

use Illuminate\Support\Facades\DB;

trait HasSequentialCode
{
    protected static function nextSequentialCode(string $prefix): string
    {
        return DB::transaction(function () use ($prefix) {
            $year = now()->year;
            $pattern = "{$prefix}-{$year}-%";

            $maxSequence = static::query()
                ->where('code', 'like', $pattern)
                ->lockForUpdate()
                ->pluck('code')
                ->map(fn (string $code) => (int) substr($code, strrpos($code, '-') + 1))
                ->max() ?? 0;

            return sprintf('%s-%d-%03d', $prefix, $year, $maxSequence + 1);
        });
    }
}
