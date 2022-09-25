<script setup>
import SimpleButton from "@/Components/Button/SimpleButton.vue"

defineProps({
  message: String,
  addNewText: String,
  addNewCallback: Function
})
</script>

<template>
  <div class="flex flex-col bg-slate-600 p-6 space-y-6 justify-center items-center rounded w-full border border-dashed">
    <span v-text="message"></span>
    <simple-button @click="addNewCallback" :label="addNewText ? addNewText : t('action.addNew')" full-size size="slim"/>
  </div>
</template>