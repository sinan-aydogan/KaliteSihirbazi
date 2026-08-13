<script setup>
import {defineEmits, ref, inject, onMounted, toRefs} from "vue";

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  placeholder: String,
  options: {
    type: Array,
    default: () => []
  },
  valueKey: {
    type: String,
    default: 'id'
  },
  labelKey: {
    type: String,
    default: 'name'
  },
  selectPlaceholder: {
    type: String,
    default: 'Seçiniz'
  },
  selectKey: {
    type: String,
    default: 'select'
  },
  textKey: {
    type: String,
    default: 'text'
  }
})

const {modelValue} = toRefs(props)

const emit = defineEmits(['update:modelValue']);

const errorStatus = inject('errorStatus')

const input = ref(null);

const inputValue = ref({});

onMounted(() => {
  inputValue.value[props.textKey] = props.modelValue[props.textKey] ? props.modelValue[props.textKey] : ''
  inputValue.value[props.selectKey] = props.modelValue[props.selectKey] ? props.modelValue[props.selectKey] : null
})

const addItem = () => {
  if (inputValue.value[props.textKey] && inputValue.value[props.selectKey]) {
    let value = {...inputValue.value}
    modelValue.value.push(value);

    /*Reset*/
    inputValue.value[props.selectKey] = null
    inputValue.value[props.textKey] = ''
  }
}

const deleteItem = (item) => {
  props.modelValue.splice(props.modelValue.findIndex(i => i === item), 1)
}
</script>

<template>
  <div>
    <!--List-->
    <div v-if="modelValue.length>0"
         class="flex flex-col w-full border rounded-t-lg dark:border-slate-600 space-y-2 p-3">
      <template v-for="i in modelValue">
        <div class="flex justify-between items-center px-2 border-b last:border-0 border-slate-500 pb-2 last:pb-0">
          <div class="grid grid-cols-6 justify-between items-center space-x-8">
            <!--Text Value-->
            <span v-text="i[textKey]" class="col-span-4"></span>
            <!--Select Value-->
            <span v-text="options.find(j=>j[valueKey] === i[selectKey])[labelKey]"
                  class="border-l dark:border-slate-500 pl-4 whitespace-nowrap"></span>
          </div>
          <!--Delete-->
          <button
              type="button"
              class="grid h-8 w-8 shrink-0 place-items-center rounded-md text-slate-500 transition hover:bg-rose-50 hover:text-rose-600 dark:text-slate-300 dark:hover:bg-rose-950/40 dark:hover:text-rose-400"
              @click="deleteItem(i)"
          >
            <font-awesome-icon icon="fa-solid fa-trash"/>
          </button>

        </div>
      </template>
    </div>
    <!--Adding Form-->
    <div class="flex" :class="inputRef ? inputRef ? 'bg-red-500' : 'bg-blue-500' :''">
      <!--Text Input-->
      <input
          v-model="inputValue[textKey]"
          class="flex flex-grow px-4 h-10 dark:bg-slate-800/50 border dark:border-slate-600"
          :class="modelValue.length===0 ? 'rounded-l-lg': 'rounded-bl-lg'"
          :placeholder="placeholder ? placeholder : t('message.feedback.writeHereAndClickPlus')"
          ref="input"
      />
      <!--Select-->
      <select
          v-model="inputValue[selectKey]"
          class="flex flex-grow px-4 h-10 dark:bg-slate-800/50 border border-l-0 dark:border-slate-600 placeholder-amber-50"
      >
        <option :value="null" disabled selected>{{ selectPlaceholder }}</option>
        <!--Options-->
        <template v-for="i in options">
          <option :value="i[valueKey]" v-text="i[labelKey]"></option>
        </template>
      </select>
      <!--Add Button-->
      <button
          type="button"
          @click="addItem"
          class="flex h-10 w-10 items-center justify-center border border-l-0 border-green-600 bg-green-600 text-white transition hover:border-green-500 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 dark:border-green-600 dark:bg-green-600 dark:hover:border-green-500 dark:hover:bg-green-500"
          :class="modelValue.length===0 ? 'rounded-r-lg': 'rounded-br-lg'"
      >
        <font-awesome-icon icon="fa-solid fa-plus"/>
      </button>
    </div>
  </div>
</template>
