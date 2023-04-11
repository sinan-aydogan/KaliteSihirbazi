<script setup>
import {computed, provide, useSlots} from 'vue';

defineEmits(['submitted', 'reset']);

const props = defineProps({
  hasHeader: Boolean,
  title: String,
  description: String,
  multipart: Boolean,
  method: {
    type: String,
    default: 'post'
  },
  fullSize: Boolean
})

provide('design', props.design)
provide('fullSize', props.fullSize)

const hasActions = computed(() => !!useSlots().actions);
</script>

<template>
  <div class="form-wrapper">

    <!--Header Wrapper-->
    <div class="form-header" v-if="hasHeader">
      <!--Left Side: Title, Description-->
      <div>
        <!--Title-->
        <h3 v-if="$slots['title'] || title">
          <slot v-if="$slots['title']" name="title"/>
          <span v-else v-text="title" class="title"></span>
        </h3>

        <!--Description-->
        <p v-if="$slots['description'] || description" class="description">
          <slot v-if="$slots['description']" name="description"/>
          <span v-else v-text="description" class="description"></span>
        </p>
      </div>

      <!--Right Side: Aside-->
      <div v-if="$slots['aside']" class="aside">
        <slot name="aside"/>
      </div>
    </div>

    <!--Form Content-->
    <form
        :enctype="multipart ? 'multipart/form-data' : 'application/x-www-form-urlencoded'"
        :method="method"
        @submit.prevent="$emit('submitted')"
    >

      <div class="space-y-2">
        <slot name="form"/><slot/>
      </div>

      <div v-if="hasActions" class="form-actions">
        <slot name="actions"/>
      </div>
    </form>
  </div>
</template>

<style lang="sass">
.form-wrapper
  @apply flex flex-col space-y-4

.form-header
  @apply flex flex-col sm:flex-row sm:justify-between

.title
  @apply text-lg font-medium text-slate-700 dark:text-slate-100

.description
  @apply mt-1 text-xs text-slate-500 dark:text-slate-400

.aside
  @apply mt-1 sm:mt-0 flex items-center
.form-actions
  @apply flex items-center justify-center sm:justify-end mt-4 space-x-2 dark:text-slate-100
</style>
