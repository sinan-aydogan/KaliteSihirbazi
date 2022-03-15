<template>
    <div class="relative flex items-center space-x-3 bg-white rounded-lg shadow p-3 text-slate-700 select-none" ref="dataWidget">

        <div class="flex items-center space-x-2">
            <span v-if="$slots.value || value" class="text-4xl font-bold">
                <span v-if="value" v-text="value"/>
                <slot name="value"></slot>
            </span>
        </div>

        <!--Titles-->
        <div class="flex flex-col leading-none justify-center mt-1">
            <p v-if="$slots.title || title" class="font-semibold">
                <span v-if="title" v-text="title"/>
                <slot name="title"></slot>
            </p>
            <p v-if="$slots.subTitle || subTitle" class="text-xs text-slate-500">
                <span v-if="subTitle" v-text="subTitle"/>
                <slot name="subTitle"></slot>
            </p>
        </div>

        <!--Diff-->
        <div
            v-if="$slots.diff || diff"
            class="text-xs py-[.05rem] px-[.4rem] rounded-full mt-1"
            :class="indicatorStyle[diffColor]"
        >
            <span v-if="diff" v-text="diff"/>
            <slot name="diff"></slot>
        </div>

        <!--Limit-->
        <div v-if="limit" class="absolute z-20 right-0.5 bottom-1 text-xs italic mt-1 group">
            <span class="flex items-center space-x-1 overflow-hidden group-hover:bg-white group-hover:border px-1 group-hover:rounded-lg sm:border-none sm:border-transparent">
                <font-awesome-icon icon="info-circle" class="block sm:hidden"/>
                <span v-text="limit" class="hidden sm:block group-hover:block"></span>
            </span>
        </div>


        <!--Options Trigger-->
        <div v-if="$slots.options || options" class="absolute flex justify-center items-center right-2 top-0 cursor-pointer text-slate-600">
            <font-awesome-icon @click="toggle" icon="ellipsis-vertical" class="rotate-90 p-2 hover:text-rose-700"/>
            <div v-if="showOptions" class="absolute z-50 top-full right-full bg-white border shadow rounded-lg min-w-[6rem]">
                <!--Warning-->
                <span v-if="$slots.options && title" class="text-xs text-center p-2 ">
                    Please, use single source that prop or slot
                </span>

                <!--Slot Source-->
                <slot v-else-if="$slots.options" name="options"></slot>

                <!--Prop Source-->
                <div v-else class="py-2">
                    <template v-for="option in options" :key="option.id">
                        <p class="hover:bg-rose-500 hover:text-gray-50 px-2 text-sm" @click="option.callBack(toggle)">{{option.label}}</p>
                    </template>
                </div>
            </div>
        </div>

        <!--Background-->
        <font-awesome-icon v-if="bgIcon" :icon="bgIcon" class="absolute z-10 right-4 opacity-10" size="2xl"/>
    </div>
</template>

<script>
import {ref} from "vue"
import {onClickOutside} from "@vueuse/core";

export default {
    name: "DataWidget",
    props: {
        diffColor: {
            type: String,
            default: 'blue'
        },
        title: {
            type: String,
            default: null
        },
        subTitle: {
            type: String,
            default: null
        },
        value: {
            type: String,
            default: null
        },
        diff: {
            type: String,
            default: null
        },
        limit: {
            type: String,
            default: null
        },
        bgIcon: {
            type: String,
            default: null
        },
        options: {
            type: [Object, Array],
            default: null
        },
    },
    setup(props){
        /*Options*/
        const showOptions = ref()
        const toggle = ()=>{
            showOptions.value = !showOptions.value
        };
        const dataWidget = ref();
        onClickOutside(dataWidget, (event) => showOptions.value = false)

        /*Style*/
        const indicatorStyle = {
            red : 'bg-rose-200 text-rose-700',
            green : 'bg-emerald-200 text-emerald-700',
            orange : 'bg-amber-200 text-amber-700',
            blue : 'bg-sky-200 text-sky-700',
            neutral: 'bg-slate-200 text-slate-700'
        }

        return {
            toggle,
            dataWidget,
            showOptions,
            indicatorStyle
        }
    }
}
</script>

<style scoped>

</style>
