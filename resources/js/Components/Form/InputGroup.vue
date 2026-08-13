<script setup>
import { computed, provide } from "vue";
import { usePage } from "@inertiajs/vue3";

const props = defineProps({
    errors: {
        type: [Array, Object, String],
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
const page = usePage();
const clientErrors = computed(() => Array.isArray(props.errors) ? props.errors : []);
const directError = computed(() => {
    if (typeof props.errors === 'string' && props.errors.length > 0) {
        return props.errors;
    }

    return page.props.errors?.[props.labelFor] ?? null;
});
const bagErrors = computed(() => {
    const errors = page.props.errorBags?.[props.errorBag]?.[props.labelFor];

    if (!errors) return [];

    return Array.isArray(errors) ? errors : [errors];
});
const errorStatus = computed(() => {
    return clientErrors.value.length > 0 || Boolean(directError.value) || bagErrors.value.length > 0;
})


provide('errorStatus', errorStatus);

</script>

<template>
    <div>
        <label :for="labelFor">
            <!--Label-->
            <span v-if="label || $slots.label" class="text-sm font-medium">
                <span v-if="label" v-text="label"></span>
                <slot v-else name="label" />
            </span>
            <!--Sub Label-->
            <span v-if="subLabel || $slots.subLabel" class="text-xs italic ml-2">
                <span v-if="subLabel" v-text="subLabel"></span>
                <slot v-else name="subLabel" />
            </span>
        </label>

        <!--Input Item-->
        <div class="mt-1">
            <slot></slot>
        </div>

        <!--Error-->
        <div>
            <!--Front End Error-->
            <div v-if="clientErrors.length > 0">
                <template v-for="error in clientErrors" :key="error.$uid">
                    <p class="text-sm text-red-600 dark:text-rose-400 mt-1 ml-1 whitespace-nowrap">{{  error.$message  }}</p>
                </template>
            </div>

            <!--Backend Error-->
            <div v-if="directError">
                <p class="text-sm text-rose-600 dark:text-rose-400 mt-1 ml-1 whitespace-nowrap">
                    {{ directError }}
                </p>
            </div>

            <div v-if="bagErrors.length > 0">
                <template v-for="error in bagErrors" :key="error">
                    <p class="text-xs text-rose-600 dark:text-rose-400 mt-1 ml-1 whitespace-nowrap">
                        {{  error  }}
                    </p>
                </template>
            </div>
        </div>
    </div>
</template>
