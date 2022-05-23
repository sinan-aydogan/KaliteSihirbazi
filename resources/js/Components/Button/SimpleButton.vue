<template>
    <div class="flex" @click="$emit('handleClick')">
        <button :type="type"
                class="flex min-h-[2rem] items-center justify-center whitespace-nowrap rounded-md border border-transparent space-x-2 px-4 py-2 text-sm font-medium text-white shadow-sm tracking-widest focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-25 disabled:cursor-not-allowed active:scale-95 transition"
                :class="[
                    colors[color],
                    {
                        'h-8 px-2' : size === 'slim',
                        'w-full' : fullSize,
                    }
                    ]"
                :disabled="disabled"
        >
            <span v-text="label" v-if="label"/>
            <slot v-else></slot>
        </button>
    </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "SimpleButton",
    props: {
        type: {
            type: String,
            default: 'submit',
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
        }
    },
    setup() {
        const colors = {
            blue: 'bg-blue-600 text-blue-50 active:bg-blue-700 focus:ring-blue-600',
            red: 'bg-red-600 text-red-50 active:bg-red-700 focus:ring-red-600',
            green: 'bg-green-600 text-green-50 active:bg-green-700 focus:ring-green-600',
            orange: 'bg-orange-600 text-orange-50 active:bg-orange-700 focus:ring-orange-600',
            neutral: 'bg-slate-600 dark:bg-slate-700/75 dark:hover:bg-slate-500/75 text-slate-50 active:bg-slate-700 focus:ring-slate-600',
        }

        return {
            colors
        }
    }
})
</script>
