<script setup>
import {ref} from "vue";
import Badge from "@/Components/Badge/Badge.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {onClickOutside} from "@vueuse/core";

const props = defineProps({
    modelValue: {
        type: Array,
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
const emit = defineEmits(['update:modelValue', 'changed'])

/*Outside click*/
const target = ref();
onClickOutside(target, (event) => showOptions.value = false);

const showOptions = ref(false)

const selectedItems = ref([])

const deleteItem = (item) => {
    selectedItems.value = selectedItems.value.filter(i => i[props.optionKey] !== item[props.optionKey])
    emit("update:modelValue", selectedItems.value.map(i => i[props.optionKey]));
}

const addItem = (item) => {
    selectedItems.value.push(item)
    emit("update:modelValue", selectedItems.value.map(i => i[props.optionKey]));
}

const updateValue = (item) => {
    if (selectedItems.value.find(i => i[props.optionKey] === item[props.optionKey])) {
        deleteItem(item)
        return
    }
    addItem(item)
}
</script>

<template>
    <div class="relative" ref="target">
        <div class="flex flex-wrap items-center px-2 min-h-[2.5rem] border border-slate-300 rounded-lg py-2 gap-2 cursor-pointer select-none" @click="showOptions=!showOptions">
            <template v-for="item in selectedItems">
                <badge>
                    <div class="flex items-center gap-2">
                        <span v-text="item[optionLabel]" class="whitespace-nowrap"></span>
                        <font-awesome-icon icon="times" class="ml-2 cursor-pointer hover:text-red-500" @click="deleteItem(item)"/>
                    </div>
                </badge>
            </template>
        </div>
        <!--Options-->
        <div v-if="showOptions && options.length>0" class="absolute flex flex-col min-w-[10rem] bg-white items-center border border-slate-300 rounded-lg mt-1 z-50 shadow-md">
            <template v-for="option in options">
                <div class="flex items-center w-full px-4 h-10 border-b last:border-b-0 border-slate-300">
                    <div class="flex items-center">
                        <input type="checkbox" class="form-checkbox rounded-md h-5 w-5 text-blue-600" @input="updateValue(option)" :checked="selectedItems.find(i=>i[optionKey] === option[optionKey])" :id="option[optionKey]" :value="option[optionKey]">
                        <label :for="option[optionKey]" class="ml-3 text-sm text-gray-600">{{ option[optionLabel] }}</label>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
