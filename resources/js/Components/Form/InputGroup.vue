<template>
    <div>
        <label :for="labelFor">
            <!--Label-->
            <div v-if="label || $slots.label" class="font-semibold">
                <span v-if="label" v-text="label"></span>
                <slot v-else name="label"/>
            </div>
            <!--Sub Label-->
            <div v-if="subLabel || $slots.subLabel" class="text-xs italic">
                <span v-if="subLabel" v-text="subLabel"></span>
                <slot v-else name="subLabel"/>
            </div>
        </label>

        <!--Input Item-->
        <div>
            <slot></slot>
        </div>

        <!--Error-->
        <div>
            <!--Front End Error-->
            <div v-if="errors.length > 0">
                <template v-for="error in errors" :key="error.$uid">
                    <p class="text-sm text-red-600 mt-2 whitespace-nowrap">{{ error.$message }}</p>
                </template>
            </div>

            <!--Backend Error-->
            <div v-else>
                <p
                    class="text-sm text-red-600 mt-2 whitespace-nowrap"
                >{{ $page.props.errors[labelFor] }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {computed, provide, ref, toRefs} from "vue";
import {Inertia} from "@inertiajs/inertia";

export default {
    name: "InputGroup",
    props: {
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
        }
    },
    setup(props) {
        /*Error Management*/
        const {errors} = toRefs(props);
        const errorStatus = computed(()=>{
            if(errors.value.length>0 || Inertia.page.props.errors.length>0){
                return true
            }else{
                return false
            }
        })
        provide('errorStatus', errorStatus);
    }
}
</script>

<style scoped>

</style>
