<script setup>
import {computed, useSlots} from 'vue';

defineEmits(['submitted']);

defineProps({
  layout: {
    type: String,
    default: 'default'
  },
  gridSize: {
    type: Number,
    default: 6
  }
})

const hasActions = computed(() => !!useSlots().actions);
</script>

<template>
  <div class="md:grid md:gap-6" :class="{
        'md:grid-cols-3': layout === 'default',
        '': layout === 'basic'
    }">

    <div class="md:col-span-1 flex justify-between"
         v-if="$slots['title'] || $slots['description'] || $slots['aside']">
      <div class="px-4 sm:px-0" v-if="$slots['title'] || $slots['description']">
        <h3 v-if="$slots['title']" class="text-lg font-medium text-slate-700 dark:text-slate-100">
          <slot name="title"/>
        </h3>

        <p v-if="$slots['description']" class="mt-1 text-sm text-slate-500">
          <slot name="description"/>
        </p>
      </div>

      <div v-if="$slots['aside']" class="px-4 sm:px-0">
        <slot name="aside"/>
      </div>
    </div>

    <div class="mt-5 md:mt-0 md:col-span-2">
      <form @submit.prevent="$emit('submitted')">
        <div :class="[
                    hasActions ? 'sm:rounded-tl-md sm:rounded-tr-md' : 'sm:rounded-md',
                    {
                        'bg-white dark:bg-slate-700 dark:text-slate-100 shadow px-4 py-5 sm:p-6': layout === 'default',
                        '': layout === 'basic',
                    }
                ]">
          <div class="grid gap-6" :class="{
            'grid-cols-12' : gridSize === 12,
            'grid-cols-6' : gridSize === 6,
          }">
            <slot name="form"/>
            <slot/>
          </div>
        </div>

        <div v-if="hasActions"
             class="flex items-center justify-end px-4 py-3 dark:bg-slate-700 dark:border-t-2 dark:border-slate-800 dark:text-slate-100 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md">
          <slot name="actions"/>
        </div>
      </form>
    </div>
  </div>
</template>
