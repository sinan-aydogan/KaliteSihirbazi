<script setup>
defineProps({
  src: String,
  size: {
    type: String,
    default: 'md'
  },
  color: {
    type: String,
    default: 'slate'
  }
})
</script>

<template>
  <img :src="src" class="avatar" :class="`avatar-${size}`">
</template>

<style lang="sass">
.avatar
  @apply flex justify-center items-center rounded-full border-2 p-0.5

.avatar-sm
  @apply w-4 h-4

.avatar-md
  @apply w-8 h-8

.avatar-lg
  @apply w-12 h-12

.avatar-slate
  @apply border-slate-500

.avatar-red
  @apply border-rose-500

.avatar-green
  @apply border-emerald-500

.avatar-orange
  @apply border-amber-500
</style>