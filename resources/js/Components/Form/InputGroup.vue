<script setup>
import { computed, provide } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";

const props = defineProps({
    errors: {
        type: [Array, Object],
        default: () => {
            return []
        }
    },
    label: {
        type: String,
        default: null
    },
    labelFor: {
        type: String,
        default: null
    },
    subLabel: {
        type: String,
        default: null
    },
    subLabelColor: {
        type: String,
        default: 'red'
    },
    errorBag: String
})

/*Error Management*/
const errorStatus = computed(() => {
    return props.errors.length > 0 ||
        usePage().props.value.errors[props.labelFor] ||
        (usePage().props.value.errorBags.hasOwnProperty(props.errorBag) && usePage().props.value.errorBags[props.errorBag].hasOwnProperty(props.labelFor));
})


provide('errorStatus', errorStatus);

</script>

<template>
    <div>
        <label :for="labelFor">
            <!--Label-->
            <div v-if="label || $slots.label" class="text-sm font-medium">
                <span v-if="label" v-text="label"></span>
                <slot v-else name="label" />
            </div>
            <!--Sub Label-->
            <div v-if="subLabel || $slots.subLabel" class="text-xs italic">
                <span v-if="subLabel" v-text="subLabel"></span>
                <slot v-else name="subLabel" />
            </div>
        </label>

        <!--Input Item-->
        <div class="mt-1">
            <slot></slot>
        </div>

        <!--Error-->
        <div>
            <!--Front End Error-->
            <div v-if="errors.length > 0">
                <template v-for="error in errors" :key="error.$uid">
                    <p class="text-sm text-red-600 dark:text-rose-400 mt-1 ml-1 whitespace-nowrap">{{  error.$message  }}</p>
                </template>
            </div>

            <!--Backend Error-->
            <div v-if="$page.props.errors.hasOwnProperty(labelFor)">
                <p class="text-sm text-rose-600 dark:text-rose-400 mt-1 ml-1 whitespace-nowrap">
                    {{  $page.props.errors[labelFor]  }}
                </p>
            </div>

            <div
                v-if="$page.props.errorBags.hasOwnProperty(errorBag) && $page.props.errorBags[errorBag].hasOwnProperty(labelFor)">
                <template v-for="error in $page.props.errorBags[errorBag][labelFor]">
                    <p class="text-xs text-rose-600 dark:text-rose-400 mt-1 ml-1 whitespace-nowrap">
                        {{  error  }}
                    </p>
                </template>
            </div>
        </div>
    </div>
</template>
