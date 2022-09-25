<script setup>
import {Link} from "@inertiajs/inertia-vue3";
import {computed} from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  color: {
    type: String,
    default: 'blue'
  },
  size: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  },
  fullSize: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  },
  link: String,
  loading: Boolean
})

const colors = {
  blue: 'bg-sky-600 hover:bg-sky-500 text-sky-50 focus:ring-sky-600',
  red: 'bg-rose-600 hover:bg-red-500 text-rose-50 focus:ring-rose-600',
  green: 'bg-green-600 hover:bg-green-500 text-green-50 focus:ring-green-600',
  orange: 'bg-amber-600 hover:bg-amber-500 hover:bg-amber-500 text-amber-50 focus:ring-amber-600',
  neutral: 'bg-slate-600 hover:bg-slate-500 dark:bg-slate-600/75 dark:hover:bg-slate-500/75 text-slate-50 focus:ring-slate-600',
}

const componentType = computed(() => {
  if (props['link'] && props.type === 'route') {
    return Link
  }
  if (props['link'] && props.type === 'external') {
    return 'a'
  }
  if (!props['link']) {
    return 'button'
  }
})
</script>

<template>
  <div class="flex" :class="fullSize ? 'w-full' : 'w-fit'">
    <component
        :is="componentType"
        :type="type"
        :href="link ? link : ''"
        class="flex min-h-[2rem] items-center justify-center whitespace-nowrap rounded-md border border-transparent space-x-2 px-4 py-2 text-sm font-medium text-white shadow-sm tracking-widest focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-25 disabled:cursor-not-allowed transition"
        :class="[
                    colors[color],
                    {
                        'h-8 px-2' : size === 'slim',
                        'w-full' : fullSize,
                        'bg-opacity-25 pointer-events-none': loading
                    }
                    ]"
        :disabled="disabled"
        @click="$emit('handleClick')"
    >
      <!--Loading-->
      <div v-if="loading"
           class="h-full aspect-square border-2 border-b-transparent animate-spin rounded-full opacity-100"></div>
      <!--Label-->
      <span v-text="label" v-if="label"/>
      <!--Label Slot-->
      <slot v-else></slot>
    </component>
  </div>
</template>

