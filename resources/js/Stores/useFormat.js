import { defineStore } from "pinia";
import { ref, computed } from "vue";
import dayjs from "dayjs";

/**
 * Canonical list of selectable date/time display formats.
 * Keep in sync with the backend counterparts: app/Enums/DateFormat.php, app/Enums/TimeFormat.php
 */
export const DATE_FORMAT_OPTIONS = ['DD.MM.YYYY', 'DD/MM/YYYY', 'DD-MM-YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD'];
export const TIME_FORMAT_OPTIONS = ['HH:mm', 'HH:mm:ss', 'hh:mm A'];

const DEFAULT_DATE_FORMAT = 'DD.MM.YYYY';
const DEFAULT_TIME_FORMAT = 'HH:mm';

/**
 * Central place to turn raw values into their display representation
 * (and back), driven by the app-wide date/time format configured under
 * Settings -> Zaman Ayarı. The same pattern (settings-driven presets +
 * a store exposing display/parse helpers) is meant to be reused for
 * future formats such as currency or weight.
 */
export const useFormat = defineStore('format', () => {
    const dateFormat = ref(DEFAULT_DATE_FORMAT);
    const timeFormat = ref(DEFAULT_TIME_FORMAT);

    const dateTimeFormat = computed(() => `${dateFormat.value} ${timeFormat.value}`);

    // Called once on app boot with the Inertia-shared `formatSettings` prop.
    function init(settings) {
        if (settings?.dateFormat && DATE_FORMAT_OPTIONS.includes(settings.dateFormat)) {
            dateFormat.value = settings.dateFormat;
        }
        if (settings?.timeFormat && TIME_FORMAT_OPTIONS.includes(settings.timeFormat)) {
            timeFormat.value = settings.timeFormat;
        }
    }

    function date(value) {
        if (!value) return '';
        const parsed = dayjs(value);
        return parsed.isValid() ? parsed.format(dateFormat.value) : '';
    }

    function time(value) {
        if (!value) return '';
        const parsed = dayjs(value);
        return parsed.isValid() ? parsed.format(timeFormat.value) : '';
    }

    function dateTime(value) {
        if (!value) return '';
        const parsed = dayjs(value);
        return parsed.isValid() ? parsed.format(dateTimeFormat.value) : '';
    }

    // For binding a raw value to a native <input type="date">, which always
    // requires ISO (YYYY-MM-DD) regardless of the configured display format.
    function toInputDate(value) {
        if (!value) return null;
        const parsed = dayjs(value);
        return parsed.isValid() ? parsed.format('YYYY-MM-DD') : null;
    }

    return {dateFormat, timeFormat, dateTimeFormat, init, date, time, dateTime, toInputDate};
});
