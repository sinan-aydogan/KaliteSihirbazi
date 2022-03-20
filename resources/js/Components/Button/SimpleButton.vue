<template>
    <button :type="type"
            class="inline-flex hover:bg-opacity-5 border border-transparent items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest  focus:outline-none focus:ring focus:ring-indigo-500  disabled:opacity-25 transition"
            :class="colors[color]"
    >
        <slot></slot>
    </button>
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
        }
    },
    setup() {
        const colors = {
            blue: 'bg-blue-600 text-blue-50 hover:border-blue-600 hover:text-blue-700 active:bg-blue-700 active:text-blue-50 focus:border-blue-900',
            red: 'bg-red-600 text-red-50 hover:border-red-600 hover:text-red-700 active:bg-red-700 active:text-red-50 focus:border-red-900',
            green: 'bg-green-600 text-green-50 hover:border-green-600 hover:text-green-700 active:bg-green-700 active:text-green-50 focus:border-green-900',
            orange: 'bg-orange-600 text-orange-50 hover:border-orange-600 hover:text-orange-700 active:bg-orange-700 active:text-orange-50 focus:border-orange-900',
            neutral: 'bg-slate-600 text-slate-50 hover:border-slate-600 hover:text-slate-700 active:bg-slate-700 active:text-slate-50 focus:border-slate-900',
        }

        return {
            colors
        }
    }
})
</script>
