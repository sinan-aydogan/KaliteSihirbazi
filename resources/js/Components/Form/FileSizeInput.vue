<script>
/**
 * Keep in sync with the backend counterpart: app/Enums/FileSizeUnit.php
 */
export const FILE_SIZE_UNITS = ['KB', 'MB', 'GB'];
</script>

<script setup>
import { computed } from "vue";
import TextInput from "@/Components/Form/TextInput.vue";
import SelectInput from "@/Components/Form/SelectInput.vue";

const props = defineProps({
    // { size: Number, unit: 'KB'|'MB'|'GB' }
    modelValue: {
        type: Object,
        default: () => ({ size: 1, unit: 'MB' }),
    },
    disabled: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const unitOptions = FILE_SIZE_UNITS.map((unit) => ({ value: unit, label: unit }));

const size = computed({
    get: () => props.modelValue?.size ?? '',
    set: (value) => emit('update:modelValue', { ...props.modelValue, size: value === '' ? '' : Number(value) }),
});

const unit = computed({
    get: () => props.modelValue?.unit ?? 'MB',
    set: (value) => emit('update:modelValue', { ...props.modelValue, unit: value }),
});
</script>

<template>
    <div class="flex items-center gap-2">
        <div class="w-28">
            <text-input v-model="size" input-type="number" :min="1" :disabled="disabled" placeholder="1"/>
        </div>
        <div class="w-28">
            <select-input v-model="unit" :options="unitOptions" option-key="value" :disabled="disabled"/>
        </div>
    </div>
</template>
