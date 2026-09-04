<script>
/**
 * Canonical list of selectable file extensions.
 * Keep in sync with the backend counterpart: app/Enums/FileType.php
 */
export const FILE_TYPE_VALUES = [
    'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx',
    'txt', 'csv', 'zip', 'rar',
    'jpg', 'jpeg', 'png', 'gif', 'webp', 'svg',
    'mp4', 'mp3',
];

/**
 * Builds an <input type="file" accept="..."> value from a list of extensions.
 */
export function fileTypesToAcceptAttribute(extensions) {
    return (extensions || []).map((extension) => `.${extension}`).join(',');
}
</script>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import MultiSelectInput from "@/Components/Form/MultiSelectInput.vue";

const { t } = useI18n();

const props = defineProps({
    modelValue: {
        type: Array,
        default: () => [],
    },
    disabled: Boolean,
    maxVisible: {
        type: Number,
        default: 5,
    },
});

defineEmits(['update:modelValue']);

const options = computed(() => FILE_TYPE_VALUES.map((value) => ({
    value,
    label: t(`fileType.${value}`),
})));
</script>

<template>
    <MultiSelectInput
        :model-value="modelValue"
        @update:model-value="$emit('update:modelValue', $event)"
        :options="options"
        option-key="value"
        option-label="label"
        :disabled="disabled"
        :max-visible="maxVisible"
    />
</template>
