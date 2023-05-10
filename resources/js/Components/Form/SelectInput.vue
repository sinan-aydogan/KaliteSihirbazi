<script setup>
import {computed, ref, watch} from "vue";
import {onClickOutside, onKeyStroke} from "@vueuse/core";

const props = defineProps({
    modelValue: {
        type: [String, Number, Date, Boolean, Object, Array],
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
    emitObject: {
        type: Boolean,
        default: false
    },
    disabled: Boolean
});

const emit = defineEmits(['update:modelValue', 'changed'])

/*Outside click*/
const target = ref();
onClickOutside(target, () => showOptions.value = false);

const currentIndex = ref(-1);

onKeyStroke('ArrowDown', () => {
    currentIndex.value = currentIndex.value + 1;
})

onKeyStroke('ArrowUp', () => {
    currentIndex.value = currentIndex.value - 1;
})

onKeyStroke('Enter', () => {
    select(props.options[currentIndex.value])
    currentIndex.value = -1;
})

/*Show Options*/
const showOptions = ref();
const toggle = () => {
    showOptions.value = !showOptions.value
}

/*Selected*/
const selected = computed(() => {
    if (props.modelValue) {
        if (props.emitObject) {
            return props.modelValue || {}
        } else {
            return props.options.find(i => i[props.optionKey] === props.modelValue)
        }
    } else {
        return null
    }
})

/*Select*/
const select = (option) => {
    if (option) {
        emit("update:modelValue", props.emitObject ? option : option[props.optionKey]);
        showOptions.value = false;
    }
}

/*Clear*/
const clear = () => {
    showOptions.value = false;
    emit("update:modelValue", null);
}

watch(() => props.modelValue, () => {
    emit('changed')
})
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
                <span v-if="(typeof modelValue === 'boolean' ? false : !modelValue) || modelValue.length === 0"
                      v-text="selectText.length > 0 ? selectText : t('action.select')"></span>
                <!--Selected-->
                <div v-else>
                    <slot v-if="$slots.hasOwnProperty('selected')" name="selected"
                          :props="selected"></slot>
                    <slot v-else-if="$slots.hasOwnProperty('both')" name="both"
                          :props="selected"></slot>
                    <span v-else>{{ selected[optionLabel] }}</span>
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
        <div v-if="showOptions && options.length > 0"
             class="absolute z-50 bg-white dark:bg-slate-800 border dark:border-slate-600 shadow-lg rounded-md py-1">
            <template v-for="(option,index) in options" :key="option">
                <div @click="select(option)"
                     class="select-option"
                     :class="currentIndex === index ? 'select-option__active' : ''"
                >
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

<style scoped lang="sass">
.select-option
    @apply flex justify-between items-center border-b dark:border-slate-600 last:border-b-0 last:rounded-b first:rounded-t py-1 px-2 hover:bg-slate-100 dark:hover:bg-slate-600/75 cursor-pointer transition-all whitespace-nowrap

.select-option__active
    @apply bg-slate-100 dark:bg-slate-600/75
</style>
