<script setup>
import {inject} from "vue";

defineProps({
  title: String,
  description: String,
  grid: Boolean,
  bgLess: Boolean
})

const fullSize = inject('fullSize', false)
</script>

<template>
  <!--Section Wrapper-->
  <div :class="{
    'space-y-2' : fullSize,
    'grid grid-cols-1 sm:grid-cols-12 gap-6' : !fullSize,
  }">
    <div
        class="section-header"
        :class="{
          'md:col-span-3': !fullSize
        }"
    >
      <div>
        <!--Section Title-->
        <h3 v-if="$slots['title'] || title" class="title">
          <slot v-if="$slots['title']" name="title"/>
          <span v-text="title"></span>
        </h3>

        <!--Section Description-->
        <p v-if="$slots['description'] || description" class="description">
          <slot v-if="$slots['description']" name="description"/>
          <span v-text="description"></span>

        </p>
      </div>

      <div v-if="$slots['aside']" class="px-4 sm:px-0">
        <slot name="aside"/>
      </div>
    </div>

    <!--Content-->
    <div :class="{
      'col-span-9': !fullSize
    }">
      <div
          class="section-content"
          :class="{
             'p-4 rounded-lg' : !$slots['actions'],
             'px-4 pt-4 rounded-t-lg' : $slots['actions'],
             'grid grid-cols-12 gap-2' : grid,
             'space-y-4' : !grid,
             'bg-white dark:bg-slate-600 shadow' : !bgLess,
             'p-0': bgLess
          }"
      >
        <slot></slot>
      </div>

      <!--Actions-->
      <div v-if="$slots['actions']" class="section-action">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.section-header
  @apply flex justify-between

.title
  @apply text-lg font-medium text-slate-700 dark:text-slate-100

.description
  @apply mt-1 text-xs text-slate-500 dark:text-slate-400

.section-content
  @apply text-slate-700 dark:text-slate-100

.section-action
  @apply flex items-center justify-center sm:justify-end space-x-2 p-4 rounded-b-lg bg-white dark:bg-slate-600 dark:text-slate-100
</style>
