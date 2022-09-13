<script setup>
import {defineEmits, ref, inject} from "vue";

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  placeholder: String
})

const emit = defineEmits(['update:modelValue']);

const errorStatus = inject('errorStatus')

const input = ref(null);

const inputValue = ref('');

const addItem = ()=>{
  if(inputValue.value){
    props.modelValue.push(inputValue.value)
    inputValue.value = ''
  }
}

const deleteItem = (item)=>{
  props.modelValue.splice(props.modelValue.findIndex(i=>i === item),1)
}
</script>

<template>
  <div>
    <!--List-->
    <div v-if="modelValue.length>0" class="flex flex-col w-full border rounded-t-lg dark:border-slate-600 space-y-2 p-3">
      <template v-for="i in modelValue">
        <div class="flex justify-between items-center px-2 border-b last:border-0 border-slate-500 pb-2 last:pb-0">
          <!--Value-->
          <span v-text="i"></span>
          <!--Delete-->
          <font-awesome-icon @click="deleteItem(i)" icon="fa-solid fa-trash" class="cursor-pointer"/>
        </div>
      </template>
    </div>
    <!--Adding Form-->
    <div class="flex" :class="inputRef ? inputRef ? 'bg-red-500' : 'bg-blue-500' :''">
      <!--Input-->
      <input
          v-model="inputValue"
          class="flex flex-grow px-4 h-10 dark:bg-slate-800/50 border dark:border-slate-600"
          :class="modelValue.length===0 ? 'rounded-l-lg': 'rounded-bl-lg'"
          :placeholder="placeholder ? placeholder : t('message.feedback.writeHereAndClickPlus')"
          ref="input"
      />
      <!--Add Button-->
      <button @click="addItem" class="flex justify-center bg-emerald-700 items-center border border-l-0 dark:border-slate-600 w-10 h-10" :class="modelValue.length===0 ? 'rounded-r-lg': 'rounded-br-lg'">
        <font-awesome-icon icon="fa-solid fa-plus"/>
      </button>
    </div>
  </div>
</template>