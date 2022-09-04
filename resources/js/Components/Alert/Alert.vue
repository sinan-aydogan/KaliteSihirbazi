<script setup>
defineProps({
  type: {
    type: String,
    default: 'warning'
  }
})
const colors = {
  success: 'bg-emerald-600/10 text-emerald-700 border border-emerald-500/75',
  warning: 'bg-amber-600/10 text-amber-700 border border-amber-500/75',
  danger: 'bg-rose-600/10 text-rose-700 border border-rose-500/75',
  info: 'bg-sky-600/10 text-sky-700 border border-sky-500/75',
  neutral: 'bg-slate-600/10 text-slate-700 border border-slate-500/75',
}
</script>

<template>
<div class="p-4 rounded-lg text-center" :class="colors[type]">
  <slot/>
</div>
</template>