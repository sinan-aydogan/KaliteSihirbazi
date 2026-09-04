<?php

namespace App\Services;

use App\Enums\DateFormat;
use App\Enums\TimeFormat;
use App\Models\Setting;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use DateTimeInterface;

/**
 * Central place for turning raw values into their display representation
 * (and back), driven by settings the user configures under Settings ->
 * Zaman Ayarı. Currently covers date/time; the same pattern (a Setting-backed
 * preset enum + a service that reads it) is meant to be reused for future
 * formats such as currency or weight.
 */
class FormatService
{
    private const DATE_FORMAT_CODE = 'global_date_format';

    private const TIME_FORMAT_CODE = 'global_time_format';

    private const DEFAULT_DATE_FORMAT = DateFormat::DMY_DOT;

    private const DEFAULT_TIME_FORMAT = TimeFormat::H24;

    public function dateFormat(): DateFormat
    {
        return DateFormat::tryFrom((string) Setting::where('code', self::DATE_FORMAT_CODE)->value('value'))
            ?? self::DEFAULT_DATE_FORMAT;
    }

    public function timeFormat(): TimeFormat
    {
        return TimeFormat::tryFrom((string) Setting::where('code', self::TIME_FORMAT_CODE)->value('value'))
            ?? self::DEFAULT_TIME_FORMAT;
    }

    public function date(DateTimeInterface|string|null $value): ?string
    {
        return $this->formatWith($value, $this->dateFormat()->carbonFormat());
    }

    public function time(DateTimeInterface|string|null $value): ?string
    {
        return $this->formatWith($value, $this->timeFormat()->carbonFormat());
    }

    public function dateTime(DateTimeInterface|string|null $value): ?string
    {
        return $this->formatWith($value, $this->dateFormat()->carbonFormat().' '.$this->timeFormat()->carbonFormat());
    }

    /**
     * The currently configured formats, shaped for sharing with the frontend
     * (see HandleInertiaRequests::share -> 'formatSettings').
     */
    public function settingsForFrontend(): array
    {
        return [
            'dateFormat' => $this->dateFormat()->value,
            'timeFormat' => $this->timeFormat()->value,
        ];
    }

    private function formatWith(DateTimeInterface|string|null $value, string $format): ?string
    {
        if ($value === null || $value === '') {
            return null;
        }

        /** @var CarbonInterface $carbon */
        $carbon = $value instanceof DateTimeInterface ? Carbon::instance($value) : Carbon::parse($value);

        return $carbon->format($format);
    }
}
