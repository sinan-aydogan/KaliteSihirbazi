<script setup>
import {ref} from "vue";
import {onClickOutside} from "@vueuse/core";

const props = defineProps({
  modelValue: {
    type: [String, Number, Date, Boolean],
    default: null
  },
  options: {
    type: Array,
    default: () => []
  },
  optionKey: {
    type: String,
    default: "id"
  },
  optionLabel: {
    type: String,
    default: "label"
  },
  selectText: {
    type: String,
    default: ''
  },
  disabled: Boolean
});

const emit = defineEmits(['update:modelValue'])

/*Outside click*/
const target = ref();
onClickOutside(target, (event) => showOptions.value = false);

/*Show Options*/
const showOptions = ref();
const toggle = () => {
  showOptions.value = !showOptions.value
}

/*Select*/
const select = (option) => {
  if(option){
    emit("update:modelValue", option[props.optionKey]);
    showOptions.value = false;
  }
}

/*Clear*/
const clear = () => {
  showOptions.value = false;
  emit("update:modelValue", null);
}
</script>

<template>
  <div class="relative space-y-1 gap-1" ref="target">
    <!--Place holder-->
    <div @click="toggle"
         class="flex justify-between items-center space-x-2 h-10 dark:bg-slate-900/30 border border-slate-300 dark:border-slate-600 px-4 py-2 rounded-lg cursor-pointer select-none w-full"
         :class="{
                'opacity-50 pointer-events-none': disabled
            }">
      <div class="block overflow-hidden whitespace-nowrap">
        <!--Placeholder-->
        <span v-if="typeof modelValue === 'boolean' ? false : !modelValue"
              v-text="selectText.length > 0 ? selectText : t('action.select')"></span>
        <!--Selected-->
        <div v-else>
          <slot v-if="$slots.hasOwnProperty('selected')" name="selected" :props="options.find(i=>i[optionKey] === modelValue)"></slot>
          <slot v-else-if="$slots.hasOwnProperty('both')" name="both" :props="options.find(i=>i[optionKey] === modelValue)"></slot>
          <span v-else>{{ options.find(i=>i[optionKey] === modelValue)[optionLabel] }}</span>
        </div>
      </div>

      <!--Trigger Icons-->
      <div class="flex items-center space-x-2">
        <!--Clear Button-->
        <font-awesome-icon
            v-if="typeof modelValue === 'boolean' ? true : modelValue"
            @click.stop="clear"
            icon="circle-xmark"
            class="hover:text-rose-600 active:scale-90 duration-100"/>
        <!--Trigger-->
        <font-awesome-icon icon="chevron-down"/>
      </div>
    </div>

    <!--Options-->
      <div v-if="showOptions"
           class="absolute z-50 bg-white dark:bg-slate-600 border shadow-lg rounded-md py-1 w-full">
        <template v-for="option in options" :key="option">
          <div @click="select(option)"
               class="flex justify-between items-center border-b last:border-b-0 last:rounded-b first:rounded-t py-1 px-2 hover:bg-slate-100 dark:hover:bg-slate-800/50 cursor-pointer transition-all">
            <!--Label-->
            <div>
              <slot v-if="$slots.hasOwnProperty('option')" name="option" :props="option"></slot>
              <slot v-else-if="$slots.hasOwnProperty('both')" name="both" :props="option"></slot>
              <span v-else v-text="option[optionLabel]"></span>
            </div>

            <!--Selected Indicator-->
            <font-awesome-icon icon="circle-check" v-if="option[optionKey] === modelValue"/>
          </div>
        </template>
      </div>
  </div>
</template>
