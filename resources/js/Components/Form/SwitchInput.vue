<script setup>
defineProps({
  modelValue: Boolean
})
defineEmits(['update:modelValue'])
</script>
<template>
  <div
      @click="$emit('update:modelValue', !modelValue)"
      class="flex rounded-full h-8 items-center w-14 cursor-pointer transition"
      :class="[
            {
                'bg-indigo-500' : modelValue,
                'bg-slate-300' : !modelValue,
            }
        ]"
  >
    <!--Circle-->
    <div
        class="flex flex-shrink-0 w-6 h-6 bg-white rounded-full shadow transition-all"
        :class="[
                {
                    'ml-[.25rem]' : !modelValue,
                    'ml-[1.75rem]' : modelValue
                }
            ]"
    >

    </div>

  </div>
</template>