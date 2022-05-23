<template>
    <div class="inline-flex items-center space-x-2" @click="$emit('update:modelValue', value)">
        <input type="radio" :value="value" :checked="modelValue === value" @change="$emit('update:modelValue', value)"/>
        <span>{{label}}</span>
    </div>
</template>

<script setup>
const props = defineProps({
    value: {
        type: [String, Number, Boolean, Date],
        default: '',
    },
    modelValue: {
        type: [String, Number, Boolean, Date],
        default: '',
    },
    label: {
        type: String,
        default: '',
    },
})
</script>
