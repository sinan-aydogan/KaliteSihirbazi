<template>
    <div>
        <div class="mt-1 relative rounded-md shadow-sm">
            <!--Prepend-->
            <div v-if="$slots.prepend" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span class="text-gray-500 sm:text-sm">
                    <slot name="prepend"></slot>
                </span>
            </div>
            <input
                :type="inputType"
                :name="inputId"
                :id="inputId"
                class=" block w-full sm:text-sm dark:bg-slate-900/30 border-slate-300 dark:border-slate-600 rounded-md"
                :class="[
                    {'focus:ring-rose-500 border-rose-500 focus:border-rose-500' : errorStatus},
                    {'focus:ring-indigo-500 focus:border-indigo-500' : !errorStatus},
                    {'pl-7' : $slots.prepend},
                    {'pr-7' : $slots.append},
                ]"
                :placeholder="placeholder"
            />
            <!--Append-->
            <div v-if="errorStatus || $slots.append" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span class="text-gray-500 sm:text-sm">
                    <slot name="append"></slot>
                    <font-awesome-icon v-if="errorStatus" icon="circle-exclamation" class="text-rose-600" size="lg"/>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import {inject} from "vue";

export default {
    name: "TextInput",
    props: {
        inputType: {
            type: String,
            default: 'text'
        },
        inputId: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        }
    },
    setup(){
        const errorStatus = inject('errorStatus')

        return {
            errorStatus
        }
    }
}
</script>

<style scoped>

</style>
