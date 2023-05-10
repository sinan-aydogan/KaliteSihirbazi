<template>
<input type="file" id="file" :model-value="modelValue" @change="$emit('update:modelValue', $event.target.files[0])">
</template>

<script setup>

defineEmits(['update:modelValue'])

defineProps({
    modelValue: {
        type: File,
        default: null
    }
})
</script>
