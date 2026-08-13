<script setup>
import SimpleButton from "@/Components/Button/SimpleButton.vue"

defineProps({
  message: String,
  addNewText: String,
  addNewCallback: Function
})
</script>

<template>
  <div class="flex w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500 shadow-sm shadow-slate-200/60 dark:border-slate-500 dark:bg-slate-700/60 dark:text-slate-300 dark:shadow-black/10">
    <div class="flex size-11 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
      <font-awesome-icon icon="inbox" class="size-5"/>
    </div>
    <span v-text="message" class="text-sm"></span>
    <simple-button v-if="addNewCallback" @click="addNewCallback" :label="addNewText ? addNewText : t('action.addNew')" full-size size="slim"/>
  </div>
</template>
