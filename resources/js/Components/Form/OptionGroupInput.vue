<template>
    <input type="radio" @change="$emit('update:modelValue', event.target.value)"/>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: [String, Number, Boolean, Date],
        default: '',
    },
})
</script>
