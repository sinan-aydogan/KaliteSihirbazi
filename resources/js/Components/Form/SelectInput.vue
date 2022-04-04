<template>
    <div class="relative space-y-1 gap-1 min-w-[12rem]" ref="target">
        <!--Place holder-->
        <div @click="toggle"
             class="flex justify-between items-center space-x-2 h-10 border px-4 py-2 rounded-lg cursor-pointer select-none">
            <div class="block overflow-hidden whitespace-nowrap">
                <!--Placeholder-->
                <span v-if="!modelValue" v-text="selectText.length>0 ? selectText : $t('form.selectInput.selectOption')"></span>
                <!--Selected-->
                <div v-else>
                    <slot v-if="$slots[selected[optionKey]]" :name="selected[optionKey]"></slot>
                    <span v-else>{{ selected[optionLabel] }}</span>
                </div>
            </div>

            <!--Trigger Icons-->
            <div class="flex items-center space-x-2">
                <!--Clear Button-->
                <font-awesome-icon
                    v-if="selected"
                    @click.stop="clear"
                    icon="circle-xmark"
                    class="hover:text-rose-600 active:scale-90 duration-100"
                />
                <!--Trigger-->
                <font-awesome-icon icon="chevron-down"/>
            </div>
        </div>

        <!--Selected Content-->

        <!--Options-->
        <div v-if="showOptions" class="absolute z-50 bg-white border shadow-lg rounded-lg w-full">
            <template v-for="option in options" :key="option">
                <div @click="select(option)" class="flex justify-between items-center border-b last:border-b-0 last:rounded-b first:rounded-t py-1 px-2 hover:bg-slate-100 cursor-pointer">
                    <!--Label-->
                    <div >
                        <slot v-if="$slots[option[optionKey]]" :name="option[optionKey]" :props="option"></slot>
                        <span v-else v-text="option[optionLabel]"></span>
                    </div>

                    <!--Selected Indicator-->
                    <font-awesome-icon icon="circle-check" v-if="option[optionKey] === modelValue"/>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import {ref} from "vue";
import {onClickOutside} from "@vueuse/core";

export default {
    name: "SelectInput",

    props: {
        modelValue: {
            type: [String, Number, Date],
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
        }
    },

    setup(props, {emit}) {
        /*Outside click*/
        const target = ref();
        onClickOutside(target, (event) => showOptions.value = false);

        /*Show Options*/
        const showOptions = ref();
        const toggle = () => {
            showOptions.value = !showOptions.value
        }

        /*Select*/
        const selected = ref();
        const select = (option) => {
            selected.value = option;
            emit("update:modelValue", option[props.optionKey]);
            showOptions.value = false;
        }

        /*Clear*/
        const clear = () => {
            showOptions.value = false;
            selected.value = null;
            emit("update:modelValue", null);
        }

        return {
            select,
            clear,
            toggle,
            selected,
            showOptions,
            target
        }
    }
}
</script>

<style scoped>

</style>
