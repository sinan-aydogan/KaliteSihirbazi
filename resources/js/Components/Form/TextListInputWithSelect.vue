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
          <font-awesome-icon @click="deleteItem(i)" icon="fa-solid fa-trash" class="cursor-pointer"/>

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
          @click="addItem"
          class="flex justify-center bg-emerald-700 items-center border border-l-0 dark:border-slate-600 w-10 h-10"
          :class="modelValue.length===0 ? 'rounded-r-lg': 'rounded-br-lg'"
      >
        <font-awesome-icon icon="fa-solid fa-plus"/>
      </button>
    </div>
  </div>
</template>