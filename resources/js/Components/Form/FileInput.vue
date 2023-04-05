<template>
<input type="file" id="file" :model-value="modelValue" @change="$emit('update:modelValue', file)">
</template>

<script setup>
import {ref} from "vue";

defineProps({
    modelValue: {
        type: File,
        default: null
    }
})

const file = ref(null)
</script>
